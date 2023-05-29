import * as Yup from "yup";

export const interestFormValues = {
  perviousExperience: "",
  motivation: "",
  impactOfTheTask: "",
  skilledOffered: "",
  knowledgeOfTheReason: "",
};

export const defaultValueInterestForm = (data: any = interestFormValues) => {
  return {
    perviousExperience: data.perviousExperience,
    motivation: data.motivation,
    impactOfTheTask: data.impactOfTheTask,
    skilledOffered: data.skilledOffered,
    knowledgeOfTheReason: data.knowledgeOfTheReason,
  };
};

export const InterestFormSchema = Yup.object().shape({
  perviousExperience: Yup.string()
    .required("Previous experience is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  motivation: Yup.string()
    .required("Motivation is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  impactOfTheTask: Yup.string()
    .required("Impact of task is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  skilledOffered: Yup.string()
    .required("Skilled offer is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  knowledgeOfTheReason: Yup.string()
    .required("knowledge of the reason is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
});

export const interestFormFieldsInfoFunction = (isFieldDisable = false) => [
  {
    type: "textarea",
    name: "perviousExperience",
    label: "",
    title:
      "Pervious Experience (Have you ever Fostered before? if so, with whom and how did this end?)",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },

  {
    type: "textarea",
    name: "motivation",
    label: "",
    title:
      "Motivation (Explore with the applicants their reasons for wishing to foster.How did they learn of fostering? How did they reach their decision?Why now?Have they discussed this with family and friends? Do they know foster carer? and what is their experience of fostering? )",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    name: "impactOfTheTask",
    label: "",
    title:
      "Impact of the task  (Have the applicants considerd how fostering might impact on themselves and their relationship with others? have they considerd the impact on their day to functioning)",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    name: "skilledOffered",
    label: "",
    title:
      "Skilled Offered (What skills are they offering? And how would propose to develop their skills)",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    name: "knowledgeOfTheReason",
    label: "",
    title:
      " Knowledge of the reason for child being locked after (What knowledge does the applicant/s have of this? Do they appreciate how chlidren may present/behave as a consequence? And how the would they address these issues? )",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
];
