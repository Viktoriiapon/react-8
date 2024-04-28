// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useSelector, useDispatch } from "react-redux";
// import { addContact } from "../../redux/contacts/operations";
// import * as Yup from "yup";
// import { nanoid } from "nanoid";

// import DocumentTitle from '../../components/DocumentTitle';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  return (
    <div>
      {/* <DocumentTitle>Registration</DocumentTitle> */}
      <RegisterForm />
    </div>
  );
}

// import css from "../../components/SearchBox/SearchBox.module.css";

// const RegisterBoxSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Too short")
//     .max(20, "Too long")
//     .required("The name is required"),
//     email: Yup.string()
//     .email("You must enter valid email address!")
//     .required("The number is required"),
//     password: Yup.string()
//     .min(7, "Too short")
//     .required("The password is required"),
  
// });

// const FORM_INITIAL_VALUES = {
//     "name": "",
//     "email": "",
//     "password": "",
// };

// const RegistrationPage = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector((state) => state.contacts.items);

  

//   const handleSubmit = (values, actions) => {
//     const finalContact = { id: nanoid(), ...values };
//     dispatch(addContact(finalContact));
//     actions.resetForm();
//     console.log(values);
//   };
 
  // return (
  //   <Formik
  //     initialValues={FORM_INITIAL_VALUES}
  //     onSubmit={handleSubmit}
  //     validationSchema={RegisterBoxSchema}
  //   >
  //     <Form>
  //       <div className={css.form}>
  //           <h2>Register user</h2>
  //         <label htmlFor="name">Name</label>
  //         <Field type="text" id="name" name="name" placeholder="your name" />
  //         <ErrorMessage name="name" component="div" />

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

// export default RegistrationPage;