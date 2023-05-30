import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "ASSESSMENT_STAGE_ONE";

export const assessmentStageOneApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRegularAssessmentDetails: builder.query({
      query: ({ params }: any) => ({
        url: `/assessment-stage-one/regular-assessment-meeting`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    getSingleRegularAssessmentDetail: builder.query({
      query: ({ id }: any) => ({
        url: `/assessment-stage-one/regular-assessment-meeting/${id}`,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    patchRegularAssessmentDetail: builder.mutation({
      query: (data: any) => {
        const { id, regularAssessmentForm } = data;
        for (var pair of regularAssessmentForm.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }

        return {
          url: `/assessment-stage-one/regular-assessment-meeting/${id}`,

          method: "PATCH",

          body: regularAssessmentForm,
        };
      },

      invalidatesTags: [TAG],
    }),

    postRegularAssessmentDetail: builder.mutation({
      query: (body) => ({
        url: `/assessment-stage-one/regular-assessment-meeting`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetRegularAssessmentDetailsQuery,
  useGetSingleRegularAssessmentDetailQuery,
  useLazyGetSingleRegularAssessmentDetailQuery,
  usePatchRegularAssessmentDetailMutation,
  usePostRegularAssessmentDetailMutation,
} = assessmentStageOneApi;