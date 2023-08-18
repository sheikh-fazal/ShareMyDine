import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { householdConditionA_Data, FormSchema, defaultValues } from ".";
import { useRouter } from "next/router";
import { useHouseHoldConditionAPostMutation } from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
import { enqueueSnackbar } from "notistack";
import usePath from "@root/hooks/usePath";

export const useHouseholdConditionA = ({
  breadCrumbData,
  formData,
  onSubmitHandler,
  initialValueProps,
  message,
  isAdding,
}: any) => {
  const theme: any = useTheme();
  const router = useRouter();
  const { makePath } = usePath();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: initialValueProps,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: any) => {
    // formData(data);
    try {
      const res: any = await onSubmitHandler(data).unwrap();
      enqueueSnackbar(res?.message, { variant: "success" });
      {
        isAdding &&
          router.push(
            makePath({
              path: "/carer-info/medical-history/health-and-safety/add-health-and-safety-table-tabs",
              queryParams: { healthAndSafetyId: res?.data?.id },
            })
          );
      }
    } catch (error: any) {
      enqueueSnackbar(error?.message ?? "Something Went Wrong!", {
        variant: "error",
      });
    }
  };
  useEffect(() => {
    breadCrumbData("Household Condition - A");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    theme,
    handleSubmit,
    onSubmit,
    methods,
    router,
    makePath,
    isSubmitting,
  };
};
