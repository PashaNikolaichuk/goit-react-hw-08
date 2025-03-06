import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return <Component />;
};

export default PrivateRoute;

// const PrivateRoute = ({ children }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const location = useLocation();

//   //якщо користувач авторизований показує тобто контент захищеного маршруту, якщо false направляє на login
//   return isLoggedIn ? children : <Navigate to="/login" state={location} />;
// };
