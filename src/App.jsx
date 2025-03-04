import s from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactsPage from "./pages/ContactsPage";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  // якщо true повертає null як false сторінки
  return isRefreshing ? null : (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index означає, що HomePage буде рендеритися за замовчуванням при переході на /. */}
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
