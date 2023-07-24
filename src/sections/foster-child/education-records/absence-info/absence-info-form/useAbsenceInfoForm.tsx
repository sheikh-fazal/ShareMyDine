import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { defaultValues, formSchema } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useGetAbsenceInfoByIdQuery,
  usePatchAbsenceInfoMutation,
  usePostAbsenceInfoMutation,
} from "@root/services/foster-child/education-records/absence-info/AbsenceInfoAPI";
import { useEffect } from "react";

export const useAbsenceInfoForm = (props: any) => {
  const router = useRouter();
  const childInfoId = router?.query["absence_info_id"];
  console.log(router, "router?.query");
  const { disabled } = props;

  const { data } = useGetAbsenceInfoByIdQuery(childInfoId, {
    refetchOnMountOrArgChange: true,
  });
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;
  useEffect(() => {
    reset((formValues: any) => ({
      ...formValues,
      ...data?.[0],
      dateOfAbsence: new Date(data?.[0]?.dateOfAbsence),
      label: new Date(data?.[0]?.label),
    }));
  }, [data, reset]);
  const [postAbsenceInfoList] = usePostAbsenceInfoMutation();
  const [patchAbsenceInfoList] = usePatchAbsenceInfoMutation();

  const onSubmit = async (data: any) => {
    console.log(data);
    if (!!router?.query?.absence_info_id) {
      return patchAbsenceInfoFormHanlder(data);
    }

    // Post API of Absence Info
    try {
      const res: any = await postAbsenceInfoList(data).unwrap();
      router.push(
        `/foster-child/education-records/absence-info/add-absence-info?absence_info_id=${res?.id}`
      );
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  // Patch API of Absence Info
  const patchAbsenceInfoFormHanlder = async (data: any) => {
    const patchData = { body: data, id: router?.query?.absence_info_id };
    console.log(patchData);
    try {
      const res: any = await patchAbsenceInfoList(patchData).unwrap();
      console.log(res);
      if (
        router?.asPath.split("/").pop() === "view" ||
        router?.asPath.split("/").pop() === "edit"
      ) {
        router.push(`/foster-child/education-records/absence-info`);
      } else {
        router.push(
          `/foster-child/education-records/absence-info?absence_info_id=${router?.query?.absence_info_id}`
        );
      }
      enqueueSnackbar(res?.message ?? `Details Updated Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    router,
    disabled,
  };
};
