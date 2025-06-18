import {getDB} from '../db.mjs';
import {response} from '../utils/responseHelpers.mjs';
import {ObjectId} from 'mongodb';

export async function getAllUsers(req, res) {
  try {
    const users = await getDB().collection('users')
      .find({}, {projection: {name: 1}})
      .toArray();

    res.render('pug/users.pug', {users: users.map(user => ({id: user._id.toString(), name: user.name}))});
  } catch (err) {
    console.error('❌ Error fetching users:', err.message);
    response.serverError(res, 'Failed to fetch users');
  }
}

export async function postAllUsers(req, res) {
  const {name} = req.body;
  console.log('📥 Incoming POST /users', req.body);

  if (!name || typeof name !== 'string') {
    return response.badRequest(res, 'Bad Request');
  }

  try {
    const result = await getDB().collection('users').insertOne({name});
    if (!result.acknowledged) {
      return response.serverError(res, 'Insert failed');
    }

    response.created(res, {_id: result.insertedId, name});
  } catch (err) {
    console.error('❌ DB insert error:', err.message);
    response.serverError(res, 'Internal Error');
  }
}

export async function getUserById(req, res) {
  const {userId} = req.params;

  try {
    const user = await getDB().collection('users').findOne({_id: new ObjectId(userId)});
    if (!user) {
      return response.notFound(res, 'Not Found');
    }

    res.render('pug/user.pug', {user: {id: user._id.toString(), ...user}});
  } catch (err) {
    console.error('❌ DB fetch error:', err.message);
    response.serverError(res, 'Internal Error');
  }
}

export async function putUserById(req, res) {
  const {userId} = req.params;
  const {name} = req.body;

  if (!name || typeof name !== 'string') {
    return response.badRequest(res, 'Bad Request');
  }

  try {
    const result = await getDB().collection('users').updateOne(
      {_id: new ObjectId(userId)},
      {$set: {name}}
    );

    if (result.matchedCount === 0) {
      return response.notFound(res, 'Not Found');
    }

    response.ok(res, {id: userId, name});
  } catch (err) {
    console.error('❌ DB update error:', err.message);
    response.serverError(res, 'Internal Error');
  }
}

export async function deleteUser(req, res) {
  const {userId} = req.params;

  try {
    const result = await getDB().collection('users').deleteOne({_id: new ObjectId(userId)});
    if (result.deletedCount === 0) {
      return response.notFound(res, 'Not Found');
    }

    response.noContent(res);
  } catch (err) {
    console.error('❌ DB delete error:', err.message);
    response.serverError(res, 'Internal Error');
  }
}
