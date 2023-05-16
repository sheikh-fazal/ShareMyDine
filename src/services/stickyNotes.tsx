import { baseAPI } from "./baseApi";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStickyNotes: builder.query<null, void>({
      query: () => "sticky-notes",
      providesTags: ["STICKY_NOTES"],
    }),
    stickyNotes: builder.mutation({
      query: (notes: any) => ({
        url: "sticky-notes",
        method: "POST",
        body: notes,
      }),
      invalidatesTags: ["STICKY_NOTES"],
    }),
    editStickyNotes: builder.mutation({
      query: ({id,payload}) => ({             
        url: `sticky-notes/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["STICKY_NOTES"],
    }),
  }),
  
});

export const {
    useStickyNotesMutation,
    useGetStickyNotesQuery,
    useEditStickyNotesMutation

} = userAPI;
