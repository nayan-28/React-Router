import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";
export default function Users() {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>Our Users</h2>
      <h3>Users:{users.length}</h3>
      <div className="users">
        {users.map((user) => (
          <User key={users.id} user={user}></User>
        ))}
      </div>
    </div>
  );
}
