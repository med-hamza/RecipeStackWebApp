import { apiSlice } from "./apiSlice";
const USER_URL = '/users';
const BASE_URL_SIGNUP_SIGNIN = process.env.NODE_ENV === "development" ? "http://localhost:3000" : 'https://recipe-web-app-seven.vercel.app/'
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${BASE_URL_SIGNUP_SIGNIN}${USER_URL}/auth`,
                method: 'POST',
                body: data,
                withCredentials: true
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${BASE_URL_SIGNUP_SIGNIN}${USER_URL}`,
                method: 'POST',
                body: data,
                withCredentials: true
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${BASE_URL_SIGNUP_SIGNIN}${USER_URL}/logout`,
                method: 'POST',
                withCredentials: true
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${BASE_URL_SIGNUP_SIGNIN}${USER_URL}/profile`,
                method: 'PUT',
                body: data,
                withCredentials: true
            })
        })
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation } = usersApiSlice;