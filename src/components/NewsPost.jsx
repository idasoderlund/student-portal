import { Card } from "react-bootstrap";

function NewsPost({ post }) {
  return (
    <Card className="mb-3">
      <Card.Body
        style={{
          backgroundColor: "#D1D8BE",
          borderRadius: "10px",
          boxShadow: "2px 4px 8px rgba(0,0,0,0.6)",
        }}
      >
        <Card.Title style={{ textDecoration: "underline dotted" }}>
          {post.title}
        </Card.Title>
        <Card.Text style={{}}>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default NewsPost;
