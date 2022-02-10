import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNew = createAsyncThunk('anime/fetchNew', async () => {
    let date = new Date();
    let season: string;
    let year: string = date.getFullYear().toString();
    let month: number = date.getMonth();
    /**
     * Anime Season Date:
     * Winter — January to March
     * Spring — April to June
     * Summer — July to September
     * Fall   — October to December
     */
    switch (month) {
        case 0 || 1 || 2:
            season = 'winter';
            break;
        case 3 || 4 || 5:
            season = 'spring';
            break;
        case 6 || 7 || 8:
            season = 'summer';
            break;
        case 9 || 10 || 11:
            season = 'fall';
            break;
        default:
            season = 'winter';
            break;
    }
    return await fetch(`https://api.jikan.moe/v4/seasons/${year}/${season}`).then((res) =>
        res.json()
    );
});

const slice = createSlice({
    name: 'anime',
    initialState: { data: { data: [] }, status: false },
    reducers: {},
    extraReducers: {
        [fetchNew.pending as any]: (state) => {
            state.status = false;
        },
        [fetchNew.fulfilled as any]: (state, { payload }) => {
            state.status = true;
            state.data = payload;
        },
        [fetchNew.rejected as any]: (state) => {
            state.status = false;
        },
    },
});

export const NewSlice = slice.reducer;
