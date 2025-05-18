export const rootHtmlTemplate = () => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Home</title>
    </head>
    <body>
      <h1>Home</h1>
      <p>Welcome to the Home Page</p>
    </body>
  </html>`;

export const aboutHtmlTemplate = () => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>About</title>
    </head>
    <body>
      <h1>About</h1>
      <p>Learn more about us</p>
    </body>
  </html>`;


export const contactHtmlTemplate = () => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Contact</title>
    </head>
    <body>
      <h1>Contact</h1>
      <p>Get in touch</p>
    </body>
  </html>`;


export const notFoundHtmlTemplate = () => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Notfound</title>
    </head>
    <body>
      <h1>Page Not Found</h1>
    </body>
  </html>`;

export const submitHtmlTemplate = (name, email) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Form Submitted</title>
  </head>
  <body>
    <h1>Form Submitted</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
  </body>
</html>`;

export const serverErrorHtmlTemplate = () => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Error 500</title>
    </head>
    <body>
      <h1>Error 500<</h1>
      <p>Server Error</p>
    </body>
  </html>`;
