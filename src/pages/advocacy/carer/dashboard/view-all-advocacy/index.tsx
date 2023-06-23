import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ViewAllAdvocacy from "@root/sections/advocacy/carer-advocacy/carer-advocacy-dashboard/view-all-advocacy/ViewAllAdvocacy";

// ===============================================================================
const PAGE_TILE = "View all Advocacy";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Carer Advocacy",
          href: "/advocacy/carer/dashboard",
        },
        {
          name: "All",
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
      <ViewAllAdvocacy />
    </Page>
  );
}
