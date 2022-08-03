import { Router } from 'express';
import { scrapeFembed, scrapeStreamSB } from '../lib/anime_parser.js';
import { dubParser } from '../lib/utils.js';
const router = Router();

router.get('/fembed/watch/:id', async (req, res) => {
 try {
  const id = req.params.id;
  const dubId = dubParser(req.params.id);
  const data = await scrapeFembed({ id: id });
  const dataDub = await scrapeFembed({ id: dubId });
  if (!dataDub.error) {
   res.status(200).json({ data, dataDub });
  } else {
   res.status(200).json({ data });
  }
 } catch (err) {
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

router.get('/vidcdn/watch/:id', async (req, res) => {
 try {
  const id = req.params.id;
  const dubId = dubParser(req.params.id);
  const data = await scrapeMP4({ id: id });
  const dataDub = await scrapeMP4({ id: dubId });
  if (!dataDub.error) {
   res.status(200).json({ data, dataDub });
  } else {
   res.status(200).json({ data });
  }
 } catch (err) {
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

router.get('/streamsb/watch/:id', async (req, res) => {
 try {
  const id = req.params.id;
  const dubId = dubParser(req.params.id);
  const data = await scrapeStreamSB({ id: id });
  const dataDub = await scrapeStreamSB({ id: dubId });
  if (!dataDub.error) {
   res.status(200).json({ data, dataDub });
  } else {
   res.status(200).json({ data });
  }
 } catch (err) {
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

export { router };
