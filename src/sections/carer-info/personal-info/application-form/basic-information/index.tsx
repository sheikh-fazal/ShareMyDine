import * as Yup from "yup";
import { fData } from "@root/utils/formatNumber";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import { FormHelperText, Hidden } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useFormContext, Controller } from "react-hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
import { RELATIONDROPDOWN } from "@root/dropdown-data/relation";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import { LANGUAGESDROPDOWNDATA } from "@root/dropdown-data/languages";

const todayDate = dayjs().format("DD/MM/YYYY");
const ageOf16Years = dayjs().subtract(19, "year").format("DD/MMM/YYYY");

export const defaultValues = {
  areaOffice: "",
  image: null,
  title: "",
  firstName: "",
  middleName: "",
  lastName: "",
  previousName: "",
  age: "",
  dateOfBirth: new Date(ageOf16Years),
  gender: "",
  nationalInsuranceNo: "",
  ethnicity: "",
  ofstedEthnicity: "",
  religion: "",
  mobileNo: "",
  email: "",
  languagesSpoken: "",
  relationShipType: "",
  hasDisability: false,
  hasEverConvicted: false,
  sexualOrientation: "",
  medicalConditionsTreatment: "",
  applicationFilledDate: new Date(),
};

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb

const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const FormSchema = Yup.object().shape({
  areaOffice: Yup.string().required("Area Office name is required"),
  title: Yup.string().required("Title is required"),
  firstName: Yup.string()
    .required("First Name is required")

    .min(3, "Mininum 6 characters")

    .max(10, "Maximum 15 characters"),
  lastName: Yup.string()

    .required("Last Name is required")

    .min(3, "Mininum 6 characters")

    .max(10, "Maximum 15 characters"),

  dateOfBirth: Yup.date().required("Date of Birth is required"),
  age: Yup.number()
    .typeError("Age is required")
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer()
    .moreThan(18, "Age must be greater than or equal to 18")
    .lessThan(120, "Age must be less than or equal to 120"),
  gender: Yup.string().trim().required("Gender is required"),
  nationalInsuranceNo: Yup.string().required(
    "National Insurance Number is required"
  ),
  ethnicity: Yup.string().trim().required("Ethnicity is required"),
  ofstedEthnicity: Yup.string().trim().required("Ofsted Ethnicity is required"),
  religion: Yup.string().trim().required("Ofsted Ethnicity is required"),
  mobileNo: Yup.string()
    .required("Mobile Ethnicity is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  languagesSpoken: Yup.string().trim().required("Languages Spoken is required"),
  relationShipType: Yup.string()
    .trim()
    .required("Relationship Type is required"),
  sexualOrientation: Yup.string().required("Sexual Orientation is required"),
  medicalConditionsTreatment: Yup.string()
    .required("medical conditions Spoken is required")
    .min(8, "Mininum 8 characters")
    .max(300, "Maximum 300 characters"),
  applicationFilledDate: Yup.date().required(
    "Applicant Filled Date is required"
  ),
  image: Yup.mixed()
    .nullable()
    .required("Image is required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value: any) => value && FILE_FORMATS.includes(value.type)
    )
    .test(
      "fileSize",
      `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
      (value: any) => value && value.size <= MAX_FILE_SIZE
    ),
});

export const formDataAreaoffice = [
  {
    gridLength: 6,
    componentProps: {
      name: "areaOffice",
      label: "Area Office",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
  },
];
export const formDataAreaPersonalInfo = [
  {
    gridLength: 6,
    componentProps: {
      name: "image",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },

  {
    gridLength: 6,
    componentProps: { name: "title", label: "Title", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: { name: "firstName", label: "First Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "middleName",
      label: "Middle Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: { name: "lastName", label: "Last Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "previousName",
      label: "Previous Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "dateOfBirth",
      label: "Date of Birth",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: { name: "age", label: "Age", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "gender",
      label: "Gender",
      fullWidth: true,
      select: true,
    },
    options: GENDERDROPDOWNDATA,
    component: RHFSelect,
  },
  {
    gridLength: 12,
    componentProps: {
      name: "nationalInsuranceNo",
      label: "National Insurance No",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",
      fullWidth: true,
      select: true,
    },
    options: ETHNICITYDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "ofstedEthnicity",
      label: "Ofsted Ethnicity",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "religion",
      label: "Religion",
      fullWidth: true,
      select: true,
    },
    options: RELIGIONDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    componentProps: { name: "mobileNo", label: "Mobile", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: { name: "email", label: "Email", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "languagesSpoken",
      label: "Languages Spoken",
      fullWidth: true,
      select: true,
    },
    options: LANGUAGESDROPDOWNDATA,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "relationShipType",
      label: "Relationship Type",
      fullWidth: true,
      select: true,
    },
    options: RELATIONDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "hasDisability",
      label: "Has Disability",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "sexualOrientation",
      label: "Sexual Orientation",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "hasEverConvicted",
      label:
        "Have you ever been convicted of any criminal or civil offence? Have you got anyu cations or outstanding court Orders?",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 12,
    componentProps: {
      name: "medicalConditionsTreatment",
      label:
        "Provide details of any current or pending medical conditions, treatment or appointment below",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "applicationFilledDate",
      label: "Applicant Filled Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];

export { default as BasicInformationForm } from "./BasicInformationForm";

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
