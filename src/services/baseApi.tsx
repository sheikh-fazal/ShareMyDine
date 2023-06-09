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
  "INCIENT_UPLOAD_DOCUMENTS",
  "INITIAL_CONTACT",
  "INITIAL_HOME_VISIT",
  "Experience",
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
