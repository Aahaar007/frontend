import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BACKEND_URL } from "@env";

import { getAuth } from "firebase/auth";

const auth = getAuth();

const baseQuery = fetchBaseQuery({
  baseUrl: BACKEND_URL,
  prepareHeaders: async (headers) => {
    const token = auth.currentUser ? await auth.currentUser.getIdToken() : " ";
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
      query: ({ email, phone }) => ({
        url: "/user",
        method: "POST",
        body: {
          email,
          phone,
        },
      }),
    }),
    getUserDetailsByUid: build.mutation({
      query: (uid) => ({ url: `user/${uid}`, method: "GET" }),
    }),
    verifyUserProfile: build.query({
      query: () => ({ url: "user/hasProfile", method: "GET" }),
    }),
    updateUserDetails: build.mutation({
      query: ({ name, address, dob, gender, profileURL }) => ({
        url: "user",
        method: "PATCH",
        body: {
          name,
          address,
          dob,
          profileURL,
        },
      }),
    }),
    createFoodListing: build.mutation({
      query: ({
        quantity,
        description,
        typeOfDonor,
        isVeg,
        address,
        timeOfExpiry,
        refImage,
      }) => ({
        url: "foodListing",
        method: "POST",
        body: {
          quantity,
          description,
          typeOfDonor,
          isVeg,
          address,
          timeOfExpiry,
          refImage,
        },
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUserDetailsByUidMutation,
  useLazyVerifyUserProfileQuery,
  useUpdateUserDetailsMutation,
  useCreateFoodListingMutation,
} = aahaarApi;
