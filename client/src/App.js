import "./student.css";
import Student from "./Student";
import CreateStudent from "./CreateStudent";
import UpdateStudent from "./UpdateStudent";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Student />}></Route>
        <Route path="/create" element={<CreateStudent />}></Route>
        <Route path="/update/:id" element={<UpdateStudent />}></Route>
      </Routes>
    </div>
  );
};

export default App;
