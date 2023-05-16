import React, { Fragment } from "react";
import Layout from "@root/layouts";
import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import NextLink from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TABSDATAARRY } from "@root/sections/safeguarding/safeguarding-tools/safeguarding-training/vertical-tabs/TabsData";
import TrainingTabs from "@root/sections/safeguarding/safeguarding-tools/safeguarding-training/vertical-tabs/TrainingTabs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PieChart from "@root/sections/safeguarding/safeguarding-tools/safeguarding-training/charts/PieChart";
import BarChart from "@root/sections/safeguarding/safeguarding-tools/safeguarding-training/charts/BarChart";
import UpcommingCalander from "@root/sections/safeguarding/safeguarding-tools/safeguarding-training/calander/UpcommingCalander";

const PAGE_TITLE = "Safeguarding Training";

SafeguadingTraining.getLayout = function getLayout(page: any) {
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
          name: "FosterApp Training Hub",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguadingTraining() {
  const [selectedChart, setSelectedChart] = React.useState("pie");
  const [selectedChart1, setSelectedChart1] = React.useState("pie");

  const theme: any = useTheme();

  return (
    <Page title={PAGE_TITLE}>
      <TrainingTabs tabsDataArray={TABSDATAARRY}>
        {TABSDATAARRY?.map((item) => (
          <Fragment key={item?.index}>
            <Grid container spacing={2}>
              {item?.innerDataArray?.map((innerItem) => (
                <Grid item xl={3} lg={4} md={6} xs={12}>
                  <Card sx={styles.tabsItems} key={innerItem?.id}>
                    <NextLink href={innerItem?.link} style={styles?.nextLinkContainer}>
                      <Typography>{innerItem?.title}</Typography>
                    </NextLink>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Fragment>
        ))}
      </TrainingTabs>
      <Box sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={12}>
            <Card
              sx={{
                boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
                borderRadius: "10px",
              }}
            >
              <Typography style={styles.profileCardHeading}>Training Profile</Typography>
              <HorizaontalTabs tabsDataArray={["Foster Carer", "Social Worker", "Employee"]}>
                {selectedChart === "pie" ? (
                  <PieChart selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
                ) : (
                  <BarChart selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
                )}
                {/* <PieChart />
                <PieChart /> */}
              </HorizaontalTabs>
            </Card>
          </Grid>
          <Grid item lg={6} md={12}>
            <Card
              sx={{
                boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
                borderRadius: "10px",
              }}
            >
              <Typography style={styles.profileCardHeading}>Course Profile</Typography>
              <HorizaontalTabs tabsDataArray={["Foster Carer", "Social Worker", "Employee"]}>
                {selectedChart1 === "pie" ? (
                  <PieChart selectedChart={selectedChart1} setSelectedChart={setSelectedChart1} />
                ) : (
                  <BarChart selectedChart={selectedChart1} setSelectedChart={setSelectedChart1} />
                )}
                {/* <BarChart /> */}
              </HorizaontalTabs>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item lg={3} md={6}>
            <UpcommingCalander />
          </Grid>
          <Grid item lg={4.5}></Grid>
          <Grid item lg={4.5}></Grid>
        </Grid>
      </Box>
    </Page>
  );
}

// ----------------------------------------------------------------------
const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  nextLinkContainer: { textDecoration: "none", display: "block" },
  tabsItems: {
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "5px",
    padding: "30px 0",
    textAlign: "center",
    borderLeft: "10px solid #F6990F",
  },
  profileCardHeading: {
    fontSize: "18px",
    fontWeight: "600",
    padding: "16px",
    paddingBottom: "0",
  },
};
