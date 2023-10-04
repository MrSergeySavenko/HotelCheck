import React, { useEffect, useState } from 'react';
import { SearchBlockInputWrapper, SearchBlockWrapper } from './SearchBlock.style';
import { InputBlock } from '../ReuseComponent/InputBlock/InputBlock';
import { Button } from '../ReuseComponent/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { dataSlice } from '../../../__data__/reduser';
import { RootState } from '../../../__data__/store';
import { fetchDataLow } from '../../../__data__/actions/hotelData.actions';

export const SearchBlock: React.FC = () => {
    const { date, linkDate } = useSelector((state: RootState) => state.hotelData);

    const [pDate, setPDate] = useState('');
    const [pLocation, setPLocation] = useState('');
    const [pDays, setPDays] = useState('');

    const dispatch = useDispatch();

    const getFetchDate = (loadDate: string) => {
        // if (date !== pDate) {
        //     let link: Array<string> = [];
        //     let yearArr = date.slice(6, date.length);
        //     const monthArr = date.slice(3, 5);
        //     const daysArr = date.slice(0, 2);
        //     const stringLink = link.concat(yearArr, monthArr, daysArr).join('-');
        //     dispatch(dataSlice.actions.addLinkDate(stringLink));
        //     console.log(stringLink);
        // }
        dispatch(dataSlice.actions.addLinkDate(loadDate));
    };

    const searchHotels = () => {
        dispatch(dataSlice.actions.locationLoad(pLocation));
        dispatch(dataSlice.actions.dateLoad(pDate));
        dispatch(dataSlice.actions.daysLoad(pDays));
        getFetchDate(pDate);
        dispatch(fetchDataLow() as any);
        console.log(pDate, linkDate, pLocation, pDays);
    };

    return (
        <>
            <SearchBlockWrapper>
                <SearchBlockInputWrapper>
                    <InputBlock
                        placeholderText='Москва'
                        titleText='Локация'
                        getValue={pLocation}
                        setGetValue={setPLocation}
                        type='text'
                        bDate={false}
                        name='location'
                        wrong={false}
                    />
                    <InputBlock
                        placeholderText='12.10.2023'
                        titleText='Дата заселения'
                        getValue={pDate}
                        setGetValue={setPDate}
                        type='date'
                        bDate={true}
                        name='date'
                        wrong={false}
                    />
                    <InputBlock
                        placeholderText='1'
                        titleText='Количество дней'
                        getValue={pDays}
                        setGetValue={setPDays}
                        type='text'
                        bDate={false}
                        name='days'
                        wrong={false}
                    />
                </SearchBlockInputWrapper>

                <Button text='Найти' onClickFunk={searchHotels} />
            </SearchBlockWrapper>
        </>
    );
};
