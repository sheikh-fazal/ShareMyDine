import { useState, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, IconButton, Typography } from "@mui/material";
// utils
// components
import { FormProvider } from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import CloseIcon from "@mui/icons-material/Close";
import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const AddTrainingDocForm: FC<any> = ({ addRefModelClose }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
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
    console.log({ data });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center">
        <Grid container item xs={12}>
          {/* Header Area  */}
          <Grid item sx={{ padding: "0.5em" }} container>
            <Grid item sm={11}>
              <Typography sx={{ fontWeight: 600 }}>
                Additional Training Details
              </Typography>
            </Grid>
            <Grid item sm={1} container justifyContent="flex-end">
              <IconButton onClick={addRefModelClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item sm={12} container>
            {/* Dynamically Generated Fields  */}
            {fieldsInfo.map((item: any, index: number) => {
              return (
                <Fragment key={index}>
                  {/* if there is only one field that is accoupies whole width   */}
                  {item.length === 1 && (
                    <FullWidthFormField
                      item={item}
                      isSubmitting={isSubmitting}
                      disabled={disabled}
                    />
                  )}
                  {/* if there are two fields with 50% 50% width   */}
                  {item.length === 2 && (
                    <HalfWidthFormField
                      item={item}
                      isSubmitting={isSubmitting}
                      disabled={disabled}
                    />
                  )}
                </Fragment>
              );
            })}
            <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                File Uploader
              </Grid>
            </Grid>
            {/* Custom Fields On Half Width  */}
            <Grid item sm={6} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFDatePicker name="issueDate" label="certificate issued?" />
              </Grid>
            </Grid>
            <Grid item sm={6} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFDatePicker name="expiryDate" label="Expiry Date" />
              </Grid>
            </Grid>
            {/* A Custom Field On Full Width  */}
            {/* <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="previousExpCustom"
                  label="Previous Exp Custom"
                />
              </Grid>
            </Grid> */}
          </Grid>
          {!disabled && (
            <Grid item sm={12} container direction="column">
              <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={addRefModelClose}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" type="submit">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default AddTrainingDocForm;
