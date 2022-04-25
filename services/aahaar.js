import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BACKEND_URL } from "@env";

import { getAuth } from "firebase/auth";

const auth = getAuth();

const baseQuery = fetchBaseQuery({
  baseUrl: BACKEND_URL,
  prepareHeaders: async (headers, { getState }) => {
    const token = await auth?.currentUser.getIdToken();
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
    updateUserDetails: build.mutation({
      query: (body) => ({
        url: "user",
        method: "PATCH",
        body,
      }),
    }),
    getUserFoodListings: build.query({
      query: (body) => ({
        url: "user/foodListings",
        method: "GET",
      }),
    }),
    getUserRequests: build.query({
      query: (body) => ({
        url: "user/requests",
        method: "GET",
      }),
    }),
    createFoodListing: build.mutation({
      query: (body) => ({
        url: "foodListing",
        method: "POST",
        body,
      }),
    }),
    getFoodListing: build.query({
      query: () => ({
        url: "foodListing",
        method: "GET",
      }),
    }),
    getFoodListingById: build.query({
      query: (id) => ({
        url: "foodListing/" + id,
        method: "GET",
      }),
    }),
    createRequest: build.mutation({
      query: (body) => ({
        url: "request",
        method: "POST",
        body,
      }),
    }),
    getRequestByCode: build.mutation({
      query: (code) => ({
        url: `request/code/${code}`,
        method: "GET",
      }),
    }),
    cancelRequest: build.mutation({
      query: (id) => ({
        url: "request/cancel/" + id,
        method: "DELETE",
      }),
    }),
    fulfillRequest: build.mutation({
      query: (id) => ({
        url: `request/fulfill/${id}`,
        method: "DELETE",
      }),
    }),
    getHotspots: build.query({
      url: "/hotpsot",
      method: "GET",
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUserDetailsByUidQuery,
  useLazyGetUserDetailsByUidQuery,
  useLazyVerifyUserProfileQuery,
  useUpdateUserDetailsMutation,
  useGetUserFoodListingsQuery,
  useGetUserRequestsQuery,
  useCreateFoodListingMutation,
  useGetFoodListingQuery,
  useGetFoodListingByIdQuery,
  useLazyGetFoodListingByIdQuery,
  useCreateRequestMutation,
  useGetRequestByCodeMutation,
  useCancelRequestMutation,
  useFulfillRequestMutation,
  useGetHotspotsQuery,
} = aahaarApi;
