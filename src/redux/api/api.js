import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from "../../constants/config";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/v1/` }),
  tagTypes: ["User", "Tweet"],

  endpoints: (builder) => ({
    myTweets: builder.query({
      query: () => ({
        url: "tweet/mytweets",
        credentials: "include",
      }),
      providesTags: ["Tweet"],
    }),

    searchUser: builder.query({
      query: (name) => ({
        url: `user/search?name=${name}`,
        credentials: "include",
      }),
      providesTags: ["User"],
    }),
  }),
});

export default api;
export const { useMyTweetsQuery, useSearchUserQuery } = api;
