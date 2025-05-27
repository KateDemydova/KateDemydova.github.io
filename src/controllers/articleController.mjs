import { response } from "../utils/responseHelpers.mjs";
import { articles } from '../data/articles.mjs';

export function getAllArticles(req, res) {
  response.ok(res, 'Get articles route');
}

export function postAllArticles(req, res) {
  const { title } = req.body;

  if (!title || typeof title !== 'string') {
    return response.badRequest(res, 'Bad Request');
  }

  response.created(res, 'Post articles route');
}

export function getArticlesById(req, res) {
  const { articleId } = req.params;
  const article = articles.get(articleId);

  if (!article) {
    return response.notFound(res, 'Not Found');
  }

  response.ok(res, `Get article by Id route: ${articleId}`);
}

export function putArticlesById(req, res) {
  const { articleId } = req.params;
  const { title } = req.body;
  const article = articles.get(articleId);

  if (!article) {
    return response.notFound(res, 'Not Found');
  }

  if (!title || typeof title !== 'string') {
    return response.badRequest(res, 'Bad Request');
  }

  response.ok(res, `Put article by Id route: ${articleId}`);
}

export function deleteArticlesById(req, res) {
  const { articleId } = req.params;
  const article = articles.get(articleId);

  if (!article) {
    return response.notFound(res, 'Not Found');
  }

  response.noContent(res);
}