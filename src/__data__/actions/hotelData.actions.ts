import { IData } from '../models/models';
import { dataSlice } from '../reduser';
import { AppDispatch, AppState } from '../store';

export const fetchDataLow = () => async (dispatch: AppDispatch, getState: AppState) => {
    const linkDate = getState().hotelData.linkDate;
    const linkLoc = getState().hotelData.location;

    try {
        dispatch(dataSlice.actions.dataFetch());

        const url = `http://engine.hotellook.com/api/v2/cache.json?currency=rub&checkIn=${
            linkDate ? linkDate : '12.10.2023'
        }&checkOut=${linkDate ? linkDate : '12.10.2023'}&limit=10&location=${linkLoc ? linkLoc : 'Москва'}`;

        const response = await fetch(url);
        const data: Array<IData> = await response.json();
        console.log(data);

        if (response) {
            dispatch(dataSlice.actions.dataFetchSuccess(data));
        }
    } catch (err: unknown) {
        dispatch(dataSlice.actions.dataFetchFailure(err as string));
        console.error(err);
    }
};

export const addNewSelectData = (transferItem: IData) => (dispatch: AppDispatch, getState: AppState) => {
    const favoriteList = getState().hotelData.selectData;

    const answer = favoriteList.find((item: IData) => transferItem.hotelId === item.hotelId);

    if (answer) {
        let newArr = [...favoriteList];
        newArr.forEach((item: IData, i: number) => {
            if (item.hotelId === transferItem.hotelId) {
                newArr.splice(i, 1);
                dispatch(dataSlice.actions.deleteDobleItem(newArr));
                console.log('delete');
            }
        });
    } else {
        dispatch(dataSlice.actions.addSelectData(transferItem));
    }
};
