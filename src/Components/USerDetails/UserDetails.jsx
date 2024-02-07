import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { id, name, email, phone, website } = user;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Users Details:{id}</h3>
      <h4>Name:{name}</h4>
      <h4>Email:{email}</h4>
      <h4>Phone:{phone}</h4>
      <h4>Website:{website}</h4>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default UserDetails;
