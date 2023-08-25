import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

import { Box, Switch } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { enqueueSnackbar } from "notistack";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import {
  useDeleteApiInventoryMutation,
  useGetApiInventoryQuery,
  usePutApiInventoryChangeStatusMutation,
} from "@root/services/system-admin/ApiInventoryAPI";

export const useApliInventoryDisableTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme = useTheme();
  const { data, isFetching, isLoading, isError, isSuccess } = useGetApiInventoryQuery();
  const [deleteList] = useDeleteApiInventoryMutation();
  const { pageChangeHandler, sortChangeHandler } = useTableParams();
  const [changeStatusOfApiInventory] = usePutApiInventoryChangeStatusMutation();
  const listDeleteHandler = (id: any) => {
    deleteList({ apiInventoryId: id })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  const columns = [
    {
      accessorFn: (row: any) => row.api_link_name,
      id: "api_link_name",
      cell: (info: any) => info.getValue(),
      header: () => <span>API Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.api_key,
      id: "api_key",
      cell: (info: any) => info.getValue(),
      header: () => <span>API Key</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.expiry_date,
      id: "expiry_date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Expiry Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.api_link,
      id: "api_link",
      cell: (info: any) => info.getValue(),
      header: () => <span>API Link</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },

    {
      accessorFn: (row: any) => row.averageResponseTime,
      id: "enable-disable",
      cell: (info: any) => (
        <Switch
          inputProps={{ "aria-label": "Switch demo" }}
          onChange={() => {
            changeStatusOfApiInventory({
              formData: { id: info?.row?.original?.id, status: "active" },
            });
            enqueueSnackbar("Status Changed Successfully", {
              variant: "success",
            });
          }}
        />
      ),
      header: () => <span>Enable/Disable</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname: "/system-admin/api-inventory/form",
                query: { action: "view", id: info?.row?.original?.id },
              })
            }
          />

          <DeletePrompt onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return {
    tableHeaderRefTwo,
    router,
    columns,
    theme,
    data,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    pageChangeHandler,
    sortChangeHandler,
  };
};
