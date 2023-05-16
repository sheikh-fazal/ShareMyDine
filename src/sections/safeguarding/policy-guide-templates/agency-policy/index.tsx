import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import { fData } from "@root/utils/formatNumber";
import * as Yup from "yup";
// utils

// ----------------------------------------------------------------------

export const defaultValues = {
  updatePhoto: null,
  // uploadDate: "",
  description: "",
  version: "",
  creatorRole: "",
  createdBy: "",
  creationTime: "",
  approvedBy: "",
  approverRole: "",
  lastModfifiedTime: "",
  lastModfifiedBy: "",
  // authorSignatureDate: "",
  // approverSignatureDate: "",
  authorSignature: null,
  approverSignature: null
};

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb

const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const FormSchema = Yup.object().shape({
  updatePhoto: Yup.mixed().required("Required"),
  uploadDate: Yup.string().required("Field is required"),
  description: Yup.string().required("Field is required"),
  version: Yup.string().required("Field is required"),
  creatorRole: Yup.string().required("Field is required"),
  createdBy: Yup.string().required("Field is required"),
  creationTime: Yup.string().required("Field is required"),
  approvedBy: Yup.string().required("Field is required"),
  approverRole: Yup.string().required("Field is required"),
  lastModfifiedTime: Yup.string().required("Field is required"),
  lastModfifiedBy: Yup.string().required("Field is required"),
  authorSignatureDate: Yup.string().required("Field is required"),
  approverSignatureDate: Yup.string().required("Field is required"),
  authorSignature: Yup.mixed()
    .nullable()
    .required("Signature of Author is required")
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
    approverSignature: Yup.mixed()
    .nullable()
    .required("Signature of Approver is required")
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
export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Date Uploaded",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Description",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "version", label: "Version", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "creatorRole", label: "Creator Role", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "createdBy", label: "Created by", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "creationTime", label: "Creation time", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "approvedBy", label: "Approved by", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "approverRole", label: "Approver Role", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "lastModfifiedTime", label: "Last modified time", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "lastModfifiedBy", label: "Last modified by", fullWidth: true },
    component: RHFTextField,
  },
  // {
  //   gridLength: 6,
  //   otherOptions: {
  //     name: "accessorSignature",
  //     label: "Date of eSignature of Author",
  //   },
  //   component: SignaturePad,
  // },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of eSignature of Author",
      name: "authorSignatureDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "authorSignature",
      label: "eSignature of Author",
    },
    component: SignaturePad,
  },
  // {
  //   gridLength: 6,
  //   otherOptions: {
  //     name: "accessorSignature",
  //     label: "Date of eSignature of Approver",
  //   },
  //   component: SignaturePad,
  // },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of eSignature of Approver",
      name: "approverSignatureDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "approverSignature",
      label: "eSignature of Approver",
    },
    component: SignaturePad,
  },
];
export { default as AgencySafeguardingPolicy } from "./AgencySafeguardingPolicyList";
