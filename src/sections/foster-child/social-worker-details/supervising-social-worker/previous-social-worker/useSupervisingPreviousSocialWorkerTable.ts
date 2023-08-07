import { useGetSupervisingSocialWorkerTableApiQuery } from "@root/services/foster-child/social-worker-details/supervising-social-worker/SupervisingSocialWorkerApi";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export const useSupervisingPreviousSocialWorkerTable = () => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);

  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
    status: "Inactive",
  };

  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetSupervisingSocialWorkerTableApiQuery({
      params,
      fosterChildId: router?.query?.fosterChildId,
    });

  const family = data?.data?.social_workers;
  const meta = data?.meta;

  const headerChangeHandler = (text: any) => {
    setSearchHandle(text.search);
  };
  const pageChangeHandler = (page: any) => {
    setPageHandle(page * 10);
  };
  return {
    router,
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
  };
};
