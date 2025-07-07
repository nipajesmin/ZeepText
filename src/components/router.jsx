import React from 'react';
import {
  createBrowserRouter,

} from "react-router-dom";
import ContactList from './ContactList';
import ImportContacts from './ImportContacts';
import MapField from './MapField';


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <ContactList></ContactList>,
  },
  {
    path: "/importContacts",
    element: <ImportContacts></ImportContacts>,
  },
  {
    path: "/mapField",
    element: <MapField></MapField>,
  },
]);

export default router;