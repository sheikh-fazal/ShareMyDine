import {
  RHFCheckbox,
  RHFMultiCheckbox,
  RHFSwitch,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFSelect } from "@root/components/hook-form";
import { Controller, useFormContext } from "react-hook-form";
import * as Yup from "yup";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { FormHelperText, Typography } from "@mui/material";

export const BForm = [
  {
    id: 1,
    componentProps: {
      name: "requireAttendees",
      label: "Require Attendees",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "webinarSize",
      label: "Webinar Size",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "registerOutsiderTrainee",
      label: "Registration form: Want your outsider trainee to register for this training?",
      sx: { mb: 4 },
    },
    component: RHFSwitch,
  },
  {
    gridLength: 12,
    heading: "This is the form your attendees will find out when they sign up",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 4 },
    },
    component: Typography,
  },

  {
    id: 1,
    componentProps: {
      name: "firstName",
      label: "First Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "lastName",
      label: "Last Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "email",
      label: "Email",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "sendReminder",
      label: "Send reminder notification to all attendees",
      sx: { mb: 4 },
    },
    component: RHFSwitch,
  },
  {
    id: 1,
    componentProps: {
      name: "sendThankYouEmail",
      label: "Send Thank you email to all attendees after event has ended",
      sx: { mb: 4 },
    },
    component: RHFSwitch,
  },
];

export const defaultValues = {
  requireAttendees: "",
  webinarSize: "",
  registerOutsiderTrainee:"",
  firstName: "",
  lastName: "",
  email: "",
  sendReminder:"",
  sendThankYouEmail:"",
};

export const BFormValidationSchema = Yup.object().shape({
    requireAttendees: Yup.string().trim().required("Field is Required"),
    webinarSize: Yup.string().trim().required("Field is Required"),
    registerOutsiderTrainee: Yup.string().trim().required("Field is Required"),
    firstName: Yup.string().trim().required("Field is Required"),
    lastName: Yup.string().trim().required("Field is Required"),
    email: Yup.string().trim().required("Field is Required"),
    sendReminder: Yup.string().trim().required("Field is Required"),
    sendThankYouEmail: Yup.string().trim().required("Field is Required"),
});

export { default as AddTrainingSessionAttendees } from "./AddTrainingSessionAttendees";

function RHFUploadFile(props: any) {
  const { disabled, name, ...other } = props;
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;
        return (
          <>
            <label
              htmlFor={name}
              style={{
                height: "40px",
                borderRadius: "4px",
                // border: `1px solid #A3A6BB`,
                border: `1px solid ${
                  other?.formState?.errors?.[`${name}`] ? "red" : "#E5E8EB"
                }`,
                width: "100% !important",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: `${disabled ? "" : "pointer"}`,
              }}
            >
              <div style={{ paddingLeft: "10px", color: "#A3A6BB" }}>
                {field?.value?.name || "Upload Image"}
              </div>
              <FileUploadIcon
                sx={{
                  color: "#A3A6BB",
                  marginRight: "10px",
                }}
              />
            </label>
            <input
              type="file"
              disabled={disabled}
              name={name}
              id={name}
              onChange={(e: any) => {
                const file: any = e.target.files?.[0];
                field.onChange({ target: { value: file, name: field.name } });
              }}
              style={{ display: "none" }}
            />
            {checkError && (
              <FormHelperText error sx={{ px: 2 }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        );
      }}
    />
  );
}
