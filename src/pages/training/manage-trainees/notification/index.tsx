import React, { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import TrainingClockEngineTable from "@root/sections/training/notifications/training-clock-engine-tab/TrainingClockEngineTable";
import NotificationTable from "@root/sections/training/notifications/notification-settings-tab/NotificationTable";


const PAGE_TILE = "Notification Setting";

Notifications.getLayout = function getLayout(page: any) {

  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training",
        },
        {
          name: "training Dashboard",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Notifications() {

  return (
    <Page title={PAGE_TILE}>
      <HorizaontalTabs
        tabsDataArray={[
          "Training Clock Engine",
          "Notification Settings",
        ]}
     
      >
        <TrainingClockEngineTable />
        <NotificationTable/>
      </HorizaontalTabs>
    </Page>
  );
}