import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page'; 
import PanelCalendar from '@root/sections/panel/panel-tools/panel-calendar/PanelCalendar';

const PAGE_TILE = "View Panel Dashboard";

Calendar.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Panel",
                    href: "/panel",
                },
                {
                    name: "Panel Calendar",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function Calendar() {
    return (
        <Page title={PAGE_TILE}>
            <PanelCalendar />
        </Page>
    );
}