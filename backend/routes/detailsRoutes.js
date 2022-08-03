import { Router } from 'express';
import { scrapeAnimeDetails } from '../lib/anime_parser.js';
const router = Router();

router.get('/anime-details/:id', async (req, res) => {
 try {
  const id = req.params.id;

  const data = await scrapeAnimeDetails({ id: id });

  res.status(200).json(data);
 } catch (err) {
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

export { router };
