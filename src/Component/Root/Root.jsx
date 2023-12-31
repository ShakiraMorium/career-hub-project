import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

 function Root() {
  return (
    <>
      {/* all the other elements */}
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}
export default Root;