import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import {
  childInformationDefaultValues,
  childInformationFormSchema,
  formatters,
} from "./RiskAssessmentData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazyGetChildChronologyOfEventsRiskAssessmentByIdQuery,
  usePatchChildChronologyOfEventsRiskAssessmentByIdMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/RiskAssessmentAPI";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const useRAChildInformationForm = () => {
  const router = useRouter();
  const { action, id, fosterChildId } = router.query;

  const theme: any = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [getRiskAssessmentList] = useLazyGetChildChronologyOfEventsRiskAssessmentByIdQuery();

  const [editRiskAssessmentList] = usePatchChildChronologyOfEventsRiskAssessmentByIdMutation();

  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getRiskAssessmentList({ id });
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return childInformationDefaultValues;
      }
      const responseData = { ...data.data.raChildInfo };

      for (const key in responseData) {
        const value = responseData[key];
        if (formatters[key]) responseData[key] = formatters[key](value);
      }
      parseDatesToTimeStampByKey(responseData);
      return responseData;
    } else {
      setIsLoading(false);
      return childInformationDefaultValues;
    }
  };
  const methods: any = useForm({
    resolver: yupResolver(childInformationFormSchema),
    defaultValues: getDefaultValue,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  //OnSubmit Function
  const onSubmit = async (data: any) => {
    setIsFetching(true);

    editRiskAssessmentList({
      addRiskAssessmentRequestDto: {
        raChildInfo: { ...data },
        fosterChildId,
        childName: "child",
        gender: "male",
        notes: "notes",
      },
      id,
    })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Edited Successfully", {
          variant: "success",
        });
        setIsFetching(false);
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        setIsFetching(false);
      });
  };
  return {
    router,
    onSubmit,
    isLoading,
    getDefaultValue,
    theme,
    handleSubmit,
    methods,
    isFetching,
    isSubmitting,
    action,
    id,
    fosterChildId,
  };
};
