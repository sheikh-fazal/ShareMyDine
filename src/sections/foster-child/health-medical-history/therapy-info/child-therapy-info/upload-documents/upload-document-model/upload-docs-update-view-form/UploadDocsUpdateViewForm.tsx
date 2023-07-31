import { useState, FC, Fragment, useRef } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";

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
import { useAddReferenceMutation } from "@root/services/update-profile/reference/referenceApi";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@root/sections/edit-profile/util/Util";
import { enqueueSnackbar } from "notistack";
import IsFetching from "@root/components/loaders/IsFetching";
import SingleFileUpload from "@root/components/upload/SingleFileUpload";
import {
  useAddTherapyDetailsDocsListDataMutation,
  useUpdateSingleTherapyDetailsDocsMutation,
} from "@root/services/foster-child/health-medical-history/therapy-info/therapyInfoListApi";

const UploadDocsUpdateViewForm: FC<any> = ({
  closeModel,
  disabled,
  defaultValue,
}) => {
  const theme: any = useTheme();
  // const [disabled, setDisabled] = useState(false);
  const [file, setFileHolder] = useState<File>();

  const [updateSingleTherapyDetailsDocs] =
    useUpdateSingleTherapyDetailsDocsMutation();

  const { documentType, updatedAt, password } = defaultValue;

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: {
      documentType,
      documentDate: updatedAt && new Date(updatedAt),
      password,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const docsType = useWatch({ control, name: "documentType" });

  const onSubmit = async (data: any) => {
    const formData: any = new FormData();
    formData.append("chooseFiles", file);
    for (var key in data) {
      formData.append(key, data[key]);
    }

    try {
      const data = await updateSingleTherapyDetailsDocs({
        formData,
        id: defaultValue?.id,
      });
      displaySuccessMessage(data, enqueueSnackbar);
      closeModel();
      // activateNextForm();
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
  };
  const getDocType = (TYPE: String) => {
    switch (TYPE) {
      case "PDF":
        return "application/pdf";
      case "DOC":
        return ".doc, .docx";
      case "DOCX":
        return ".doc, .docx";
      default:
        return "";
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
                <Typography sx={{ fontWeight: 600 }}>Add Document</Typography>
              </Grid>
              <Grid item sm={1} container justifyContent="flex-end">
                <IconButton onClick={closeModel}>
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

              {/* A Custom Field On Full Width  */}
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <SingleFileUpload
                    accept={getDocType(docsType)}
                    label="File"
                    setFileHolder={setFileHolder}
                    availableFile={defaultValue?.documentName}
                    readOnly={disabled}
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* Submit btn conatiner  */}
            <Grid item sm={12} container direction="column">
              <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={closeModel}
                    disabled={disabled}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" type="submit" disabled={disabled}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
};

export default UploadDocsUpdateViewForm;
