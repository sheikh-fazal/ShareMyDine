import Layout from "@root/layouts";
import React from "react";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import PersonalDetailsForm from "@root/sections/system-admin/bulk-operations/personal-details-form/PersonalDetailsForm";

const PAGE_TITLE = "System Administration";

SafeguardingChildAdvocacy.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Bulk Oerations",
          href: "/bulk-operations",
        },
        {
          name: "Day Log Journal",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguardingChildAdvocacy() {
  const router = useRouter();
  const { action } = router.query;

  return (
    <Page title={PAGE_TITLE}>
      <PersonalDetailsForm action={action} />
    </Page>
  );
}
