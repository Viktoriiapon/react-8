import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNewContact, deleteContactById, requestContacts } from "../services/api";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi)=>{
        try {
            const data = await requestContacts();
            return data
        } catch (error) {
          return thunkApi.rejectWithValue(error.message)  
        }
    },
)
export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkApi) => {
      try {
        const data = await addNewContact(newContact);
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkApi) => {
      try {
        const data = await deleteContactById(id);
       
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );