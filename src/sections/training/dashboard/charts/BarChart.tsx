import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function BarChart({ selectedChart, setSelectedChart }: any) {
  const chartTitles = [
    { title: "Completed", color: "#F6460F" },
    { title: "Pending", color: "#F6830F" },
    { title: "Inprogress", color: "#2CB764" },
  ];

  let barseries: any = [
    {
      data: [22, 54, 24],
    },
  ];

  let baroptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
      events: {
        click: function (chart, w, e) {
          // e.preventDefault();
          // console.log(chart, w, e)
        },
      },
    },

    colors: ["#F6460F", "#2CB764", "#F6830F"],

    plotOptions: {
      bar: {
        columnWidth: "60%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Completed", "Inprogress", "Pending"],

    legend: {
      show: false,
      position: "right",
    },
    yaxis: {
      labels: {
        show: false,
      },
    },

    xaxis: {
      labels: {
        show: false,
      },
    },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChart((event.target as HTMLInputElement).value);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Box>
            <ReactApexChart
              options={baroptions}
              series={barseries}
              type="bar"
              width={200}
              height={186}
            />
          </Box>
        </Grid>

        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
        >
          <FormControl sx={{display: "flex" }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={selectedChart}
              onChange={handleChange}
            >
              <FormControlLabel
                value="pie"
                control={<Radio size="small" />}
                label="Pie Chart"
              />
              <FormControlLabel
                value="bar"
                control={<Radio size="small" />}
                label="Bar Graph"
              />
            </RadioGroup>
          </FormControl>

          {chartTitles?.map((item) => (
            <Box key={item?.color} sx={{ mt: 0.5 }}>
              <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    background: item?.color,
                    borderRadius: "50%",
                  }}
                ></Box>
                <Typography variant="subtitle2">{item?.title}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
