export function mockAuth(req, res, next) {
  req.user = { id: '1' };
  next();
}