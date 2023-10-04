export interface IData {
    hotelId: number;
    priceAvg: number;
    stars: number;
    pricePercentile: {
        75: number;
        3: number;
        35: number;
        99: number;
        10: number;
        50: number;
    };
    locationId: number;
    location: {
        state: null;
        geo: {
            lat: number;
            lon: number;
        };
        country: string;
        name: string;
    };
    hotelName: string;
    priceFrom: number;
}

export interface IDataState {
    isLoading: boolean;
    isError: boolean;
    error: string;
    data: Array<IData> | null;
    location: string;
    date: string;
    days: string;
    selectData: Array<IData>;
    selectHotelId: number;
    selectCounter: number;
    sortName: string;
    linkDate: string;
    login: string;
    pass: string;
}
