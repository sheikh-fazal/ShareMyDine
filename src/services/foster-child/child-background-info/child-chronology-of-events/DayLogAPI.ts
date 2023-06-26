import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const dayLogApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsDayLogList: build.query<
      GetChildChronologyOfEventsDayLogListApiResponse,
      GetChildChronologyOfEventsDayLogListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/day-log/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsDayLog: build.mutation<
      PostChildChronologyOfEventsDayLogApiResponse,
      PostChildChronologyOfEventsDayLogApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/day-log`,
        method: "POST",
        body: queryArg.addDayLogRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsDayLogById: build.mutation<
      PatchChildChronologyOfEventsDayLogByIdApiResponse,
      PatchChildChronologyOfEventsDayLogByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/day-log/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addDayLogRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsDayLogById: build.query<
      GetChildChronologyOfEventsDayLogByIdApiResponse,
      GetChildChronologyOfEventsDayLogByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/day-log/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsDayLogById: build.mutation<
      DeleteChildChronologyOfEventsDayLogByIdApiResponse,
      DeleteChildChronologyOfEventsDayLogByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/day-log/${queryArg}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export type GetChildChronologyOfEventsDayLogListApiResponse =
  /** status 201  */ AddDayLogResponseDto;
export type GetChildChronologyOfEventsDayLogListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsDayLogApiResponse = /** status 201  */ AddDayLogResponseDto;
export type PostChildChronologyOfEventsDayLogApiArg = {
  addDayLogRequestDto: AddDayLogRequestDto;
};
export type PatchChildChronologyOfEventsDayLogByIdApiResponse =
  /** status 201  */ AddDayLogResponseDto;
export type PatchChildChronologyOfEventsDayLogByIdApiArg = {
  id: string;
  addDayLogRequestDto: AddDayLogRequestDto;
};
export type GetChildChronologyOfEventsDayLogByIdApiResponse =
  /** status 201  */ AddDayLogResponseDto;
export type GetChildChronologyOfEventsDayLogByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsDayLogByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsDayLogByIdApiArg = {
  id: string;
};
export type AddDayLogResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddDayLogRequestDto = {
  dateOfOccurence: string;
  type: string;
  subject: string;
  status: string;
};
export const {
  useGetChildChronologyOfEventsDayLogListQuery,
  usePostChildChronologyOfEventsDayLogMutation,
  usePatchChildChronologyOfEventsDayLogByIdMutation,
  useLazyGetChildChronologyOfEventsDayLogByIdQuery,
  useDeleteChildChronologyOfEventsDayLogByIdMutation,
} = dayLogApi;
