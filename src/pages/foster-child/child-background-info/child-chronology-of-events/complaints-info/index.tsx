import Layout from "@root/layouts";
import DayLogForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/day-log/DayLogForm";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useDeleteChildChronologyOfEventsUploadedDocumentByIdMutation,
  useGetChildChronologyOfEventsUploadedDocumentsByIdQuery,
  useGetChildChronologyOfEventsUploadedDocumentsListQuery,
  usePostChildChronologyOfEventsUploadedDocumentsMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/DocumentsAPI";
import { useRouter } from "next/router";
import { useDeleteChildChronologyOfEventsDayLogByIdMutation } from "@root/services/foster-child/child-background-info/child-chronology-of-events/DayLogAPI";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import AllegationInfoForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/allegation-info/AllegationInfoForm";
import ComplaintsInfoForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/complaints-info/ComplaintsInfoForm";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Chronology of Events",
    href: "/foster-child/child-background-info/child-chronology-of-events",
  },
  {
    name: "Complaints Info",
    href: "",
  },
];

const PAGE_TITLE = "Complaints Info";
ComplaintsInfo.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function ComplaintsInfo() {
  const router = useRouter();
  const { id, action }: any = router.query;
  const [page, setPage] = useState(0);
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useGetChildChronologyOfEventsUploadedDocumentsListQuery({
      limit: 10,
      offset: page,
      id: id,
    });
  const [deleteUploadedDocument] = useDeleteChildChronologyOfEventsUploadedDocumentByIdMutation();
  const [postUploadedDocument] = usePostChildChronologyOfEventsUploadedDocumentsMutation();
  const deleteDocument = async (queryArg: any) => {
    try {
      await deleteUploadedDocument(queryArg);

      enqueueSnackbar(`Document Delete Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };
  const uploadDocumentsHandler = async (postData: any) => {
    const formData = new FormData();
    formData.append("documentType", postData.documentType);
    formData.append("documentDate", postData.documentDate);
    formData.append("documentPassword", postData.password);
    formData.append("file", postData.chosenFile);
    formData.append("formName", "complaints_info");
    formData.append("recordId", id);
    try {
      const res: any = await postUploadedDocument({ addDocumentCcRequestDto: formData }).unwrap();
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      console.log(error);

      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };
  return (
    <HorizaontalTabs tabsDataArray={["Complaints Info", "Documents"]}>
      <ComplaintsInfoForm />
      <UploadDocuments
        searchParam={(searchedText: string) => console.log("searched Value", searchedText)}
        tableData={data?.data?.foster_child_document}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        column={[
          "documentOriginalName",
          "documentType",
          "documentDate",
          "personUploaded",
          "documentPassword",
        ]}
        // onDelete={}
        onDelete={(data: any) => {
          deleteDocument(data.id);
        }}
        modalData={(data: any) => uploadDocumentsHandler(data)}
        onPageChange={(pageNo: any) => {
          setPage((pageNo - 1) * 10);
        }}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages}
        disabled={!!id && (action === "add" || action === "edit") ? false : true}
      />
    </HorizaontalTabs>
  );
}
