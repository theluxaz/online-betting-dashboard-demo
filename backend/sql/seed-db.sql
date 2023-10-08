DROP TABLE IF EXISTS outcomes, events, teams;

CREATE TABLE "events" (
    "id" SERIAL UNIQUE,
    "date" TIMESTAMP,
    "name" VARCHAR(300),
	"type" VARCHAR(100),
    "score_a" INT DEFAULT 0,
    "score_b" INT DEFAULT 0,
    "status" VARCHAR(50),
    "outcome_name" VARCHAR(200),
    "last_updated" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "odds_a_name" VARCHAR(200),
	"odds_b_name" VARCHAR(200),
	"odds_c_name" VARCHAR(200),
	"odds_a" DECIMAL,
	"odds_b" DECIMAL,
	"odds_c" DECIMAL,
    PRIMARY KEY ("id")
);

INSERT INTO "events" (
    "date", "name", "type", "score_a", "score_b", 
    "status", "outcome_name", "last_updated", 
    "odds_a_name", "odds_b_name", "odds_c_name", 
    "odds_a", "odds_b", "odds_c"
) VALUES
('2022-11-10 19:45:00', 'Arsenal vs Chelsea', 'Football', 1, 2, 'Finished', 'Chelsea', '2022-11-10 21:35:00', 'Arsenal', 'Chelsea', NULL, 3.5, 2.1, NULL),
('2022-11-11 20:00:00', 'Liverpool vs Manchester City', 'Football', 3, 3, 'Finished', 'Draw', '2022-11-11 21:50:00', 'Liverpool', 'Man City', 'Draw', 2.7, 2.6, 3.1),
('2022-11-12 17:30:00', 'Manchester United vs Leicester City', 'Football', 2, 1, 'Finished', 'Man United', '2022-11-12 19:20:00', 'Man United', 'Leicester', NULL, 1.9, 4.0, NULL),
('2022-11-13 16:00:00', 'Tottenham vs West Ham', 'Football', 1, 0, 'Finished', 'Tottenham', '2022-11-13 17:50:00', 'Tottenham', 'West Ham', 'Draw', 1.8, 4.5, 3.6),
('2022-11-14 20:00:00', 'Aston Villa vs Everton', 'Football', 2, 2, 'Finished', 'Draw', '2022-11-14 21:50:00', 'Aston Villa', 'Everton', NULL, 2.4, 2.9, NULL),
('2022-11-15 19:45:00', 'Newcastle vs Watford', 'Football', 0, 1, 'Finished', 'Watford', '2022-11-15 21:35:00', 'Newcastle', 'Watford', 'Draw', 2.2, 3.2, 3.3),

('2023-11-20 15:00:00', 'Everton vs Leeds United', 'Football', 0, 0, 'Upcoming', NULL, NULL, 'Everton', 'Leeds', NULL, 2.3, 3.0, NULL),
('2023-11-21 19:45:00', 'Chelsea vs Brighton', 'Football', 0, 0, 'Upcoming', NULL, NULL, 'Chelsea', 'Brighton', 'Draw', 1.4, 7.0, 4.5),
('2023-11-22 20:00:00', 'West Ham vs Liverpool', 'Football', 0, 0, 'Upcoming', NULL, NULL, 'West Ham', 'Liverpool', NULL, 5.0, 1.6, NULL),
('2023-11-23 19:45:00', 'Southampton vs Arsenal', 'Football', 0, 0, 'Upcoming', NULL, NULL, 'Southampton', 'Arsenal', 'Draw', 4.8, 1.7, 3.7),
('2023-10-09 12:30:00', 'Manchester City vs Tottenham', 'Football', 1, 2, 'Live', NULL, '2023-10-08 13:15:00', 'Man City', 'Tottenham', 'Draw', 1.5, 6.0, 4.2),
('2023-11-25 15:00:00', 'Norwich vs Newcastle', 'Football', 0, 0, 'Upcoming', NULL, NULL, 'Norwich', 'Newcastle', 'Draw', 2.8, 2.5, 3.3),
('2023-11-26 17:30:00', 'Leicester City vs Aston Villa', 'Football', 0, 0, 'Upcoming', NULL, NULL, 'Leicester', 'Aston Villa', NULL, 2.1, 3.4, NULL),
('2023-11-27 14:00:00', 'Watford vs Burnley', 'Football', 0, 0, 'Upcoming', NULL, NULL, 'Watford', 'Burnley', 'Draw', 2.4, 3.1, 3.2),
('2023-11-28 20:00:00', 'Crystal Palace vs Wolverhampton', 'Football', 0, 0, 'Upcoming', NULL, NULL, 'Crystal Palace', 'Wolves', NULL, 2.6, 2.8, NULL),
('2023-11-29 19:45:00', 'Brentford vs Manchester United', 'Football', 0, 0, 'Upcoming', NULL, NULL, 'Brentford', 'Man United', 'Draw', 6.0, 1.5, 4.0),

('2023-10-09 16:00:00', 'Wolverhampton vs Burnley', 'Football', 3, 0, 'Live', NULL, '2023-10-08 17:45:00', 'Wolves', 'Burnley', NULL, 2.1, 3.5, NULL),
('2023-12-09 15:00:00', 'Norwich vs Newcastle', 'Football', 0, 0, 'Upcoming', NULL, NULL, 'Norwich', 'Newcastle', 'Draw', 3.0, 2.4, 3.4);