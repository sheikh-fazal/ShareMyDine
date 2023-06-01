import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import automatedIcon from "../../../../assets/svg/reports/automatedIcon.svg";
import { tableSubHeader, viewReportsFilterData, tableMockData } from ".";
import { useBirthParent } from "./useBirthParent";
import TableHeader from "@root/components/TableHeader";
import TableSubHeader from "../../table-sub-header/TableSubHeader";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";

const BirthParent = () => {
  const { handleSearch, handleAction, openDelete, handleCloseDeleteModal } =
    useBirthParent();

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row, table }: any) => (
        <Checkbox
          disabled={row?.original?.Assigned}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fosterCarer,
      id: "fosterCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Foster Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relativeName,
      id: "relativeName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Relative Name</span>,
    },
    {
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
    },
    {
      accessorFn: (row: any) => row.signedDate,
      id: "signedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Signed Date</span>,
    },
    {
      accessorFn: (row: any) => row.createdDate,
      id: "createdDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created Date</span>,
    },
    {
      accessorFn: (row: any) => row.createdBy,
      id: "createdBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created By</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["edit", "delete", "view", "print"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Card sx={{ ...styles.cardStyle, py: 2, px: 1 }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={2}
          sx={{ px: 2 }}
        >
          <Typography sx={styles.title}></Typography>
          <Image src={automatedIcon} alt="icon" />
        </Box>
        <Card sx={{ p: 2, my: 2 }}>
          <Grid container spacing={2}>
            {viewReportsFilterData.map((data: any, i: number) => (
              <Grid item key={i} md={data.gridlength} xs={12}>
                <Typography sx={styles.title}>{data.title}</Typography>
                <Select {...data.otherOptions}>
                  {data.options.map((item: any, j: number) => (
                    <MenuItem key={j} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            ))}
            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
              <Button onClick={handleSearch} variant="contained">
                Search
              </Button>
            </Grid>
          </Grid>
        </Card>
        <TableHeader title={""} showAddBtn onAdd={() => handleAction("add")} />
        <TableSubHeader data={tableSubHeader} />
        <CustomTable
          isError={false}
          isLoading={false}
          isFetching={false}
          isSuccess={true}
          data={tableMockData}
          columns={columns}
        />
      </Card>
      <DeleteModel
        open={openDelete}
        handleClose={handleCloseDeleteModal}
        onDeleteClick={handleCloseDeleteModal}
      />
    </>
  );
};

export default BirthParent;

const styles = {
  title: {
    fontWeight: 600,
    fontSize: "16px",
  },
  cardStyle: {
    "& .MuiStack-root": {
      "& .MuiStack-root": {
        marginLeft: "auto",
        marginRight: "20px",
      },
    },
  },
};
