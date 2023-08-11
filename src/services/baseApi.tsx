// RTK Query
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// Store
import { RootState } from "@root/redux/store";
// Config
import { BASE_URL } from "@root/config";

// Tags
export const TAGS = [
  "USER",
  "INITIAL_ENQUIRY",
  "CARER_FAMILY_NETWORK",
  "STICKY_NOTES",
  "INCIDENT_LIST",
  "ALLEGATION_LIST",
  "PET_QUESTIONNAIRE",
  "LINKS",
  "EDIT_LINKS",
  "UPDATE_PROFILE",
  "ALLEGATION_DOCUMENTS",
  "COMPLAINT_LIST",
  "COMPLAINT_DOCUMENTS",
  "INCIENT_UPLOAD_DOCUMENTS",
  "INITIAL_CONTACT",
  "INITIAL_HOME_VISIT",
  "Experience",
  "SingleExperience",
  "CAR_INSURANCE",
  "DBS_CHECK",
  "EMPLOYMENT_REFERENCE1",
  "EMPLOYMENT_REFERENCE2",
  "LOCAL_AUTHORITY",
  "MEDICAL_ADVISOR",
  "PARTNER_REFERENCE",
  "INITIAL_HOME_VISIT_DOCUMENTS",
  "GP_DETAILS_INFO",
  "GP_DETAILS_INFO_DOCUMENTS",
  "REFERENCE_ONE",
  "REFERENCE_TWO",
  "STATUTORY_LIST_UPLOAD_DOCUMENTS",
  "POST_REFERENCE",
  "EDIT_REFERENCE",
  "POST_EMPLOYEE",
  "other-details/bank-details",
  "CLA_DOCUMENTATION_LIST",
  "GET_BASICINFORMATION",
  "NEXT-OF-KIN",
  "POST_CARER_ADDRESS",
  "CHILD_EDUCATION_INFO_LIST",
  "EDUCATION_INFO_DOCUMENTS",
  "FAMILY_PERSON_LIST",
  "FAMILY_PERSON_UPLOAD_DOCUMENT",
  "POST_FAMILY",
  "EDIT_EMPLOYEE",
  "POST_EXPARTNER",
  "EDIT_EXPARTNER",
  "behaviorInfoList",
  "STATUTORY_MEDICAL_LIST",
  "APPLICATIONFORM_DOCUMENTS",
  "IMMUNISATION_DETAIL",
  "IMMUNISATION_LIST",
  "CHILD_CHRONOLOGY_OF_EVENTS",
  "STATUTORY_MEDICAL_TYPE_INFO_DOCUMENTS",
  "hospital-info-list",
  "hospital-info-list-document",
  "LEISURE_ACTIVITY_LIST",
  "LEISURE_ACTIVITY_DOCUMENTS_LIST",
  "medicalappointments",
  "ABSENCE_INFO",
  "hospitalization",
  "ABSENCE_INFO_UPLOAD_DOCUMENTS",
  "hospitalization",
  "hospitalzationDocuments",
  "DIARY_RECORDINGS_LIST",
  "foster-lists",
  "VOCATIONAL-INFO",
  "VOCATIONAL-INFO-DOCS",
  "THERAPY_INFO_LIST",
  "INDEPENDENCE_PACKS_LIST",
  "DIARY_RECORDING_DOCUMENTS",
  "OOHREPORT_LIST_TABLE",
  "REPORTS_DOCUMENTS",
  "CHILD_REPORTS",
  "Child-holiday-prefrence",
  "Child-holiday-prefrence-document",
  "CHILD_EXCLUSION_INFO_LIST",
  "CHILD_EDUCATION_PLAN_LIST",
  "OUT-SCHOOL-ACTIVITY",
  "SUPERVISING_CARER_FAMILY_NETWORK",
  "SUBSTITUTE_CARER_DOCUMENTS",
  "SUBSTITUTE_CARER",
  "LEISURE_ACTIVITY_DETAIL",
  "POST_CARER_ADDRESS_LIST",
  "INDEPENDENCE_PACK",
  "SATS_EXAM_GRADE_LIST",
  "CLA_REVIEW",
  "CLA_REVIEW_DOCUMNET",
  "ALLEGATION_INFO",
  "ALLEGATION_INFO_DOCUMENTS",
  "SANCTION_DETAILS_LIST",
  "HEALTH_AND_SAFETY",
  "UNANNOUNCED_VISIT_LIST",
  "UNANNOUNCED_UPLOAD_DOCUMENTS",
  "FOSTER_CARER_ANNUAL_LIST",
  "POST_PLACEMENT_REFERENCES",
  "MEDICAL_APPOINTMENTS_DOCS"
];
// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.authToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const baseAPI = createApi({
  reducerPath: "api",
  // baseQuery: baseQueryWithRetry,
  baseQuery: baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
