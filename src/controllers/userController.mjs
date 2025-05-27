export function getAllUsers(req, res) {
  const userList = [...users.entries()].map(([id, { name }]) => ({ id, name }));
  response.ok(res, userList);
}

export function postAllUsers(req, res) {
  const { name } = req.body;

  if (!name || typeof name !== 'string') {
    return response.badRequest(res, 'Bad Request');
  }

  const id = String(Date.now());
  users.set(id, { name });

  response.created(res, { id, name });
}

export function getUserById(req, res) {
  const { userId } = req.params;

  const user = users.get(userId);
  if (!user) {
    return response.notFound(res, 'Not Found');
  }

  response.ok(res, { id: userId, ...user });
}

export function putUserById(req, res) {
  const { userId } = req.params;
  const { name } = req.body;

  if (!name || typeof name !== 'string') {
    return response.badRequest(res, 'Bad Request');
  }

  const user = users.get(userId);
  if (!user) {
    return response.notFound(res, 'Not Found');
  }

  users.set(userId, { name });

  response.ok(res, { id: userId, name });
}

export function deleteUser(req, res) {
  const { userId } = req.params;

  const exists = users.has(userId);
  if (!exists) {
    return response.notFound(res, 'Not Found');
  }

  users.delete(userId);
  response.noContent(res);
}