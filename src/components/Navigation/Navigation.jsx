import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      <NavLink className={s.link} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
