import {response} from "../utils/responseHelpers.mjs";


export function checkUserAccess(req, res, next) {
  const user = req.user;
  const userId = req.params.userId;

  if (!user || user.id !== userId) {
    return response.forbidden(res, 'Forbidden');
  }
  next();
}

export function validUserData(req, res, next) {
  const {name} = req.body;
  console.log('🛂 validUserData triggered:', req.body);

  if (!name || typeof name !== 'string' || name.trim() === '') {
    console.log('⛔ Невалідні дані користувача:', req.body);
    return response.badRequest(res, 'Bad Request');
  }

  next();
}