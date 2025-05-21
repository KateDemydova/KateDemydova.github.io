import { response } from '../utils/responseHelpers.mjs';

const VALID_USER_IDS = ['1', '2', '123'];

export function getAllUsers(req, res) {
  response.ok(res, 'Get users route');
}

export function postAllUsers(req, res) {
  const { name } = req.body;

  if (!name || typeof name !== 'string') {
    return response.badRequest(res, 'Bad Request');
  }

  response.created(res, 'Post users route');
}

export function getUserById(req, res) {
  const { userId } = req.params;
  const exists = VALID_USER_IDS.includes(userId);

  if (!exists) {
    return response.notFound(res, 'Not Found');
  }

  response.ok(res, `Get user by Id route: ${userId}`);
}

export function putUserById(req, res) {
  const { userId } = req.params;
  const { name } = req.body;

  if (!name || typeof name !== 'string') {
    return response.badRequest(res, 'Bad Request');
  }

  const exists = VALID_USER_IDS.includes(userId);
  if (!exists) {
    return response.notFound(res, 'Not Found');
  }

  response.ok(res, `Put user by Id route: ${userId}`);
}

export function deleteUser(req, res) {
  const { userId } = req.params;
  const exists = VALID_USER_IDS.includes(userId);

  if (!exists) {
    return response.notFound(res, 'Not Found');
  }

  response.noContent(res);
}
