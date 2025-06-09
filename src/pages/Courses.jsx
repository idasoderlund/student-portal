import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      <h2
        style={{
          fontFamily: "'Poiret One', sans-serif",
          fontSize: "40px",
          fontWeight: "900",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          textDecoration: "underline dotted",
          color: "#fff",
        }}
      >
        {" "}
        Courses
      </h2>
      <Row>
        {courses.map((course) => (
          <Col md={4} key={course.id} className="mb-3">
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </>
  );
}
export default Courses;
