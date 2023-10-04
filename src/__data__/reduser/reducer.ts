import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IDataState, IData } from '../models/models';

const initialState: IDataState = {
    data: null,
    isLoading: false,
    isError: false,
    error: '',
    location: 'Москва',
    date: '12.10.2023',
    days: '1',
    selectData: [],
    selectHotelId: 0,
    selectCounter: 0,
    sortName: '',
    linkDate: '2023-12-10',
    login: '',
    pass: '',
};

export const dataSlice = createSlice({
    name: 'hotel',
    initialState: initialState,
    reducers: {
        dataFetch(state: Draft<IDataState>) {
            return { ...state, isLoading: true };
        },
        dataFetchFailure(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, isLoading: false, isError: true, error: action.payload };
        },
        dataFetchSuccess(state: Draft<IDataState>, action: PayloadAction<Array<IData>>) {
            return { ...state, isLoading: false, data: action.payload };
        },
        locationLoad(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, location: action.payload };
        },
        dateLoad(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, date: action.payload };
        },
        daysLoad(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, days: action.payload };
        },
        increaseCounter(state: Draft<IDataState>, action: PayloadAction<number>) {
            return { ...state, selectCounter: action.payload };
        },
        addSelectData(state: Draft<IDataState>, action: PayloadAction<IData>) {
            return { ...state, selectData: [...state.selectData, action.payload] };
        },
        deleteDobleItem(state: Draft<IDataState>, action: PayloadAction<Array<IData>>) {
            return { ...state, selectData: action.payload };
        },
        addSortName(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, sortName: action.payload };
        },
        addLinkDate(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, linkDate: action.payload };
        },
        addLogin(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, login: action.payload };
        },
        addPass(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, pass: action.payload };
        },
    },
});

export default dataSlice.reducer;
