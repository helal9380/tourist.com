/** @format */

import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="max-w-screen-xl mx-auto px-2 md:px-5">
        <Outlet></Outlet>
      </div>

      {/* footer section */}
    </div>
  );
};

export default Main;
