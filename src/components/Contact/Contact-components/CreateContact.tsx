import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addcontact } from "./contactSlice";

export const CreateContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [status, setStatus] = useState("Active");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      addcontact({
        firstName,
        lastName,
        status,
      })
    );
    navigate("/contacts");
  };
  const statusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };
  return (
    <section className="h-[80vh]">
      <form
        onSubmit={handleForm}
        className="flex 
      flex-col   h-full"
      >
        <h2 className="text-3xl  font-bold mb-10 ">Add Contact</h2>
        <label htmlFor="firstName " className="mb-5 text-lg  ">
          First Name
          <input
            className="p-2 ml-5"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>

        <label htmlFor="lastName" className="mb-5 text-lg  ">
          Last Name
          <input
            className="p-2 ml-5"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your Last name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          ></input>
        </label>
        <div>
          <p className="inline mr-10">Status : </p>{" "}
          <label htmlFor="active" className="ml-5">
            <input
              type="radio"
              id="active"
              name="status"
              value="Active"
              checked={status === "Active" ? true : false}
              onChange={statusHandler}
            />
            Active{" "}
          </label>
          <label htmlFor="inactive" className="ml-5">
            <input
              type="radio"
              id="inactive"
              name="status"
              value="Inactive"
              checked={status === "Inactive" ? true : false}
              onChange={statusHandler}
            />
            Inactive
          </label>
          <br></br>
        </div>
        <input
          type="submit"
          className="shadow mt-10 w-[40%] bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        ></input>
      </form>
    </section>
  );
};
