import { Grid } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

import * as Yup from 'yup';

export const initialValues = {
    parameter: '',
    settings: '',
    description: '',
}
export const formSchema = Yup.object().shape({
    parameter: Yup.string().required('Field is required'),
    settings: Yup.string().required('Field is required'),
    description: Yup.string().required('Field is required'),
    configurationItem: Yup.string().required('Field is required'),
    value: Yup.string().required('Field is required'),
    notificationType: Yup.string().required('Field is required'),
    descriptions: Yup.string().required('Field is required'),
})
export const NotificationSettingsInitialValues = {
    configurationItem: '',
    value: '',
    notificationType: '',
    description: '',
}
export const NotificationSettingsFormSchema = Yup.object().shape({
    configurationItem: Yup.string().required('Field is required'),
    value: Yup.string().required('Field is required'),
    notificationType: Yup.string().required('Field is required'),
    description: Yup.string().required('Field is required'),
})
export const AddTrainingClockEngine = [
    {
        id: 1,
        title: 'Parameters',
        componentProps: {
            name: "parameter",
            fullWidth: true,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        title: 'Settings',
        componentProps: {
            name: "settings",
            fullWidth: true,
            select: true,
            sx: { mb: 1 },
        },
        options: [
            { value: "twoYears", label: "2 Years" },
            { value: "threeYears", label: "3 Years" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 3,
        title: 'Description',
        componentProps: {
            name: "description",
            multiline: true,
            minRows: 3,
            sx: { mb: 2 },
        },
        component: RHFTextField,
        md: 12,
    },


]
export const NotificationSettings = [
    {
        id: 1,
        title: 'Configuration Item',
        componentProps: {
            name: "configurationItem",
            fullWidth: true,
            // sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        title: 'Value',
        componentProps: {
            name: "value",
            fullWidth: true,
            select: true,
            // sx: { mb: 1 },
        },
        options: [
            { value: "twoYears", label: "2 Years" },
            { value: "threeYears", label: "3 Years" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 3,
        title: 'Notification Type',
        componentProps: {
            name: "notificationType",
            fullWidth: true,
            select: true,
            // sx: { mb: 1 },
        },
        options: [
            { value: "twoYears", label: "2 Years" },
            { value: "threeYears", label: "3 Years" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 1,
        title: '',
        componentProps: {
            name: "",
            fullWidth: true,
            // sx: { mb: 1 },
        },
        component: Grid,
        md: 6,
    },
    {
        id: 4,
        title: 'Description',
        componentProps: {
            name: "descriptions",
            multiline: true,
            minRows: 3,
            sx: { mb: 2 },
        },
        component: RHFTextField,
        md: 12,
    },


]