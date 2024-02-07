import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import "../Header/Header.css";
import Footer from "../Footer/Footer";
const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      {navigation.state === "Loading" ? <p>Loading.....</p> : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Home;
