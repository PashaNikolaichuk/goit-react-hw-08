// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import { Navigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// // шоб не бачити логін якщо ти зареєстрований
// const RestrictedRoute = ({ children }) => {
//   const location = useLocation();
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? <Navigate to={location.state || "/contacts"} /> : children;
// };

// export default RestrictedRoute;

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/contacts",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return <Component />;
};

export default RestrictedRoute;
