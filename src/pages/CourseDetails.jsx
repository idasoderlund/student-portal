import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));
  if (!course) {
    return <p>Course is not found.</p>;
  }
  const nameStyle = {
    fontFamily: "'Poiret One', sans-serif",
    fontSize: "40px",
    color: "#EEEFE0",
    marginBottom: "20px",
  };

  const detailStyle = {
    fontFamily: "'Poiret One', sans-serif",
    fontSize: "30px",
    lineHeight: "1.5",
    color: "#EEEFE0",
  };
  return (
    <div>
      <h2 style={nameStyle}>{course.name}</h2>
      <p style={detailStyle}>{course.details}</p>
    </div>
  );
}
export default CourseDetails;
