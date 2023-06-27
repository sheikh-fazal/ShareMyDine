import {
  RHFCheckbox,
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
import { RHFInputWithLabel } from "@root/sections/enquiry-stage/extensions/RHFInputWithLabel";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import { Typography } from "@mui/material";

const todayDate = dayjs().format("MM/DD/YYYY");
const maxAgeCheck = dayjs().subtract(18.1, "year");
const ageOf18Years = maxAgeCheck.format("MM/DD/YYYY");

export const defaultValues = {
  title: "USD",
  firstName: "Ahmed",
  middleName: "MAC",
  lastName: "Afzal",
  dateOfBirth: new Date(ageOf18Years),
  dateOfEnquiry: new Date(todayDate),
  gender: "Male",
  address: "address initial value",
  telephone: "+440000000",
  email: "test@test.com",
  ethnicity: "Roma",
  languageSpoken: "",
  religion: "Islam",
  practisingStatus: "Practicing",
  areChecksRequired: "",
  occupation: "",
  numberOfSeen: "",
  level: "Level 1",
  dateOfVisit: new Date(todayDate),
  supporttheFosterCarer: "question 1",
  currentlyInPlacement: "question 2",
  knowCapacity: "capacity",
  background: "Background",
  health: "health",
  education: "education",
  contact: "contact",
  valuingDiversity: "valuingDiversity",
  acceptingtheChild: "acceptingtheChild",
  affection: "affection",
  selfCare: "selfCare",
  behaviuorManagement: "behaviuorManagement",
  applicationsupportNetworks: "applicationsupportNetworks",
  socialWorkerAssessment: "socialWorkerAssessment",
  conclusion: "conclusion",
  statutoryChecks: "statutoryChecks",
  training: "training",
  healthAndSafety: "healthAndSafety",
};

export const FormSchema = Yup.object().shape({
  title: Yup.string().required("Field is required"),
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string().required("Middle name is required"),
  lastName: Yup.string().required("Last name is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  gender: Yup.string().required("Field is required"),
  address: Yup.string().required("Field is required"),
  telephone: Yup.string().required("Field is required"),
  email: Yup.string().required("Field is required"),
  ethnicity: Yup.string().required("Field is required"),
  languageSpoken: Yup.string().required("Field is required"),
  religion: Yup.string().required("Field is required"),
  practisingStatus: Yup.string().required("Field is required"),
  occupation: Yup.string().required("Field is required"),
  numberOfSeen: Yup.string().required("Field is required"),
  dateOfVisit: Yup.date().required("Field is required"),
  supporttheFosterCarer: Yup.string().required("Field is required"),
  currentlyInPlacement: Yup.string().required("Field is required"),
  background: Yup.string().required("Field is required"),
});

export const SUBSTITUTECARERFORMDATA = [
  {
    id: 1,
    componentProps: {
      name: "title",
      label: "Title",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
      {
        value: "BTC",
        label: "฿",
      },
      {
        value: "JPY",
        label: "¥",
      },
    ],
  },
  {
    id: 2,
    componentProps: {
      name: "firstName",
      label: "First Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps: {
      name: "middleName",
      label: "Middle Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "lastName",
      label: "Last Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      name: "dateOfBirth",
      label: "Date Of Birth",
      fullWidth: true,
      maxDate: new Date(ageOf18Years),
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 6,
    componentProps: {
      name: "gender",
      label: "Gender",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: GENDERDROPDOWNDATA,
  },
  {
    id: 7,
    componentProps: {
      typographyText: "Contact Details",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
    gridLength: 12,
  },
  {
    id: 8,
    componentProps: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      maxDate: maxAgeCheck,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 9,
    componentProps: {
      name: "telephone",
      label: "Telephone",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 10,
    componentProps: {
      name: "email",
      label: "Email",
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 11,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: ETHNICITYDROPDOWN,
  },
  {
    id: 12,
    componentProps: {
      name: "languageSpoken",
      label: "languageSpoken Spoken",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 12,
    componentProps: {
      name: "religion",
      label: "Religion",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: RELIGIONDROPDOWN,
  },
  {
    id: 12,
    componentProps: {
      name: "practisingStatus",
      label: "Practising Status",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "Practicing",
        label: "Practicing",
      },
      {
        value: "Non Practicing",
        label: "Non Practicing",
      },
    ],
  },
  {
    id: 13,
    componentProps: {
      name: "areChecksRequired",
      label: "Are Checks Required",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 14,
    componentProps: {
      name: "occupation",
      label: "Occupation",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 15,
    componentProps: {
      name: "numberOfSeen",
      label: "Data and number of times applicant seen",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 16,
    componentProps: {
      name: "level",
      text: "Level",
      Component: RHFRadioGroup,
      options: ["Level 1", "Level 2"],
      getOptionLabel: ["Level 1", "Level 2"],
      typographyProps: {
        variant: "body1",
        fontWeight: 600,
      },
    },
    gridLength: 6,
    component: RHFInputWithLabel,
  },

  {
    id: 16.5,
    componentProps: {
      name: "dateOfVisit",
      label: "Date Of Assessment Visit",
      fullWidth: true,
    },
    gridLength: 6,
    gridProps: {
      sx: { mt: { md: "24px", xs: "unset" } },
    },
    component: RHFDatePicker,
  },

  {
    id: 17,
    componentProps: {
      name: "supporttheFosterCarer",
      text: "Why do you want to support the Foster Carer?",
      label: "Field Value",
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    gridLength: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 18,
    componentProps: {
      name: "currentlyInPlacement",
      text: "Do you know the CHildren Currently in placement?",
      label: "Field Value",
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    gridLength: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 18.5,
    componentProps: {
      name: "knowCapacity",
      text: "How long have you known the foster carer and in what capacity?",
      label: "Field Value",
      Component: RHFTextField,

      multiline: true,
      minRows: 3,
      fullWidth: true,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    gridLength: 12,
    component: RHFInputWithLabel,
  },
  {
    id: 19,
    componentProps: {
      name: "background",
      label: "Background",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 20,
    componentProps: {
      name: "health",
      label: "Health",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 21,
    componentProps: {
      name: "education",
      label: "Education",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 22,
    componentProps: {
      name: "contact",
      label: "Contact",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 23,
    componentProps: {
      name: "valuingDiversity",
      label: "Valuing Diversity",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 24,
    componentProps: {
      name: "acceptingtheChild",
      label: "Accepting the Child as he/she is",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 25,
    componentProps: {
      name: "affection",
      label: "Affection",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 26,
    componentProps: {
      name: "selfCare",
      label: "Self Care",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 27,
    componentProps: {
      name: "behaviuorManagement",
      label: "Behavior Management",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 28,
    componentProps: {
      name: "applicationsupportNetworks",
      label: "Applicant Support Network",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 29,
    componentProps: {
      name: "socialWorkerAssessment",
      label: "Social Workers`s Assessment",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 30,
    componentProps: {
      name: "conclusion",
      label: "conclusion/Recommendation",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 31,
    componentProps: {
      name: "statutoryChecks",
      label: "Statutory Checks",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 32,
    componentProps: {
      name: "training",
      label: "Training",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 22,
    componentProps: {
      name: "healthAndSafety",
      label: "HealthAndSafety",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  // {
  //   id: 7,
  //   componentProps: {
  //     name: "anyCurrentOrPreviousMedicalConditions",
  //     label: "Any current or previous medical conditions",
  //   },
  //   gridLength: 6,
  //   component: RHFCheckbox,
  // },
  // {
  //   id: 8,
  //   componentProps: {
  //     name: "IHVcriteria",
  //     text: "Does this enquiry meet the criteria for IHV:",
  //     Component: RHFRadioGroup,
  //     options: [true, false],
  //     getOptionLabel: ["Yes", "No"],
  //   },
  //   gridLength: 12,
  //   component: RHFInputWithLabel,
  // },

  // {
  //   id: 9,
  //   componentProps: {
  //     name: "IHV",
  //     label: "If yes , who will complete the IHV?",
  //     multiline: true,
  //     minRows: 3,
  //     fullWidth: true,
  //   },
  //   gridLength: 6,
  //   component: RHFTextField,
  // },
  // {
  //   id: 10,
  //   componentProps: {
  //     name: "counselledOutDetails",
  //     label: "Counselled Out reason Details:",
  //     multiline: true,
  //     minRows: 3,
  //     fullWidth: true,
  //   },
  //   component: RHFTextField,
  //   gridLength: 6,
  // },
  // {
  //   id: 11,
  //   componentProps: {
  //     name: "relevantExperience",
  //     label: "Relevant Experience:",
  //     multiline: true,
  //     minRows: 3,
  //     fullWidth: true,
  //   },
  //   gridLength: 6,
  //   component: RHFTextField,
  // },
];
export { default as SubstituteCarerForm } from "./SubstituteCarerForm";
