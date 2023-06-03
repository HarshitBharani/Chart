import { Provider, useSelector } from "react-redux";
import store, { RootState } from "../../../store/store";
import ContactList from "./ContactList";

import CreateContactButton from "./CreateContactButton";
import NoContact from "./NoContact";
export const ContactPage = () => {
  const contacts = useSelector((state: RootState) => state.contact);
  return (
    <section className=" text-center ">
      <div className="flex flex-col items-center justify-center w-full gap-y-10 flex-wrap ">
        <CreateContactButton />
        {contacts.length ? <ContactList contacts={contacts} /> : <NoContact />}
      </div>
    </section>
  );
};
