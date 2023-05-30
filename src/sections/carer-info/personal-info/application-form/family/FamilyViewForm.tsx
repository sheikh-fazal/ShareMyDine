import { useState, useRef } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Grid, Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
import { fTimestamp } from "@root/utils/formatTime";
// components
import { FormProvider } from "@root/components/hook-form";
//
import { FormSchema, defaultValues, formData } from ".";

export default function FamilyViewForm(props: any) {
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: { ...props?.refData },
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("data", data);
    alert(
      JSON.stringify(
        {
          ...data,
          startDate: data.startDate && fTimestamp(data.startDate),
          endDate: data.endDate && fTimestamp(data.endDate),
        },
        null,
        2
      )
    );
    reset();
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                size="small"
                disabled={props.disabled}
                {...form.otherOptions}
              >
                {form.otherOptions.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {" "}
                        {option.label}{" "}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Button
            onClick={() => {
              props.changeView(null);
            }}
            type="button"
            variant="contained"
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
}