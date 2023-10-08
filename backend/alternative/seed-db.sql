-- Dropping existing tables if they exist
DROP TABLE IF EXISTS outcomes, events, teams;

-- Creating teams table
CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Creating events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    date TIMESTAMP NOT NULL,
    type VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    team_a INT,
    team_b INT,
    score_a INT,
    score_b INT,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    outcome INT,
    FOREIGN KEY (team_a) REFERENCES teams(id),
    FOREIGN KEY (team_b) REFERENCES teams(id)
);


-- Creating outcomes table
CREATE TABLE outcomes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    event_id INT,
    team_id INT,
    odds DECIMAL,
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (team_id) REFERENCES teams(id)
);

-- Now alter the events table to add the foreign key constraint to outcomes
ALTER TABLE events 
ADD CONSTRAINT fk_outcome 
FOREIGN KEY (outcome) REFERENCES outcomes(id);




-- Inserting into teams
INSERT INTO teams (name) VALUES 
('Arsenal'), 
('Chelsea'), 
('Liverpool'), 
('Manchester City'), 
('Manchester United'), 
('Leicester City'), 
('Tottenham'), 
('West Ham'), 
('Aston Villa'), 
('Everton'), 
('Newcastle'), 
('Watford'), 
('Leeds United'), 
('Brighton'), 
('Southampton'), 
('Norwich'), 
('Burnley'), 
('Wolverhampton'), 
('Crystal Palace'), 
('Brentford');

-- Inserting into events
INSERT INTO events (date, type, status, team_a, team_b, score_a, score_b) VALUES 
('2022-11-10 19:45:00', 'Football', 'Finished', 1, 2, 1, 2),
('2022-11-11 20:00:00', 'Football', 'Finished', 3, 4, 3, 3),
('2022-11-12 17:30:00', 'Football', 'Finished', 5, 6, 2, 1),
('2022-11-13 16:00:00', 'Football', 'Finished', 7, 8, 1, 0),
('2022-11-14 20:00:00', 'Football', 'Finished', 9, 10, 2, 2),
('2022-11-15 19:45:00', 'Football', 'Finished', 11, 12, 0, 1),
('2023-11-20 15:00:00', 'Football', 'Upcoming', 10, 13, 0, 0),
('2023-11-21 19:45:00', 'Football', 'Upcoming', 2, 14, 0, 0),
('2023-11-22 20:00:00', 'Football', 'Upcoming', 8, 3, 0, 0),
('2023-11-23 19:45:00', 'Football', 'Upcoming', 15, 1, 0, 0),
('2023-10-08 12:30:00', 'Football', 'Live', 4, 7, 1, 2),
('2023-11-25 15:00:00', 'Football', 'Upcoming', 16, 11, 0, 0),
('2023-11-26 17:30:00', 'Football', 'Upcoming', 6, 9, 0, 0),
('2023-11-27 14:00:00', 'Football', 'Upcoming', 12, 17, 0, 0),
('2023-11-28 20:00:00', 'Football', 'Upcoming', 19, 18, 0, 0),
('2023-11-29 19:45:00', 'Football', 'Upcoming', 20, 5, 0, 0),
('2023-10-08 16:00:00', 'Football', 'Live', 18, 17, 3, 0),
('2023-12-09 15:00:00', 'Football', 'Upcoming', 16, 11, 0, 0);

-- Inserting into outcomes
INSERT INTO outcomes (name, event_id, team_id, odds) VALUES 
-- Arsenal vs Chelsea
('Arsenal', 1, 1, 3.5), 
('Chelsea', 1, 2, 2.1), 

-- Liverpool vs Manchester City
('Liverpool', 2, 3, 2.7), 
('Manchester City', 2, 4, 2.6), 
('Draw', 2, NULL, 3.1), 

-- Manchester United vs Leicester City
('Manchester United', 3, 5, 1.9), 
('Leicester City', 3, 6, 4.0), 

-- Tottenham vs West Ham
('Tottenham', 4, 7, 1.8), 
('West Ham', 4, 8, 4.5), 
('Draw', 4, NULL, 3.6), 

-- Aston Villa vs Everton
('Aston Villa', 5, 9, 2.4), 
('Everton', 5, 10, 2.9), 
('Draw', 5, NULL, 3.3),

-- Newcastle vs Watford
('Newcastle', 6, 11, 2.2), 
('Watford', 6, 12, 3.2), 
('Draw', 6, NULL, 3.3), 

-- Everton vs Leeds United
('Everton', 7, 10, 2.3), 
('Leeds United', 7, 13, 3.0), 

-- Chelsea vs Brighton
('Chelsea', 8, 2, 1.4), 
('Brighton', 8, 14, 7.0), 
('Draw', 8, NULL, 4.5), 

-- West Ham vs Liverpool
('West Ham', 9, 8, 5.0), 
('Liverpool', 9, 3, 1.6), 

-- Southampton vs Arsenal
('Southampton', 10, 15, 4.8), 
('Arsenal', 10, 1, 1.7), 
('Draw', 10, NULL, 3.7), 

-- Manchester City vs Tottenham (Live match)
('Manchester City', 11, 4, 1.5), 
('Tottenham', 11, 7, 6.0), 
('Draw', 11, NULL, 4.2), 

-- Norwich vs Newcastle (Upcoming)
('Norwich', 12, 16, 2.8), 
('Newcastle', 12, 11, 2.5), 
('Draw', 12, NULL, 3.3), 


-- Leicester City vs Aston Villa
('Leicester City', 13, 6, 2.1), 
('Aston Villa', 13, 9, 3.4), 

-- Watford vs Burnley
('Watford', 14, 12, 2.4), 
('Burnley', 14, 17, 3.1), 
('Draw', 14, NULL, 3.2), 

-- Crystal Palace vs Wolverhampton
('Crystal Palace', 15, 18, 2.6), 
('Wolverhampton', 15, 19, 2.8), 

-- Brentford vs Manchester United
('Brentford', 16, 20, 6.0), 
('Manchester United', 16, 5, 1.5), 
('Draw', 16, NULL, 4.0), 

-- Wolverhampton vs Burnley (Live)
('Wolverhampton', 17, 19, 2.1), 
('Burnley', 17, 17, 3.5), 

-- Norwich vs Newcastle (Upcoming)
('Norwich', 18, 16, 3.0), 
('Newcastle', 18, 11, 2.4), 
('Draw', 18, NULL, 3.4);