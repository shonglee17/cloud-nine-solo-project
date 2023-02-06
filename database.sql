
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "hunt"(
	"id" SERIAL PRIMARY KEY,
	"date" DATE,
	"location" VARCHAR(255),
	"species" VARCHAR(255),
	"equipment" VARCHAR(255),
	"restrictions" VARCHAR(255),
	"bagged" INTEGER,
	"notes" VARCHAR(255),
	"image" VARCHAR(255),
	"user_id" INTEGER REFERENCES "user"
);

INSERT INTO "user"("username","password")
	VALUES ('Marshall','Chen'), ('Son','Goku'), ('Bryan','Jester');
	
INSERT INTO "hunt"("date","location", "species","equipment","bagged","notes","image","restrictions", "user_id")
	VALUES 
	('2020-11-11' ,'southwest','deer','.308',0,'zero is the hero','someimage.com','No Wake Zone', 1),
	('2021-11-11' ,'midwest','hare','20',0,'no jack for snack','someimage.com','No Wake Zone',2),
	('2022-11-11' ,'north','phesant','12',2,'roosters','someimage.com','No Wake Zone',3),
	('2023-11-11' ,'east','duck','12',6,'mallard marsh','someimage.com','No Wake Zone',1),
	('2024-11-11' ,'southeast','grouse','12',4,'fun','someimage.com','No Wake Zone',2),
	('2025-11-11' ,'northwest','crow','20',3,'crows crows crows','someimage.com','No Wake Zone',3),
	('2026-11-11' ,'southeast','turkey','28',1,'gobbler','someimage.com','No Wake Zone',1);	