import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type contactType = {
  firstName: string;
  lastName: string;
  status: string;
};

const initialState: contactType[] = [];
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addcontact: (state, action: PayloadAction<contactType>) => {
      state.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    editContact: (
      state,
      action: PayloadAction<{ contact: contactType; id: number }>
    ) => {
      state[action.payload.id] = action.payload.contact;
    },
  },
});

export const { addcontact, deleteContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
