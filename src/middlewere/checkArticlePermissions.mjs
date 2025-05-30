import {response} from "../utils/responseHelpers.mjs";
import {articles} from "../data/articles.mjs";

export function checkArticlePermissions(req,res, next) {
  const user = req.user;
  const {articleId} = req.params;

  const article = articles.get(articleId);

  if (!article) {
    return response.notFound(res, 'Not Found');
  }
  if (!user || user.id !== article.ownerId) {
    return response.forbidden(res, 'Forbidden');
  }
  req.article = article;
  next();
}