import { Router } from 'express';
import { scrapeThread } from '../lib/anime_parser.js';
const router = Router();

router.get('/thread/:episodeId', async (req, res) => {
 try {
  const episodeId = req.params.episodeId;
  const page = req.query.page;

  const data = await scrapeThread({ episodeId: episodeId, page: page });

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
