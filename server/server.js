const express = require("express");
const cors = require("cors");
const app = express();
const allStudents = require("./exampleresponse.json");

app.use(express.json());
app.use(cors()); // Enable CORS for all routes
// list of all students
app.get("/", (req, res) => {
  res.json(allStudents);
});

//add new student
app.post("/", (req, res) => {
  if (req.body.name.trim() === "" || req.body.email.trim() === "") {
    res.status(400).json({ message: "Please fill all the fields" });
    return;
  }
  const newStudent = {
    //creating id for the new students
    id: Math.max(...allStudents.map((video) => video.id), 0) + 1,
    name: req.body.name,
    email: req.body.email,
  };
  allStudents.push(newStudent);
  res.status(201).json(allStudents);
});

// delete the student by Id
app.delete("/:id", (req, res) => {
  const studentId = Number(req.params.id);
  const studentIndex = allStudents.findIndex(
    (student) => student.id === studentId
  );
  if (studentIndex === -1) {
    res
      .status(404)
      .json({ msg: "the student to be delete cannot be found by id" });
  } else {
    allStudents.splice(studentIndex, 1);
    res.json(allStudents);
  }
});

//  updating the email or name by Id
app.put("/:id", (req, res) => {
  const studentId = Number(req.params.id); // Access the student ID from the URL parameters
  const newEmail = req.body.email;
  const newName = req.body.name;

  // Find the student with the given ID
  const student = allStudents.find((student) => student.id === studentId);

  // Update the email and name of the student,
  if (student) {
    student.email = newEmail;
    student.name = newName;
    res.json(allStudents);
  } else {
    res.status(404).json({ message: "student not found" });
  }
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
