import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  //TODO: Setup environment variables
  baseUrl: "http://192.168.29.237:5000/services",
  prepareHeaders: (headers) => {
    //TODO: Add firebase token for currently logged in user here
    const token = null;
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
    createUser: build.query({
      query: ({ email, phone }) => ({
        url: "/user",
        method: "POST",
        body: {
          email,
          phone,
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
      query: ({ name, address, dob, gender, profileURL }) => ({
        url: "user",
        method: "PATCH",
        body: {
          name,
          address,
          dob,
          gender,
          profileURL,
        },
      }),
    }),
  }),
});

export const {
  useCreateUserQuery,
  useGetUserDetailsByUidQuery,
  useVerifyUserProfileQuery,
  useUpdateUserDetailsQuery,
} = aahaarApi;
