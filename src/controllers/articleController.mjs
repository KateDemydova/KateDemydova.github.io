import { response } from "../utils/responseHelpers.mjs";
import { articles } from '../data/articles.mjs';

export function getAllArticles(req, res) {
  const articlesList = Array.from(articles.entries());
  res.render('ejs/articles.ejs', { articles: articlesList });
}

export function postAllArticles(req, res) {
  const { title } = req.body;

  const id = String(Date.now());
  const article = { title };
  articles.set(id, article);

  response.created(res, { id, ...article });
}


export function getArticlesById(req, res) {
  const { articleId } = req.params;
  const article = articles.get(articleId);

  if (!article) {
    return response.notFound(res, 'Not Found');
  }

  res.render('ejs/article.ejs', {
    article: { id: articleId, ...article }
  });
}

export function putArticlesById(req, res) {
  const { articleId } = req.params;
  const { title } = req.body;

  const article = articles.get(articleId);
  if (!article) {
    return response.notFound(res, 'Not Found');
  }

  articles.set(articleId, { title });
  response.ok(res, { id: articleId, title });
}

export function deleteArticlesById(req, res) {
  const { articleId } = req.params;

  const article = articles.get(articleId);
  if (!article) {
    return response.notFound(res, 'Not Found');
  }

  articles.delete(articleId);
  response.noContent(res);
}