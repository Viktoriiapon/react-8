// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useSelector, useDispatch } from "react-redux";
// import { addContact } from "../redux/contacts/operations";
// import * as Yup from "yup";
// import { nanoid } from "nanoid";

// import css from "../../components/SearchBox/SearchBox.module.css";

// const  LoginSchema = Yup.object().shape({

//     email: Yup.string()
//     .email("You must enter valid email address!")
//     .required("The number is required"),
//     password: Yup.string()
//     .min(7, "Too short")
//     .required("The password is required"),
  
// });

// const FORM_INITIAL_VALUES = {
  
//     "email": "",
//     "password": "",
// };

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector((state) => state.contacts.items);

//   const handleSubmit = (values, actions) => {
//     const finalContact = { id: nanoid(), ...values };
//     dispatch(addContact(finalContact));
//     actions.resetForm();
   
//   };

  // return (
  //   <Formik
  //     initialValues={FORM_INITIAL_VALUES}
  //     onSubmit={handleSubmit}
  //     validationSchema={LoginSchema}
  //   >
  //     <Form>
  //       <div className={css.form}>
  //           <h2>Login user</h2>
        

  //         <label htmlFor="email">Email</label>
  //         <Field type="email" id="email" name="email" placeholder="email@.com" />
  //         <ErrorMessage name="email" component="div" />

  //         <label htmlFor="password">Password</label>
  //         <Field type="password" id="password" name="password" placeholder="your password" />
  //         <ErrorMessage name="password" component="div" />

  //         <button className={css.addButton} type="submit">
  //          Registration
  //         </button>
  //       </div>
  //     </Form>
  //   </Formik>
  // );
// };

// export default LoginPage;
// import DocumentTitle from '../../components/DocumentTitle';
import  {LoginForm}  from '../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div>
      {/* <DocumentTitle>Login</DocumentTitle> */}
      <LoginForm />
    </div>
  );
}