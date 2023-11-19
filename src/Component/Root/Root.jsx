import { Outlet } from "react-router-dom";

 function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet></Outlet>
      </div>
    </>
  );
}
export default Root;