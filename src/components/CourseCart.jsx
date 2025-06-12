import React, { useState, useContext } from "react";
import { registrationContext } from "./RegisterForm";
import { FaShoppingCart } from "react-icons/fa";
import { ListGroup, Badge } from "react-bootstrap";
import { courses } from "../data/courses";

function CourseCart() {
  const { registrations } = useContext(registrationContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const uniqueCourseId = Array.from(
    new Set(registrations.map((reg) => reg.courseId))
  );

  const registeredCourses = uniqueCourseId
    .map((id) => {
      const course = courses.find((c) => c.id === id);
      return course;
    })
    .filter(Boolean);

  const toggleDropDown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <div
        className="placement-div"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <FaShoppingCart
          size={30}
          style={{
            cursor: "pointer",
            color: "#6f826a",
          }}
          onClick={toggleDropDown}
          title="My courses"
        />
      </div>

      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: 0,
            width: "250px",
            maxHeight: "300px",
            overflow: "auto",
            backgroundColor: "#6f826a",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
            zIndex: 999,
            padding: "10px",
            display: "grid",
            gridTemplateColumns: "1fr",
          }}
        >
          <h5
            style={{
              marginBottom: "10px",
              color: "#fff",
              fontFamily: "'Poiret One', sans-serif",
              textDecoration: "underline dotted",
              marginLeft: "40px",
            }}
          >
            REGISTERED COURSES:
          </h5>
          {registeredCourses.length === 0 ? (
            <p
              style={{
                color: "#fff",
                fontFamily: "'Poiret One', sans-serif",
                marginLeft: "40px",
              }}
            >
              Your cart is still empty!
            </p>
          ) : (
            <ListGroup variant="flush">
              {registeredCourses.map((course) => (
                <ListGroup.Item key={course.id}>{course.name}</ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </div>
      )}
    </div>
  );
}
export default CourseCart;
