export const sendHtml = (res, statusCode, html) => {
  const buffer = Buffer.from(html, 'utf8');
  res.writeHead(statusCode, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': buffer.length,
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(buffer);
};