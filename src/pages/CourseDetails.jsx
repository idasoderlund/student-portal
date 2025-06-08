import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));
  if (!course) {
    return <p>Course is not found.</p>;
  }

  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.details}</p>
    </div>
  );
}
export default CourseDetails;
