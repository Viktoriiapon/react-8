// import React from 'react'


// const LoginForm = () => {
//     const loginId = useId();
//     const passwordId = useId();
    import { useDispatch } from 'react-redux';
    import { ErrorMessage, Field, Form, Formik } from "formik";
import { logIn } from '../../redux/auth/operations';
import * as Yup from "yup";
import css from './LoginForm.module.css';

const FORM_INITIAL_VALUES = {
  
  "email": "",
  "password": "",
};
const  LoginSchema = Yup.object().shape({

  email: Yup.string()
  .email("You must enter valid email address!")
  .required("The number is required"),
  password: Yup.string()
  .min(7, "Too short")
  .required("The password is required"),

});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));
    actions.resetForm();
  };
    return (
      <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form>
        <div className={css.form}>
            <h2>Login user</h2>
        

          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" placeholder="email@.com" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" placeholder="your password" />
          <ErrorMessage name="password" component="div" />

          <button className={css.addButton} type="submit">
           Log In
          </button>
        </div>
      </Form>
    </Formik>
    );
  };
  