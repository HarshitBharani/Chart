import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { contactType, deleteContact } from "./contactSlice";

const Contact = ({ contact, id }: { contact: contactType; id: number }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editContactHandler = () => {
    navigate(`/contacts/editContact/${id}`);
  };
  const deleteContactHandler = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className="flex flex-col border-solid border-2 border-sky-500 p-3 py-6  ">
      <h5>{contact.firstName + " " + contact.lastName}</h5>
      <p className="flex items-center">
        <span className="text-lg font-bold">Status:</span>{" "}
        <span
          className={`rounded-full h-[10px] w-[10px]  flex ${
            contact.status === "Active" ? "bg-green-400" : " bg-red-400 "
          } ml-1`}
        ></span>
        {contact.status}{" "}
      </p>
      <button
        onClick={editContactHandler}
        className="border-solid border-2 border-green-500 bg-green-500 rounded my-3 "
      >
        Edit
      </button>
      <button
        onClick={deleteContactHandler}
        className="border-solid border-2 border-red-500 bg-red-500 rounded"
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
