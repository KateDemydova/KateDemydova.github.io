export function setTheme(req, res) {
  const { theme } = req.body;

  if (!['light', 'dark'].includes(theme)) {
    return res.status(400).json({error: 'Invalid theme value'});
  }

  res.cookie('theme', theme, {
    httpOnly: false,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    sameSite: 'lax',
  });

  res.json({ message: `Theme set to ${theme}`});
}

export function getTheme(req, res) {
  const theme = req.cookies.theme || 'light';
  res.json({ theme });
}