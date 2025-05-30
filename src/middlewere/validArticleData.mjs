import { response } from '../utils/responseHelpers.mjs';

export function validArticleData(req, res, next) {
  const { title } = req.body;

  if (!title || typeof title !== 'string') {
    return response.badRequest(res, 'Field "title" is required and must be a string');
  }

  next();
}