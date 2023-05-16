import { Box } from '@mui/material';
import Page from '@root/components/Page';
import { ContextualSafeguardingForm } from '@root/sections/safeguarding/child-protection/contextual-safeguarding/contextual-safeguarding-form';
import React from 'react'
import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";




const PAGE_TITLE = "View Contextual Safeguarding";

ViewContextualSafeguarding.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "Contextual Safeguarding List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ViewContextualSafeguarding() {
  return (
    <Page title={PAGE_TITLE}>
      <Box>
        <ContextualSafeguardingForm disabled={true} />
      </Box>
    </Page>
  );
}