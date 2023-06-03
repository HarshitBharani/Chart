import { contactType } from "./contactSlice";
import Contact from "./Contact";

const ContactList = ({ contacts }: { contacts: contactType[] }) => {
  return (
    <section className="flex gap-10 flex-wrap">
      {contacts.map((contact, id) => (
        <Contact contact={contact} id={id} />
      ))}
    </section>
  );
};
export default ContactList;
