import { Router } from 'express';
import { scrapeSearch } from '../lib/anime_parser.js';
const router = Router();

router.get('/search', async (req, res) => {
 try {
  const keyw = req.query.keyw;
  const page = req.query.page;
  const data = await scrapeSearch({ keyw: keyw, page: page });

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
