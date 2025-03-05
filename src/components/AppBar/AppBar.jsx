import { AuthNav } from "../AuthNav/AuthNav";
import Navigation from "../../components/Navigation/Navigation";
import s from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import { selectUser } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn && <p>Welcome, {user.name}</p>}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
