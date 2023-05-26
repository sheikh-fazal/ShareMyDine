import * as React from "react";
import { Children, ReactNode, useState, SyntheticEvent } from "react";
import CircularProgress, {
    CircularProgressProps,
    circularProgressClasses,
} from "@mui/material/CircularProgress";
import { Tabs, Tab, Typography, useTheme, Grid, Box, Card } from "@mui/material";
import Image from "next/image";

// ----------------------------------------------------------------------

interface IVERTICALTABSPROPS {
    tabsDataArray: Array<Object>;
    children: ReactNode;
}

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function CustomTab({ tabsDataArray, children, ...other }: IVERTICALTABSPROPS) {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const arrayChildren = Children.toArray(children);

    const theme: any = useTheme();

    return (
        <Grid container spacing={2} sx={styles.container}>
            <Grid item xs={12} lg={3}>
                <Tabs
                    selectionFollowsFocus
                    orientation="vertical"
                    variant="scrollable"
                    sx={styles.tabRoot}
                    TabIndicatorProps={styles.tabIndicator}
                    value={value}
                    onChange={handleChange}
                >
                    {tabsDataArray?.map((item: any) => (
                        <Tab
                            wrapped
                            key={item?.title}
                            sx={{ mb: 2 }}
                            label={
                                <Box sx={styles.tabLabel(item?.background)}>
                                    <Image src={item?.img} alt='icon' />
                                    <Typography variant="h5" component="div" color={"#ffffff"}>
                                        {item?.title}
                                    </Typography>
                                </Box>
                            }
                        // onClick={() => setActiveTab(item.title)}
                        />
                    ))}
                </Tabs>
            </Grid>
            <Grid item xs={12} lg={9}>
                {tabsDataArray?.map((item: any) => (
                    <div
                        role="tabpanel"
                        key={item?.title}
                        hidden={value !== item?.index}
                        id={`vertical-tabpanel-${item?.index}`}
                        aria-labelledby={`vertical-tab-${item?.index}`}
                        {...other}
                    >
                        <Card sx={styles.tabPanelContainer}>
                            <Typography variant="h5" component="div" color={"#ffffff"} sx={styles.tabPanelHeader(item?.background)}>
                                {item?.title}
                            </Typography>
                            {arrayChildren?.map((child, index) => (
                                <Box key={index} sx={{ px: 3 }}>
                                    {value === index && child}
                                </Box>
                            ))}
                        </Card>
                    </div>
                ))}
            </Grid>
        </Grid>
    );
}

// ----------------------------------------------------------------------
// Styles
const styles = {
    progressBarContainer: {
        position: "relative",
        display: "inline-flex",
        height: "100%",
    },

    firstCircularBar: {
        color: "white",
    },

    secondProgressBar: (value: number) => ({
        color: `${value <= 10 ? "#F6460F" : value <= 50 ? "#FFD704" : "#2CB764"}`,
        position: "absolute",
        left: 0,
        [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
        },
    }),

    progressPercentage: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    container: {
        display: { xs: "block", md: "flex" },
    },

    tabRoot: {
        "& .MuiTab-root": {
            marginRight: "0px !important",
            maxWidth: "unset !important",
            width: "100% !important",
        },
    },

    tabIndicator: {
        sx: { display: "none" },
    },

    tabLabel: (background: string) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        background: `${background}`,
        borderRadius: 3,
        padding: "20px",
    }),

    tabPanelContainer: {
        height: { xs: "unset", md: "85vh" },
        overflow: "auto",
    },

    tabPanelHeader: (background: string) => ({
        background: `${background}`,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        py: 1,
        pl: 4,
        mb: 1,
    }),
};
