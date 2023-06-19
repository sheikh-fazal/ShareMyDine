import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import CarerPlacement from "@root/sections/reports/carer-report/carer-placement-reports/CarerPlacemanet";

const PAGE_TITLE = "Carer placement Reports";

CarerPlacementLayout.getLayout = function getLayout(page: any) {
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
          name: "Carer Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function CarerPlacementLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <CarerPlacement />
    </Page>
  );
}
