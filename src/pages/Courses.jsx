import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      <h2> Courses</h2>
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
