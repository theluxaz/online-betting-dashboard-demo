import { Express, Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import {pool} from './db'
import fs from 'fs'
import cors from 'cors'

dotenv.config();


if (process.env.NODE_ENV !== 'production') {
  const seedQuery = fs.readFileSync('./sql/seed-db.sql', { encoding: 'utf8' })
  pool.query(seedQuery, (err, res) => {
      console.log(err, res)
      console.log('Database Reset.')
      console.log('Seeding Completed!')
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  })
}

const app: Express = express();
const port = process.env.EXPRESS_PORT;
app.use(cors())

app.get('/api/football/events', async (req: Request, res: Response) => {
  try {
      const result = await pool.query('SELECT id, TO_CHAR(date, \'YYYY-MM-DD HH24:MI\') as date, name, type, score_a, score_b, status, outcome_name, TO_CHAR(last_updated, \'YYYY-MM-DD HH24:MI\') as last_updated, odds_a_name, odds_b_name, odds_c_name, odds_a, odds_b, odds_c FROM events where status != \'Finished\';');
      res.json(result.rows);
  } catch (error) {
      console.error('Error occurred while fetching events:', error);
      res.status(500).send('Error occurred while fetching events');
  }
});

app.get('/api/football/events/finished', async (req: Request, res: Response) => {
  try {
      const result = await pool.query('SELECT id, TO_CHAR(date, \'YYYY-MM-DD HH24:MI\') as date, name, type, score_a, score_b, status, outcome_name, TO_CHAR(last_updated, \'YYYY-MM-DD HH24:MI\') as last_updated, odds_a_name, odds_b_name, odds_c_name, odds_a, odds_b, odds_c FROM events where status = \'Finished\';');
      res.json(result.rows);
  } catch (error) {
      console.error('Error occurred while fetching finished events:', error);
      res.status(500).send('Error occurred while fetching finished events');
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});



