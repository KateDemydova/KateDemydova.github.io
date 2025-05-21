export const response = {
  ok: (res, message = 'Ok') => {
    res.status(200).send(message);
  },

  created: (res, message = 'Created') => {
    res.status(201).send(message);
  },

  noContent: (res) => {
    res.sendStatus(204);
  },

  badRequest: (res, message = 'Bad Request') => {
    res.status(400).send(message);
  },

  notFound: (res, message = 'Not Found') => {
    res.status(404).send(message);
  }
}