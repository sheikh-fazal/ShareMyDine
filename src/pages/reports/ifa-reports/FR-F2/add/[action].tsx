import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import AddAdultHouseHoldMember from "@root/sections/reports/ifa-reports/FR-F2/add/AddAdultHouseHoldMember";

const PAGE_TITLE = "Reports";

FRD1.getLayout = function getLayout(page: any) {
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
          name: "IFA Reports",
          href: "/reports",
        },
        {
          name:"FR-F2: ADULT HOUSEHOLD MEMBER/SUPPORT TO FOSTER CARER",
          href: "/reports/ifa-reports/FR-F2",
        },
        {
          name: "Add"
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRD1() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <AddAdultHouseHoldMember action={action} id={id} />
    </Page>
  );
}
