import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <h2>Home Component</h2>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
