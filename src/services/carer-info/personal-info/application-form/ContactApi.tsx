import { baseAPI, TAGS } from "@root/services/baseApi";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    updateContact: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/contact?applicationFormId=${id}`,
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { useUpdateContactMutation } = contactApi;
