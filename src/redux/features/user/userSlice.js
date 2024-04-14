import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../../utils/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const initialState = {
    name: "",
    email: "",
    isLoading: true,
    isError: false,
    error: "",
}

export const createUser = createAsyncThunk(
    "userSlice/createUser",
    async ({ email, password, name, picture }) => {
        const data = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: picture,
        })
        console.log(data)
        return {
            email: data.user.email,
            name: data.user.displayName,
        }
    })
export const loginUser = createAsyncThunk(
    "userSlice/loginUser",
    async ({ email, password }) => {
        const data = await signInWithEmailAndPassword(auth, email, password)
        console.log(data)
        return {
            email: data.user.email,
        }
    })
export const googleUser = createAsyncThunk(
    "userSlice/googleUser",
    async () => {
        const data = await signInWithPopup(auth, provider)
        console.log(data)
        return {
            email: data.user.email,
            name: data.user.displayName,
        }
    })

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.email = payload.email,
                state.name = payload.name
        },
        toggleLoading: (state, { payload }) => {
            state.isLoading = payload
        },
        logOut: (state) => {
            state.name = '',
                state.email = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
                state.name = '';
                state.email = '';
            })
            .addCase(createUser.rejected, (state, { action }) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.name = '';
                state.email = '';
            })
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.name = payload.name;
                state.email = payload.email;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.email = payload.email;
            })
            .addCase(loginUser.rejected, (state, { action }) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.email = '';
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
                state.email = '';
            })
            .addCase(googleUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
                state.email = '';
                state.name = '';
            })
            .addCase(googleUser.rejected, (state, { action }) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.email = '';
                state.name = "";
            })
            .addCase(googleUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.name = payload.name;
                state.email = payload.email;
            })
    }
})
export const { setUser, toggleLoading, logOut } = userSlice.actions;
export default userSlice.reducer;