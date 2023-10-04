import React, { useState } from 'react';
import {
    SSelectBlockItemWrapper,
    SSelectBlockSortingWrapper,
    SSelectBlockTitle,
    SSelectBlockWrapper,
} from './SelectBlock.style';
import { SortingButton } from '../ReuseComponent/SortingButton/SortingButton';
import { useSelector } from 'react-redux';
import { Root } from 'react-dom/client';
import { RootState } from '../../../__data__/store';
import { IData } from '../../../__data__/models/models';
import { HotelItem } from '../ReuseComponent/HotelItem/HotelItem';
import { uniqueKey } from '../../../__data__/utils/utils';

export const SelectBlock: React.FC = () => {
    const { selectData } = useSelector((state: RootState) => state.hotelData);

    const getSelectHotels = () => {
        return selectData?.map((item: IData, i: number) => (
            <HotelItem
                price={item.priceFrom}
                hotelName={item.hotelName}
                stars={item.stars}
                selectItem={item}
                active={false}
                activeHart={true}
                key={uniqueKey(item.hotelName, i)}
            />
        ));
    };

    return (
        <>
            <SSelectBlockWrapper>
                <SSelectBlockTitle>Избранное</SSelectBlockTitle>
                <SSelectBlockSortingWrapper>
                    <SortingButton text='Рейтинг' sortItemName={'stars'} />
                    <SortingButton text='Цена' sortItemName={'priceAvg'} />
                </SSelectBlockSortingWrapper>
                <SSelectBlockItemWrapper>{getSelectHotels()}</SSelectBlockItemWrapper>
            </SSelectBlockWrapper>
        </>
    );
};
