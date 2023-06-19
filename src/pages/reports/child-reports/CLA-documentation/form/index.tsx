import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ClaDocumentationForm from "@root/sections/reports/child-reports/CLA-documentation/CLA-documentation-form/ClaDocumentationForm";

const PAGE_TITLE = "CLA Documentation Report";

CLADocumentationFormLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Reports",
          href: "/reports",
        },
        {
          name: "Child Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function CLADocumentationFormLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ClaDocumentationForm />
    </Page>
  );
}
