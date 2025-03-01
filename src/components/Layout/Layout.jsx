import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div>
      <AppBar /> {/* Це завжди видно на всіх сторінках */}
      <Outlet /> {/* Тут з'явиться потрібна сторінка */}
    </div>
  );
};

export default Layout;
