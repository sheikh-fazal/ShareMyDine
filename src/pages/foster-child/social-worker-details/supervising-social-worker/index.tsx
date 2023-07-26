import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ActiveSocialWorkerTable from "@root/sections/foster-child/social-worker-details/la-social-worker/active-social-worker/ActiveSocialWorkerTable";
import PreviousSocialWorkerTable from "@root/sections/foster-child/social-worker-details/la-social-worker/previous-social-worker/PreviousSocialWorkerTable";
import ActiveSupervisingSocialWorkerTable from "@root/sections/foster-child/social-worker-details/supervising-social-worker/active-social-worker/ActiveSupervisingSocialWorkerTable";
import SupervisingPreviousSocialWorkerTable from "@root/sections/foster-child/social-worker-details/supervising-social-worker/previous-social-worker/SupervisingPreviousSocialWorkerTable";

supervisingSocialWorker.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
// export default function LaSocialWorker() {
  export default function supervisingSocialWorker() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      // name: "LA Social Worker List",
      name: "Supervising Social Worker List",
      href: "",
    },
  ];

  const PAGE_TITLE = "Supervising Social Worker";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Active Social Worker", "Previous Social Worker"]}
      >
        {/* <ActiveSocialWorkerTable fosterChildId={fosterChildId} />
        <PreviousSocialWorkerTable fosterChildId={fosterChildId} /> */}
        <ActiveSupervisingSocialWorkerTable />
        <SupervisingPreviousSocialWorkerTable />
      </HorizaontalTabs>
    </Box>
  );
}






// import React from "react";

// export default function SupervisingSocialWorker() {
//   return <div>SupervisingSocialWorker</div>;
// }
