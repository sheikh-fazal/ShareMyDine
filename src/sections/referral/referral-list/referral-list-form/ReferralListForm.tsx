import React from "react";
import { FormProvider } from "@root/components/hook-form";
import {  Button, Card, Grid, Typography,  } from "@mui/material";
import Link from "next/link";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useReferralListForm } from "./useReferralListForm";
import { ReferralListFormData } from ".";

const ReferralListForm = ({ disabled }: any) => {
  const { methods, onSubmit, handleSubmit } =
    useReferralListForm();
  return (
    <Card  sx={{ p: 2 }}>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {ReferralListFormData?.map((form: any, i: any) => (
          
          <Grid item xs={12} md={form?.gridLength} key={i}>
               <Typography sx={(theme) => styles.title(theme, disabled)}>
             {form.label}
           </Typography>
            {form.component && (
              <form.component
                disabled={disabled}
                size="small"
                {...form.componentProps}
              >
                {form?.heading}
                {form.componentProps.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            )}
            {form?.uploadPhoto && (
              <>
                    <Typography sx={(theme) => styles.title(theme, disabled)}>
                   Upload Image
                  </Typography>
              <RHFUploadFile name={"updatePhoto"} {...methods} required />
              </>
            )}
          </Grid>
        ))}

        <Grid item xs={12}>
          {!disabled && (
            <Button type="submit" variant="contained" sx={{ mr: 2 }}>
              Submit
            </Button>
          )}
          <Link
            href={"/referral/referral-list"}
            style={{ textDecoration: "none" }}
          >
            <Button
              type="button"
              variant="contained"
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": {
                  backgroundColor: "#F6830F",
                },
              }}
            >
              back
            </Button>
          </Link>
        </Grid>
      </Grid>
    </FormProvider>
    </Card>
  );
};

export default ReferralListForm;
const styles = {
  title: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: disabled ? "#898989" : "#212529",
  }),
};
