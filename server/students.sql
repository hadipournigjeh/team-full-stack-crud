CREATE TABLE IF NOT EXISTS "students" (
    "id" serial PRIMARY KEY,
    "name" varchar(120),
    "email" varchar(200)    
);

INSERT INTO "students" VALUES
    (1,'Zahra','zahraatayyar@gmail.com'),
    (2,'Hadi','hadi.h@gmail.com'),
    (3,'Lexi','lexi@gmail.com'),
    (4,'Bahare','itxbb09@gmail.com');
   
