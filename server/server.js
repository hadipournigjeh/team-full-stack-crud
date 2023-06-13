const express = require("express");
const cors = require("cors");
const app = express();
const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// list of all students
app.get("/", (req, res) => {
  const selectQuery = "SELECT * FROM students";

  pool.query(selectQuery, (error, result) => {
    if (error) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
});

// add new student
app.post("/", (req, res) => {
  if (req.body.name.trim() === "" || req.body.email.trim() === "") {
    res.status(400).json({ message: "Please fill all the fields" });
    return;
  }

  const insertQuery =
    "INSERT INTO students (name, email) VALUES ($1, $2) RETURNING *";
  const values = [req.body.name, req.body.email];

  pool.query(insertQuery, values, (error, result) => {
    if (error) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(201).json(result.rows[0]);
    }
  });
});

// delete student by ID
app.delete("/:id", (req, res) => {
  const studentId = Number(req.params.id);

  const deleteQuery = "DELETE FROM students WHERE id = $1";
  const values = [studentId];

  pool.query(deleteQuery, values, (error, result) => {
    if (error) {
      res.status(500).json({ error: "Internal server error" });
    } else if (result.rowCount === 0) {
      res.status(404).json({ message: "Student not found" });
    } else {
      // Fetch the updated list of students after deletion
      const selectQuery = "SELECT * FROM students";

      pool.query(selectQuery, (error, result) => {
        if (error) {
          res.status(500).json({ error: "Internal server error" });
        } else {
          res.json(result.rows);
        }
      });
    }
  });
});

// update student's email or name by ID
app.put("/:id", (req, res) => {
  const studentId = Number(req.params.id);
  const newEmail = req.body.email;
  const newName = req.body.name;

  const updateQuery =
    "UPDATE students SET name = $1, email = $2 WHERE id = $3 RETURNING *";
  const values = [newName, newEmail, studentId];

  pool.query(updateQuery, values, (error, result) => {
    if (error) {
      res.status(500).json({ error: "Internal server error" });
    } else if (result.rowCount === 0) {
      res.status(404).json({ message: "Student not found" });
    } else {
      res.json(result.rows[0]);
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
