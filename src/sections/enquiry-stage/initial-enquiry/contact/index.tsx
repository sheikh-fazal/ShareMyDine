import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const defaultValues = {
  address: "address 1",
  addressLine2: "address 2",
  townCity: "city",
  Telephone: "phone",
  county: "USD",
  country: "USD",
  postalCode: "123",
};

export const FormSchema = Yup.object().shape({
  address: Yup.string().required("Field is required"),
  addressLine2: Yup.string().required("First name is required"),
  townCity: Yup.string().required("Town/City is required"),
  Telephone: Yup.string().required("Telephone is required"),
  county: Yup.string().required("Field is required"),
  country: Yup.string().required("Field is required"),
  postalCode: Yup.string().required("Field is required"),
});

export const personalDetails = [
  {
    id: 1,
    componentProps: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "addressLine2",
      label: "Address Line 2",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps: {
      name: "townCity",
      label: "Town City",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "Telephone",
      label: "Telephone",
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 5,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "county",
      label: "county",
      select: true,
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
  },
  {
    id: 6,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "country",
      label: "country",
      select: true,
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
  },
  {
    id: 7,
    componentProps: {
      name: "postalCode",
      label: "postalCode",
    },
    gridLength: 6,
    component: RHFTextField,
  },
];
export { default as Contact } from "./Contact";
