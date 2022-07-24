import express from 'express';
import cors from 'cors';
import axios from 'axios';

import {
 scrapeGenre,
 scrapeTopAiringAnime,
 scrapeAnimeMovies,
 scrapePopularAnime,
 scrapeNewSeason,
 scrapeRecentRelease,
 scrapeSearch,
 scrapeAnimeDetails,
 scrapeSeason,
 scrapeMP4,
 scrapeStreamSB,
 scrapeFembed,
 scrapeThread,
 scrapeDownloadLinks,
 DownloadReferer,
} from './anime_parser.js';
import {
 TrendingAnimeQuery,
 favouritesAnimeQuery,
 PopularAnimeQuery,
} from './gqlQueryStrings.js';

const port = process.env.PORT || 5000;
const baseUrl = 'https://graphql.anilist.co';
const corsOptions = {
 origin: '*',
 credentails: true,
 optionSuccessStatus: 200,
 port: port,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
 res.status(200).json('Welcome to GogoAnime API!');
});

app.get('/search', async (req, res) => {
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

app.get('/recent-release', async (req, res) => {
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

app.get('/new-season', async (req, res) => {
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

app.get('/popular', async (req, res) => {
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

app.get('/anime-movies', async (req, res) => {
 try {
  const page = req.query.page;
  const alphabet = req.query.aph;

  const data = await scrapeAnimeMovies({ page: page, aph: alphabet });

  res.status(200).json(data);
 } catch (err) {
  res.status(500).send({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

app.get('/top-airing', async (req, res) => {
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

app.get('/season/:season', async (req, res) => {
 try {
  const page = req.query.page;
  const season = req.params.season;

  const data = await scrapeSeason({ page: page, season: season });

  res.status(200).json(data);
 } catch (err) {
  res.status(500).send({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

app.get('/genre/:genre', async (req, res) => {
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

app.get('/anime-details/:id', async (req, res) => {
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

app.get('/fembed/watch/:id', async (req, res) => {
 try {
  const id = req.params.id;

  const data = await scrapeFembed({ id: id });

  res.status(200).json(data);
 } catch (err) {
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

app.get('/vidcdn/watch/:id', async (req, res) => {
 try {
  const id = req.params.id;

  const data = await scrapeMP4({ id: id });

  res.status(200).json(data);
 } catch (err) {
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

app.get('/streamsb/watch/:id', async (req, res) => {
 try {
  const id = req.params.id;

  const data = await scrapeStreamSB({ id: id });

  res.status(200).json(data);
 } catch (err) {
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

app.get('/thread/:episodeId', async (req, res) => {
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

app.get('/download-links/:episodeId', async (req, res) => {
 try {
  const episodeId = req.params.episodeId;

  const data = await scrapeDownloadLinks({ episodeId: episodeId });

  res.status(200).json(data);
 } catch (err) {
  console.log(err);
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

app.get('/download', async (req, res) => {
 try {
  const downloadLink = req.rawHeaders.find(
   (x) => x.includes('https://') && x.includes('.mp4')
  );

  if (!downloadLink) {
   return res.status(400).json({
    error: 'No downloadLink provided. Make sure to add the downloadLink in the headers.',
   });
  }

  await axios
   .get(downloadLink, {
    headers: { Referer: DownloadReferer },
    responseType: 'stream',
   })
   .then((stream) => {
    return new Promise((r, j) => {
     res.writeHead(200, {
      ...stream.headers,
     });
     stream.data.pipe(res);
    });
   });

  return res.status(200).json('Done Downloading.');
 } catch (err) {
  console.log(err);
  res.status(500).json({
   status: 500,
   error: 'Internal Error',
   message: err,
  });
 }
});

app.get('/trending', async (req, res) => {
 try {
  const response = await axios({
   url: baseUrl,
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
   },
   data: {
    query: TrendingAnimeQuery,
    variables: {
     page: req.query.page === undefined ? 1 : req.query.page,
     perPage: req.query.count === undefined ? 10 : req.query.count,
    },
   },
  }).catch((err) => {
   res.status(404).json(err);
  });
  if (response === undefined || response === null) {
   res.status(404).json({
    data: 'No response',
   });
  }
  res.status(200).json(response.data);
 } catch (err) {
  console.log('Error from Trending Anime Route', err);
 }
});
app.get('/favourite', async (req, res) => {
 try {
  const response = await axios({
   url: baseUrl,
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
   },
   data: {
    query: favouritesAnimeQuery,
    variables: {
     page: req.query.page === undefined ? 1 : req.query.page,
     perPage: req.query.count === undefined ? 10 : req.query.count,
    },
   },
  }).catch((err) => {
   res.json(404).json(err);
  });
  if (response === undefined || response === null) {
   res.status(404).json({
    data: 'No response',
   });
  }
  res.status(200).json(response.data);
 } catch (err) {
  console.log('Error from favourite Anime Route', err);
 }
});

app.use((req, res) => {
 res.status(404).json({
  status: 404,
  error: 'Not Found',
 });
});

app.listen(port, () => {
 console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});