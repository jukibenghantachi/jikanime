import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLatest = createAsyncThunk('anime/fetchLatest', async () => {
    return await fetch('https://api.jikan.moe/v4/watch/episodes').then((res) => res.json());
});

const slice = createSlice({
    name: 'latest',
    initialState: { data: { data: [] }, status: false },
    reducers: {},
    extraReducers: {
        [fetchLatest.pending as any]: (state) => {
            state.status = false;
        },
        [fetchLatest.fulfilled as any]: (state, { payload }) => {
            state.status = true;
            state.data = payload;
        },
        [fetchLatest.rejected as any]: (state) => {
            state.status = false;
        },
    },
});

export const LatestSlice = slice.reducer;
