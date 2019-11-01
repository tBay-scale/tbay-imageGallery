DROP DATABASE IF EXISTS sdcimages;

CREATE DATABASE sdcimages;

\c sdcimages;

CREATE TABLE images (
  id serial PRIMARY KEY,
  pic_1 VARCHAR NOT NULL,
  pic_2 VARCHAR NOT NULL,
  prime_pic VARCHAR NOT NULL
);