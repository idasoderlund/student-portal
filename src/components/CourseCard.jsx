import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <Card
      className="course-card"
      style={{
        backgroundColor: "#D1D8BE",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.6)",
        margin: "10px",
        width: "300px",
        height: "170px",
        fontFamily: "'Poiret One', sans-serif",
      }}
    >
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Link to={`/courses/${course.id}`}>
          <Button variant="primary">Show more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default CourseCard;
