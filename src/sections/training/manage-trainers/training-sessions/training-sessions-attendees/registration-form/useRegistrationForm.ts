import React, { useState } from 'react'
import { All_ATTENDEES_DATA } from '@root/dropdown-data/allAttendeesTableData';
export const useRegistrationForm = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [data, setData] = useState(All_ATTENDEES_DATA)
  return {
    data,
    openDelete,
    setOpenDelete
  }
}