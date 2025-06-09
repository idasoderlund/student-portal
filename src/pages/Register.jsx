import { useState, useContext } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import { registrationContext } from "../components/RegisterForm";
import { courses } from "../data/courses";
import { useNavigate } from "react-router-dom";

function Register() {
  const { addRegistration } = useContext(registrationContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [courseId, setCourseId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && email && courseId) {
      addRegistration({ name, email, courseId: parseInt(courseId) });
      alert("Registered!");
      navigate("/");
    } else {
      alert("Fill in all the details.");
    }
  };

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
        Registration
      </h2>
      <Box
        sx={{
          maxWidth: 400,
          margin: "auto",
          mt: 4,
          p: 2,
          border: "1px solid #ccc",
          borderRadius: 2,
          backgroundColor: "rgba(209, 216, 190, 0.4)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Register yourself
        </Typography>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          select
          label="Choose course"
          fullWidth
          margin="normal"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        >
          {courses.map((course) => (
            <MenuItem key={course.id} value={course.id}>
              {course.name}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </Box>
    </>
  );
}
export default Register;
