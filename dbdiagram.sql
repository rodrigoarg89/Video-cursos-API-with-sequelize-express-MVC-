CREATE TABLE "Users" (
  "id" serial PRIMARY KEY,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE "Categories" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "Courses" (
  "id" serial PRIMARY KEY,
  "title" varchar NOT NULL,
  "description" varchar NOT NULL,
  "instructor" varchar NOT NULL,
  "category_id" int NOT NULL
);

CREATE TABLE "Users_courses" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "course_id" int
);

CREATE TABLE "Videos" (
  "id" serial PRIMARY KEY,
  "title" varchar NOT NULL,
  "url" varchar NOT NULL,
  "course_id" int NOT NULL
);

ALTER TABLE "Courses" ADD FOREIGN KEY ("category_id") REFERENCES "Categories" ("id");

ALTER TABLE "Videos" ADD FOREIGN KEY ("course_id") REFERENCES "Courses" ("id");

ALTER TABLE "Users_courses" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("id");

ALTER TABLE "Users_courses" ADD FOREIGN KEY ("course_id") REFERENCES "Courses" ("id");
