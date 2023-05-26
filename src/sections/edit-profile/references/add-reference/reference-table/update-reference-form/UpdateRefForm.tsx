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
import { useUpdateReferenceMutation } from "@root/services/update-profile/reference/referenceApi";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@root/sections/edit-profile/util/Util";
import { enqueueSnackbar } from "notistack";
import IsFetching from "@root/components/loaders/IsFetching";

const UpdateRefForm: FC<any> = ({ close, defValues, disabled }) => {
  const theme: any = useTheme();
  // const [disabled, setDisabled] = useState(false);
  // const [isUpdating, setIsUpdating] = useState(false);
  const [updateReference] = useUpdateReferenceMutation();
  const { id, refereeName, referenceType, email, contactNo, contactNow } =
    defValues;
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: {
      refereeName,
      referenceType,
      email,
      contactNo,
      contactNow,
    },
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
    // reset({ keepIsSubmitted: true });
    const formData = {
      ...data,
    };
    try {
      // setIsUpdating(true);
      const data = await updateReference({ body: formData, id });
      // setIsUpdating(false);
      displaySuccessMessage(data, enqueueSnackbar);
      close();
      // activateNextForm();
    } catch (error: any) {
      // setIsUpdating(false);
      displayErrorMessage(error, enqueueSnackbar);
    }
  };

  return (
    <>
      {isSubmitting && <IsFetching isFetching />}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center">
          <Grid container item xs={12}>
            {/* Header Area  */}
            <Grid item sx={{ padding: "0.5em" }} container>
              <Grid item sm={11}>
                <Typography sx={{ fontWeight: 600 }}>Add Reference</Typography>
              </Grid>
              <Grid item sm={1} container justifyContent="flex-end">
                <IconButton onClick={close}>
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
            </Grid>
            {!disabled && (
              <Grid item sm={12} container direction="column">
                <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                  <Grid item>
                    <Button variant="contained" type="submit" onClick={close}>
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
    </>
  );
};

export default UpdateRefForm;
