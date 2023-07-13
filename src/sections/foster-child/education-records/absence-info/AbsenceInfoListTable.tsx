import React from "react";
import { data } from ".";
import router from "next/router";
import { Box, Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import { useAbsenceInfoListTable } from "./useAbsenceInfoListTable";
import dayjs from "dayjs";

export default function AbsenceInfoListTable() {
  const {
    data,
    headerChangeHandler,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useAbsenceInfoListTable();
  console.log(
    "🚀 ~ file: AbsenceInfoListTable.tsx:23 ~ AbsenceInfoListTable ~ data:",
    data
  );

  const columns = [
    // {
    //   accessorFn: (row: any) => row.srNo,
    //   id: "srNo",
    //   cell: (info: any) => info.getValue(),
    //   header: () => <span>Sr.No</span>,
    //   isSortable: true,
    // },
    {
      accessorFn: (row: any) => row.dateOfAbsence,
      id: "dateOfAbsence",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
      header: () => <span>Date of Absence</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.label,
      id: "label",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
      header: () => <span>Date of Return</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.reasonOfAbsence,
      id: "reasonOfAbsence",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reason For Absence</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info.row?.original?.id)}
          />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/education-records/absence-info/${info.getValue()}/edit`,
              })
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/education-records/absence-info/${info.getValue()}/view`,
              })
            }
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Card>
        <TableHeader
          showAddBtn
          title="Absence Info"
          onChanged={headerChangeHandler}
          onAdd={() => {
            router.push({
              pathname: `/foster-child/education-records/absence-info/add-absence-info`,
            });
          }}
        />
        <CustomTable
          data={data?.absence_details}
          showSerialNo
          columns={columns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          currentPage={data?.meta?.page}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
        
      </Card>
    </>
  );
}
