"use client";

import { JOBS_API } from "@/config/api";
import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type Job = {
    id: number;
    title: string;
    fixedPrice: string;
    hourly: string;
    projectLength: string;
    projectType: string;
    price: string;
    proposal: string;
    description: string;
    skills: string[];
    expert: string;
    spent: string;
    location: string;
    isSaved: boolean
};

export interface JobState {
    loading: boolean,
    error: string | null,
    jobs: Job[],
    job: Job | null
}

const initialState: JobState = {
    loading: false,
    error: null,
    jobs: [],
    job: null
};

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        getAllJobs: (state, action: PayloadAction<Job[]>) => {
            state.jobs = action.payload;
            state.loading = false;
            state.error = '';
        },
        getSingleJob: (state, action: PayloadAction<Job>)=>{
            state.job = action.payload;
            state.loading = false;
            state.error = '';
        }
    }
})

// --------------------------- Actions -------------------------------------

const {setLoading, setError, getAllJobs, getSingleJob} = jobSlice.actions;

export const getJobs = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(false));
        const { data } = await axios.get(`${JOBS_API}`);
        dispatch(getAllJobs(data));
    } catch (error) {
        const errorMessage = typeof error === 'string' ? error : String(error);
        dispatch(setError(errorMessage));
    }
};
export const getJob = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(false));
        const { data } = await axios.get(`${JOBS_API}/${id}`);
        dispatch(getSingleJob(data));
    } catch (error) {
        const errorMessage = typeof error === 'string' ? error : String(error);
        dispatch(setError(errorMessage));
    }
};


export default jobSlice.reducer;