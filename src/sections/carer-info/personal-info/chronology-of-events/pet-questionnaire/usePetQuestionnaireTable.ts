import { useTableParams } from "@root/hooks/useTableParams";
import { useGetPetQuestionnaireTableApiQuery } from "@root/services/carer-info/personal-info/pet-questionnaire/petQuestionnaireApi";
import { useRef } from "react";

export const usePetQuestionnaireTable = () => {
  const tableHeaderRef = useRef<any>();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  // ----------------------------------------------------------------------
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetPetQuestionnaireTableApiQuery({ params });
  const petQuestionnaire = data?.questionnaire_list;
  const meta = data?.meta;

  return {
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    petQuestionnaire,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
  };
};
