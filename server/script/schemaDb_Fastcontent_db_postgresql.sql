--
-- Database: fastcontent_db
--

CREATE DATABASE fastcontent_db;

-- ENTITIES

--
-- Schema entity project
--

CREATE TABLE IF NOT EXISTS "project" (
	category varchar(130)  NOT NULL,
	creation_date date  NOT NULL,
	deadline date  NOT NULL,
	description varchar(130) ,
	owner varchar(130)  NOT NULL,
	status varchar(130)  NOT NULL,
	timezone varchar(130) ,
	title varchar(130)  NOT NULL,
	type varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	company varchar(130) ,
	country varchar(130) ,
	industry varchar(130) ,
	mail varchar(130)  NOT NULL,
	mobile numeric ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	role varchar(130) ,
	surname varchar(130) ,
	user_roles varchar(130) ,
	username varchar(130)  NOT NULL,
	website varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);




-- relation 1:m owner Project - User
ALTER TABLE project ADD COLUMN owner INTEGER  REFERENCES "user"(_id);

-- relation 1:m project_owner User - Project
ALTER TABLE user ADD COLUMN project_owner INTEGER  REFERENCES "project"(_id);
