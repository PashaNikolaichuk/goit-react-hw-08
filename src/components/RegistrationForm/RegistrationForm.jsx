import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = { name: "", email: "", password: "" };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => {
        navigate("/");
      });
    options.resetForm();
  };
  return (
    <div className={s.loginBox}>
      <p>Register</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.inputSpan}>
            <span className={s.label}>Name: </span>
            <Field type="text" name="name"></Field>
          </label>
          <label className={s.inputSpan}>
            <span className={s.label}>Email: </span>
            <Field type="email" name="email"></Field>
          </label>
          <label className={s.inputSpan}>
            <span className={s.label}>Password: </span>
            <Field type="password" name="password"></Field>
          </label>
          <button className={s.submit} type="submit">
            Register
          </button>
          <p className={s.span}>
            You have an account?
            <Link to="/login">Login</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
