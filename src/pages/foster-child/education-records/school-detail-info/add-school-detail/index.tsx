import React, { useState } from "react";

// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import SchoolDetailInfoForm from "@root/sections/foster-child/education-records/school-detail-info/SchoolDetailInfoForm";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { Box } from "@mui/material";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";
import {
  useGetUploadDocumentsSchoolDetailInfoQuery,
  usePostUploadDocumentsSchoolDetailInfoApiMutation,
} from "@root/services/foster-child/education-records/school-detail-info/schoolDetailInfoApi";

// ----------------------------------------------------------------------
// Constants

// ----------------------------------------------------------------------

AddSchoolDetail.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function AddSchoolDetail() {
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);


  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
  };

  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "School Detail Info List",
      href: {
        pathname: "/foster-child/education-records/school-detail-info",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "School Detail Info",
      href: "",
    },
  ];

  const PAGE_TITLE = "School Detail Info";
  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching: isDocumentFetching,
    isError: hasDocumentError,
    isSuccess: isDocumentSuccess,
  } = useGetUploadDocumentsSchoolDetailInfoQuery(params);

  const tableData: any = documentData?.data?.["education-records-document"];
  const metaData: any = documentData?.data?.meta;

  const pageChangeHandler = (page: any) => {
    setPageHandle(page * 10);
  };
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["School Detail Info", "Upload Document"]}
      >
        <SchoolDetailInfoForm />
        <UploadDocuments
          readOnly={true}
          searchParam={(searchedText: string) => setSearchHandle(searchedText)}
          tableData={tableData}
          isLoading={isDocumentLoading}
          isFetching={isDocumentFetching}
          isError={hasDocumentError}
          isSuccess={isDocumentSuccess}
          column={[
            "documentOriginalName",
            "documentType",
            "documentDate",
            "personUploaded",
            "documentPassword",
          ]}
          onPageChange={(page: any) => pageChangeHandler(page)}
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
        />{" "}
      </HorizaontalTabs>
    </Box>
  );
}
