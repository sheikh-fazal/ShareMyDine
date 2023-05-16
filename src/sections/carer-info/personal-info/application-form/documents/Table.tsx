import { Box, Grid, Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import React from "react";

export function DocumentTable({ changeView }: any) {
  const theme: any = useTheme();

  const [data, setData] = React.useState([
    {
      srNo: "1",
      documentName: "Doc Name",
      documentType: "Document Type",
      documentDate: "19-05-2021",
      personUploaded: "Name Xame",
      password: "123bc",
    },
    {
      srNo: "2",
      documentName: "Doc Name",
      documentType: "Document Type",
      documentDate: "19-05-2021",
      personUploaded: "Name Xame",
      password: "123bc",
    },
  ]);
  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
    },
    {
      accessorFn: (row: any) => row.documentName,
      id: "documentName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
    },
    {
      accessorFn: (row: any) => row.documentDate,
      id: "documentDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
    },
    {
      accessorFn: (row: any) => row.personUploaded,
      id: "personUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Uploaded</span>,
    },
    {
      accessorFn: (row: any) => row.password,
      id: "password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="view" onClicked={() => console.log(true)} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <Grid container>
      <Grid xs={12} item>
        <CustomTable
          data={data}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
}
