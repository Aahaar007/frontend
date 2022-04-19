import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BACKEND_URL } from "@env";

import { getAuth } from "firebase/auth";

const auth = getAuth();

const baseQuery = fetchBaseQuery({
  baseUrl: BACKEND_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const aahaarApi = createApi({
  reducerPath: "aahaarApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    createUser: build.mutation({
      query: ({ email, phone, token }) => ({
        url: "/user",
        method: "POST",
        body: {
          email,
          phone,
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    getUserDetailsByUid: build.query({
      query: (uid) => ({ url: `user/${uid}`, method: "GET" }),
    }),
    verifyUserProfile: build.query({
      query: () => ({ url: "user/hasProfile", method: "GET" }),
    }),
    updateUserDetails: build.query({
      query: (body) => ({
        url: "user",
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUserDetailsByUidQuery,
  useLazyVerifyUserProfileQuery,
  useUpdateUserDetailsQuery,
} = aahaarApi;
