import { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import OrifinalChildReferral from "@root/sections/foster-child/referrals/original-child-referral/OriginalChildReferral";
import ViewOriginalChild from "@root/sections/foster-child/referrals/original-child-referral/OriginalChildReferral";

const PAGE_TITLE = "Original Child Referral";

EditChildExclusionInfoPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Info",
          href: "",
        },
        {
          name: "Original Child Referral",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function EditChildExclusionInfoPage() {
  const [tabsArr, setTabsArr] = useState(["Personal Details"]);
  
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        <ViewOriginalChild disabled={true} />
      </HorizaontalTabs>
    </Page>
  );
}

