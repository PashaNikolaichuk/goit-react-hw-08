import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  //якщо користувач авторизований показує тобто контент захищеного маршруту, якщо false направляє на login
  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
