
export function requestLogger(req, res, next) {
  const { method, url, ip } = req;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}]${method}${url}from${ip}`);
  next();
}