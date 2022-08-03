import { Router } from 'express';
import { scrapeGenre } from '../lib/anime_parser.js';
const router = Router();

router.get('/genre/:genre', async (req, res) => {
 try {
  const genre = req.params.genre;
  const page = req.query.page;

  const data = await scrapeGenre({ genre: genre, page: page });

  res.status(200).json(data);
 } catch (err) {
  res.status(500).send({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

export { router };
