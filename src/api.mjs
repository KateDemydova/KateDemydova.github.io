import {
  aboutHtmlTemplate,
  contactHtmlTemplate,
  notFoundHtmlTemplate,
  rootHtmlTemplate, serverErrorHtmlTemplate,
  submitHtmlTemplate
} from "./data.mjs";

import querystring from 'node:querystring';
import {sendHtml} from "./utilite.mjs";

export const generateHTML = (req, res) => {
  sendHtml(res, 200, rootHtmlTemplate());
}

export const generateAbout = (req, res) => {
  sendHtml(res, 200, aboutHtmlTemplate());
}

export const generateContact = (req, res) => {
  sendHtml(res, 200, contactHtmlTemplate());
}

const allowedRoutes = ['/', '/about', '/contact', '/submit'];

export const generateNotFound = (req, res) => {
  sendHtml(res, 404, notFoundHtmlTemplate());
}

export const postData = (req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    try {
      const parsed = querystring.parse(body);
      const name = parsed.name?.trim();
      const email = parsed.email?.trim();

      if (!name || !email) {
        const message = 'Invalid form data';
        const buffer = Buffer.from(message, 'utf8');
        res.writeHead(400, {
          'Content-Type': 'text/html; charset=utf-8',
          'Content-Length': buffer.length,
          'X-Content-Type-Options': 'nosniff',
        });
        return res.end(buffer);
      }
      return sendHtml(res, 200, submitHtmlTemplate(name, email));
    } catch (err) {
      console.error('Internal Error:', err);
      return sendHtml(res, 500, serverErrorHtmlTemplate());
    }
  });
};





