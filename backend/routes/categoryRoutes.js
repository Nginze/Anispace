import { Router } from 'express';
import {
 scrapeNewSeason,
 scrapePopularAnime,
 scrapeRecentRelease,
 scrapeTopAiringAnime,
} from '../lib/anime_parser.js';
const router = Router();

router.get('/recent-release', async (req, res) => {
 try {
  const page = req.query.page;
  const type = req.query.type;

  const data = await scrapeRecentRelease({ page: page, type: type });

  res.status(200).json(data);
 } catch (err) {
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

router.get('/new-season', async (req, res) => {
 try {
  const page = req.query.page;

  const data = await scrapeNewSeason({ page: page });

  res.status(200).json(data);
 } catch (err) {
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

router.get('/popular', async (req, res) => {
 try {
  const page = req.query.page;

  const data = await scrapePopularAnime({ page: page });

  res.status(200).json(data);
 } catch (err) {
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});
router.get('/top-airing', async (req, res) => {
 try {
  const page = req.query.page;

  const data = await scrapeTopAiringAnime({ page: page });

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
