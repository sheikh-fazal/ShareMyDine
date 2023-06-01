import { useForm } from "react-hook-form";
import { healthTherapyInfoFormDataFunction } from ".";

export const useHealthTherapyInfo = () => {
  const healthTherapyInfoFormData = healthTherapyInfoFormDataFunction();
  const methods: any = useForm({
    defaultValues: {},
  });
  const { trigger, setValue, handleSubmit, getValues, watch, reset } = methods;
  const onSubmitHandler = (data: any) => {
    console.log(data);
  };
  return {
    healthTherapyInfoFormData,
    methods,
    handleSubmit,
    onSubmitHandler,
  };
};
