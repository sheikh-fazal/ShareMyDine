import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ViewAdvocacyTab from "@root/sections/advocacy/carer-advocacy/carer-advocacy-dashboard/view-all-advocacy/view-advocacy-tab/ViewAdvocacyTab";

// ====================================================================
const PAGE_TILE = "Independent Mental Health Advocacy";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          href: "/",
        },
        {
          name: "Advocacy Dashboard",
          href: "/",
        },
        {
          name: "Raise a new advocacy",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Panel() {
  return (
    <Page title={PAGE_TILE}>
      <ViewAdvocacyTab disabled={true}/>
    </Page>
  );
}
