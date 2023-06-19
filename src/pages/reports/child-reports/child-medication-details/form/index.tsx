import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildMedicationDetailsForm from "@root/sections/reports/child-reports/child-medication-details/child-medication-details-form/ChildMedicationDetailsForm";

const PAGE_TITLE = "Child Medication Details Report";

ChildMedicationDetailForm.getLayout = function getLayout(page: any) {
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

export default function ChildMedicationDetailForm() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildMedicationDetailsForm />
    </Page>
  );
}
