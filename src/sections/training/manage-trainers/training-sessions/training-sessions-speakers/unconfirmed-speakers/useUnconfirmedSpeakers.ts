import React, { useState } from 'react'
import { All_SPEAKERS_DATA } from '@root/dropdown-data/allSpeakersTableData';
export const useUnconfirmedSpeakers = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [data, setData] = useState(All_SPEAKERS_DATA)
  return {
    data,
    openDelete,
    setOpenDelete
  }
}