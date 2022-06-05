CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" varchar(1000),
	"description" varchar(256),
	"likes" int DEFAULT 0
);
--ALTER TABLE gallery ALTER likes SET DEFAULT 0;

-- CRUD tests
INSERT INTO gallery (path, description) VALUES ('images/tillie.JPG', 'Photo of our 2nd family dog who I grew up with, Tillie.');
SELECT * FROM gallery ORDER BY id ASC;
UPDATE gallery SET likes=likes+1 WHERE id=1;


-- Add original 6 images
INSERT INTO gallery (path, description) VALUES ('images/tillie.JPG', 'Photo of our 2nd family dog who I grew up with, Tillie.');
INSERT INTO gallery (path, description) VALUES ('images/celticpark.jpeg', 'Photo of Celtic Park (aka Paradise) in Scotland. Home stadium of my favorite soccer team, Celtic FC.');
INSERT INTO gallery (path, description) VALUES ('images/tworivers.JPG', 'Photo of the Two Rivers Soccer Camp sign in the Plumas National Forest in CA where I worked one summer.');
INSERT INTO gallery (path, description) VALUES ('images/macteam.JPG', 'Photo of winning the MIAC mens soccer championship with Macalester.');
INSERT INTO gallery (path, description) VALUES ('images/aldeen.jpeg', 'Photo of Aldeen Golf Course in Rockford, IL - 5 mins down the road from where I grew up.');
INSERT INTO gallery (path, description) VALUES ('images/radioshow.JPG', 'Photo of me during my radio show, Smooth Unwinds.');