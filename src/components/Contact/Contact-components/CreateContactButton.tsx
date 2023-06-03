import { useNavigate } from "react-router-dom";

const CreateContactButton = () => {
  const navigate = useNavigate();
  const createContactHandler = () => {
    navigate("/contacts/createContact");
  };
  return (
    <button
      onClick={createContactHandler}
      className=" border-solid border-2 w-[300px] p-1 border-sky-500"
    >
      Create Contact
    </button>
  );
};
export default CreateContactButton;
