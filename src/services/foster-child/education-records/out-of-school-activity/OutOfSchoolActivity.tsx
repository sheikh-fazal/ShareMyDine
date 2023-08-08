import { baseAPI } from "@root/services/baseApi";

export const OutOfSchoolActivity: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getOutSchoolActivityList: builder.query({
      query: ({ fosterChildId, params }: any) => ({
        url: `/school-info/foster-child/out-of-school-activity/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
    getSingleSchoolActivityData: builder.query({
      query: (fosterChildId: any) => ({
        url: `/school-info/out-of-school-activity/${fosterChildId}`,
        method: "GET",
      }),
      providesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
    deleteSingleSchoolActivityData: builder.mutation({
      query: (OutOfSchoolActivityId: any) => ({
        url: `/school-info/out-of-school-activity/${OutOfSchoolActivityId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
  }),
});

export const {
  useGetOutSchoolActivityListQuery,
  useGetSingleSchoolActivityDataQuery,
  useDeleteSingleSchoolActivityDataMutation,
} = OutOfSchoolActivity;
