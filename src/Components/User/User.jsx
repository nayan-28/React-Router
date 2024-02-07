import { Link, useNavigate } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const useStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
  };

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={useStyle}>
      <p>Name:{name}</p>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
      <Link to={`/user/${id}`}>
        <button className="btn-details">Show Details</button>
      </Link>
      <button onClick={handleShowDetails}>Click to see Details</button>
    </div>
  );
};

export default User;
