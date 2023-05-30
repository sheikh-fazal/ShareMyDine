import React from "react";
import Link from "next/link";
import { Button, Grid,Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useSuperversionTrainingSupportPolicyForm } from "./useSuperversionTrainingSupportPolicyForm";
import { SuperversionTrainingPolicyFormData } from ".";

const SuperversionTrainingSupportPolicyForm = ({ disabled,handleNextBtn }: any) => {
  const { methods, handleSubmit, onSubmit } =
  useSuperversionTrainingSupportPolicyForm({ handleNextBtn: handleNextBtn });
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {SuperversionTrainingPolicyFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
             <Typography sx={{marginBottom:"5px",fontSize:"16px !important" ,fontWeight:"600"}} variant="h6" gutterBottom>{item.title}</Typography>
            <item.component
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item.componentProps.select
                ? item.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                : null}
              {item?.heading}
            </item.component>
          </Grid>
        ))}

        <Grid item xs={12}>
          {!disabled && (
            <Button
              disabled={disabled}
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
            >
              Submit
            </Button>
          )}

          <Link href={"/supervision-training-support-policy"} style={{ textDecoration: "none" }}>
            <Button
              type="button"
              variant="contained"
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": { backgroundColor: "#F6830F" },
              }}
            >
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default SuperversionTrainingSupportPolicyForm;
