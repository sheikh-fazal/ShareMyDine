import React, { useState } from "react";
import TableAction from "@root/components/TableAction";
import { useSchoolDetailInfoTable } from "./useSchoolDetailInfoTable";
import { Box, Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

export default function SchoolDetailInfoTable(props: any) {
  const { fosterChildId } = props;
  const [open, setOpen] = useState(false);
  const {
    router,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
  } = useSchoolDetailInfoTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.schoolName,
      id: "schoolName",
      cell: (info: any) => info.getValue(),
      header: "School Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.principalName,
      id: "principalName",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Principal Name",
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {/* Can move it outside of the table if need arises */}

          <TableAction
            type="delete"
            onClicked={() => {
              console.log("delete this", info.row.original);
              setOpen(true);
            }}
            size="small"
          />

          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `/foster-child/education-records/school-detail-info/edit-school-detail?${info.getValue()}`
              )
            }
            size="small"
          />

          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                `/foster-child/education-records/school-detail-info/view-school-detail?${info.getValue()}`
              )
            }
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <DeleteModel
        open={open}
        handleClose={() => setOpen(false)}
        onDeleteClick={() => {}}
      />
      <TableHeader
        disabled={isLoading}
        title="School Detail Info"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/foster-child/education-records/school-detail-info/add-school-detail",
            query: { action: "add", fosterChildId: fosterChildId },
          });
        }}
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={family}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page ?? "1"}
        totalPages={meta?.pages ?? "1"}
        showSerialNo
        onPageChange={pageChangeHandler}
      />
    </Card>
  );
}
