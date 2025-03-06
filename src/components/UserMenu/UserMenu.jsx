import { useDispatch } from "react-redux";
import { logOutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={s.userMenu}>
      {isLoggedIn && <p>Welcome, {user.name}</p>}
      <button
        className={s.outButton}
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
