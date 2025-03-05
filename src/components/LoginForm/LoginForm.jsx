import { Formik, Form, Field } from "formik";
import s from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const initialValues = { email: "", password: "" };
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    // .unwrap()
    // .then(() => {
    //   navigate("/");
    // });
    options.resetForm();
  };
  return (
    <div className={s.loginBox}>
      <p className={s.paragraph}>Login</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.inputSpan}>
            <span className={s.label}>Email: </span>
            <Field type="email" name="email" className={s.inputForm}></Field>
          </label>
          <label className={s.inputSpan}>
            <span className={s.label}>Password: </span>
            <Field
              type="password"
              name="password"
              className={s.inputForm}
            ></Field>
          </label>
          <button type="submit" className={s.submit}>
            Login
          </button>
          <p className={s.span}>
            Dont have an account?
            <Link to="/registration">Lets create one! </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
