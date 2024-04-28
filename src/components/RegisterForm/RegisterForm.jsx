import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { register } from '../../redux/auth/operations';
import * as Yup from "yup";
import css from './RegisterForm.module.css';

const FORM_INITIAL_VALUES = {
    "name": "",
    "email": "",
    "password": "",
};


const RegisterBoxSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short")
      .max(20, "Too long")
      .required("The name is required"),
      email: Yup.string()
      .email("You must enter valid email address!")
      .required("The number is required"),
      password: Yup.string()
      .min(7, "Too short")
      .required("The password is required"),
    
  });
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterBoxSchema}
    >
      <Form>
        <div className={css.form}>
            <h2>Register user</h2>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" placeholder="your name" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" placeholder="email@.com" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" placeholder="your password" />
          <ErrorMessage name="password" component="div" />

          <button className={css.addButton} type="submit">
           Registration
          </button>
        </div>
      </Form>
    </Formik>
  );
};
