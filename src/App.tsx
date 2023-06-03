import React from "react";
import "./App.css";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { HomeLayout } from "./layouts/Home/HomeLayout";
import { ContactPage } from "./components/Contact/Contact-components/ContactPage";
import { CreateContact } from "./components/Contact/Contact-components/CreateContact";
import { EditContact } from "./components/Contact/Contact-components/EditContact";
import Chart from "./components/Chart/Chart";

import DateWise from "./components/Chart/DateWise";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Navigate to="/contacts" replace={true} />} />
      <Route path="contacts">
        <Route index element={<ContactPage />} />
        <Route path="createContact" element={<CreateContact />} />
        <Route path="editContact/:id" element={<EditContact />} />
      </Route>

      <Route path="/charts-and-Maps" element={<Chart />} />
      <Route path="/chart/:chartid" element={<DateWise />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
