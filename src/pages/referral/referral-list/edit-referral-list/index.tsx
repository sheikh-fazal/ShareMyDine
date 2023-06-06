import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card } from "@mui/material";
import ReferralListForm from "@root/sections/referral/referral-list/referral-list-form/ReferralListForm";

const PAGE_TILE = "Referral Form";

ReferralList.getLayout = function getLayout(page: any) {
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
          name: "Referral",
          href: "/referral",
        },
        {
          name: "Child List",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function ReferralList() {
  return (
    <Page title={PAGE_TILE}>
      <Card sx={{ p: 2 }}>
        <ReferralListForm />
      </Card>
    </Page>
  );
}
