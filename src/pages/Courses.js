import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  const courses = ["React Basics", "Data Structures", "Machine Learning"];

  return (
    <div className="container">
      <div className="card">
        <h2>Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              <Link to={`/video/${index}`}>{course}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Courses;