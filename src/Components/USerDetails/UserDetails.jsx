import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, phone, website } = user;
  return (
    <div>
      <h3>Users Details</h3>
      <h4>Name:{name}</h4>
      <h4>Email:{email}</h4>
      <h4>Phone:{phone}</h4>
      <h4>Website:{website}</h4>
    </div>
  );
};

export default UserDetails;
