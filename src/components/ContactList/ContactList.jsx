
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
 
  const contacts = useSelector(selectFilteredContacts);
 
  return (
    <ul >
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
         
        />
      ))}
    </ul>
  );
};
export default ContactList;




