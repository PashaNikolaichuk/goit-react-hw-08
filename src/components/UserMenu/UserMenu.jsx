import { useDispatch } from "react-redux";
import { logOutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
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
