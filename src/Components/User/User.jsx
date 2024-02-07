import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const useStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
  };
  return (
    <div style={useStyle}>
      <p>Name:{name}</p>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
      <Link to={`/user/${id}`}>
        <button className="btn-details">Show Details</button>
      </Link>
    </div>
  );
};

export default User;
