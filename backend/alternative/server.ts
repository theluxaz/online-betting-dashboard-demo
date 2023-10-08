import { Express, Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import {pool} from '../db'
import fs from 'fs'
import cors from 'cors'

dotenv.config();


if (process.env.NODE_ENV !== 'production') {
  const seedQuery = fs.readFileSync('./seed-db.sql', { encoding: 'utf8' })
  pool.query(seedQuery, (err, res) => {
      console.log(err, res)
      console.log('Database Reset.')
      console.log('Seeding Completed!')
  })
}

const app: Express = express();
const port = process.env.EXPRESS_PORT;
app.use(cors())

app.get('/api/football/events', async (req: Request, res: Response) => {
  try {
      const result = await pool.query(`
          SELECT 
              e.id, 
              TO_CHAR(e.date, 'YYYY-MM-DD HH24:MI') as date,
              e.type, 
              e.status, 
              e.score_a, 
              e.score_b, 
              TO_CHAR(e.last_updated, 'YYYY-MM-DD HH24:MI') as last_updated,
              ta.name as team_a_name,
              tb.name as team_b_name,
              JSONB_BUILD_OBJECT(
                  'name', o.name,
                  'odds', o.odds
              ) as outcome,
              ARRAY_AGG(
                  JSONB_BUILD_OBJECT(
                      'name', oo.name, 
                      'odds', oo.odds
                  )
              ) as outcomes
          FROM events e
          INNER JOIN teams ta ON e.team_a = ta.id
          INNER JOIN teams tb ON e.team_b = tb.id
          LEFT JOIN outcomes o ON e.outcome = o.id
          LEFT JOIN outcomes oo ON e.id = oo.event_id
          WHERE e.status != 'Finished'
          GROUP BY e.id, ta.name, tb.name, o.name, o.odds;
      `);
      res.json(result.rows);
  } catch (error) {
      console.error('Error occurred while fetching events:', error);
      res.status(500).send('Error occurred while fetching events');
  }
});

app.get('/api/football/events/finished', async (req: Request, res: Response) => {
  try {
      const result = await pool.query(`
          SELECT 
              e.id, 
              TO_CHAR(e.date, 'YYYY-MM-DD HH24:MI') as date,
              e.type, 
              e.status, 
              e.score_a, 
              e.score_b, 
              TO_CHAR(e.last_updated, 'YYYY-MM-DD HH24:MI') as last_updated,
              ta.name as team_a_name,
              tb.name as team_b_name,
              CASE 
                  WHEN e.status = 'Finished' THEN 
                      JSONB_BUILD_OBJECT(
                          'name', o.name,
                          'odds', o.odds
                      )
                  ELSE NULL
              END as outcome,
              ARRAY_AGG(
                  JSONB_BUILD_OBJECT(
                      'name', oo.name, 
                      'odds', oo.odds
                  )
              ) as outcomes
          FROM events e
          INNER JOIN teams ta ON e.team_a = ta.id
          INNER JOIN teams tb ON e.team_b = tb.id
          LEFT JOIN outcomes o ON 
              e.id = o.event_id AND 
              (
                  (e.score_a > e.score_b AND o.team_id = e.team_a) OR 
                  (e.score_a < e.score_b AND o.team_id = e.team_b) OR 
                  (e.score_a = e.score_b AND o.team_id IS NULL)
              )
          LEFT JOIN outcomes oo ON e.id = oo.event_id
          WHERE e.status = 'Finished'
          GROUP BY e.id, ta.name, tb.name, o.name, o.odds;
      `);
      res.json(result.rows);
  } catch (error) {
      console.error('Error occurred while fetching finished events:', error);
      res.status(500).send('Error occurred while fetching finished events');
  }
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});



