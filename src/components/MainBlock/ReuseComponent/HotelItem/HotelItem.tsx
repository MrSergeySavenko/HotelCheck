import React, { useEffect, useState } from 'react';
import {
    SHoteItemWrapper,
    SHotelItemDate,
    SHotelItemDateWrapper,
    SHotelItemGoldStar,
    SHotelItemGraySpan,
    SHotelItemGrayStar,
    SHotelItemHart,
    SHotelItemHeader,
    SHotelItemHomeImg,
    SHotelItemHomeWrapper,
    SHotelItemInfoBlock,
    SHotelItemInfoHotelWrapper,
    SHotelItemPriceName,
    SHotelItemPriceText,
    SHotelItemPriceWrapper,
    SHotelItemRatingWrapper,
    SHotelItemSpan,
} from './HotelItem.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../__data__/store';
import { uniqueKey } from '../../../../__data__/utils/utils';
import { dataSlice } from '../../../../__data__/reduser';
import { IData } from '../../../../__data__/models/models';
import { addNewSelectData } from '../../../../__data__/actions/hotelData.actions';

interface IProp {
    hotelName: string;
    stars: number;
    price: number;
    selectItem: IData;
    active: boolean;
    activeHart: boolean;
}

export const HotelItem: React.FC<IProp> = ({ hotelName, stars, price, selectItem, active, activeHart }) => {
    const { date, days, selectData } = useSelector((state: RootState) => state.hotelData);

    const [rightDay, setRightDay] = useState('');
    const [isActive, setIsActive] = useState(activeHart);

    const dispatch = useDispatch();

    const grayStarsArr = ['gray', 'gray', 'gray', 'gray', 'gray'];

    const rightDayText = () => {
        if (days === '') {
            setRightDay('1 день');
        } else {
            if (Number(days) === 1) {
                setRightDay(`${days} день`);
                console.log('done');
            } else {
                if (Number(days) >= 2 && Number(days) <= 4) {
                    setRightDay(`${days} дня`);
                } else {
                    setRightDay(`${days} дней`);
                }
            }
        }
    };

    const getStarsArray = (num: number) => {
        return grayStarsArr.map((item: string, i: number) => {
            if (i < num) {
                return <SHotelItemGoldStar key={uniqueKey(item, i)} />;
            } else {
                return <SHotelItemGrayStar key={uniqueKey(item, i)} />;
            }
        });
    };

    useEffect(() => {
        rightDayText();
        console.log(days);
        getStarsArray(stars);
    }, [days]);

    useEffect(() => {
        const answer = selectData.find((item: IData) => selectItem.hotelId === item.hotelId);
        if (answer) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [selectData]);

    const handlerHartClick = () => {
        dispatch(addNewSelectData(selectItem) as any);
    };

    return (
        <>
            <SHoteItemWrapper>
                <SHotelItemHomeWrapper active={active}>
                    <SHotelItemHomeImg />
                </SHotelItemHomeWrapper>
                <SHotelItemInfoHotelWrapper>
                    <SHotelItemInfoBlock right={false}>
                        <SHotelItemHeader>{hotelName}</SHotelItemHeader>
                        <SHotelItemDateWrapper>
                            <SHotelItemDate>{date === '' ? '12.10.2023' : date}</SHotelItemDate>
                            <SHotelItemGraySpan />
                            <SHotelItemDate>{rightDay}</SHotelItemDate>
                        </SHotelItemDateWrapper>
                        <SHotelItemRatingWrapper>{getStarsArray(stars)}</SHotelItemRatingWrapper>
                    </SHotelItemInfoBlock>
                    <SHotelItemInfoBlock right={true}>
                        <SHotelItemHart isActive={isActive} onClick={handlerHartClick} />
                        <SHotelItemPriceWrapper>
                            <SHotelItemPriceName>Price:</SHotelItemPriceName>
                            <SHotelItemPriceText>{`${Math.ceil(
                                price * (Number(days) ? Number(days) : 1)
                            )} ₽`}</SHotelItemPriceText>
                        </SHotelItemPriceWrapper>
                    </SHotelItemInfoBlock>
                </SHotelItemInfoHotelWrapper>
            </SHoteItemWrapper>
            <SHotelItemSpan />
        </>
    );
};
