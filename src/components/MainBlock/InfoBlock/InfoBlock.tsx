import React, { useEffect, useState } from 'react';
import {
    InfoBlockArrow,
    InfoBlockContent,
    InfoBlockContentTitle,
    InfoBlockData,
    InfoBlockHotelLocation,
    InfoBlockHotelLocationText,
    InfoBlockImgSrollbar,
    InfoBlockItemBar,
    InfoBlockItemCounterText,
    InfoBlockItemCounterWrapper,
    InfoBlockItemScrollBar,
    InfoBlockImgItem,
    InfoBlockWrapper,
} from './InfoBlock.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../__data__/store';
import { HotelItem } from '../ReuseComponent/HotelItem/HotelItem';
import { IData } from '../../../__data__/models/models';
import { uniqueKey } from '../../../__data__/utils/utils';

export const InfoBlock: React.FC = () => {
    const { data, location, date, selectData } = useSelector((state: RootState) => state.hotelData);

    const [sortData, setSortData] = useState(data);

    const imageArr = ['/StockPhoto1.png', '/StockPhoto2.png', '/StockPhoto3.png', '/StockPhoto1.png'];

    const getHotels = () => {
        return data?.map((item: IData, i: number) => (
            <HotelItem
                price={item.priceFrom}
                hotelName={item.hotelName}
                stars={item.stars}
                selectItem={item}
                active={true}
                activeHart={false}
                key={uniqueKey(item.hotelName, i)}
            />
        ));
    };

    const getImg = () => {
        return imageArr?.map((item: string, i: number) => {
            <InfoBlockImgItem imgSrc={item} key={uniqueKey(item, i)} />;
        });
    };

    useEffect(() => {
        setSortData(data);
        getHotels();
    }, [data]);

    return (
        <>
            <InfoBlockWrapper>
                <InfoBlockContent>
                    <InfoBlockContentTitle>
                        <InfoBlockHotelLocation>
                            <InfoBlockHotelLocationText>Отели</InfoBlockHotelLocationText>
                            <InfoBlockArrow />
                            <InfoBlockHotelLocationText>
                                {location === '' ? 'Москва' : location}
                            </InfoBlockHotelLocationText>
                        </InfoBlockHotelLocation>
                        <InfoBlockData>{date === '' ? '12.10.2023' : date}</InfoBlockData>
                    </InfoBlockContentTitle>
                    <InfoBlockImgSrollbar>
                        <InfoBlockImgItem imgSrc={'/StockPhoto1.png'} />
                        <InfoBlockImgItem imgSrc={'/StockPhoto2.png'} />
                        <InfoBlockImgItem imgSrc={'/StockPhoto3.png'} />
                        <InfoBlockImgItem imgSrc={'/StockPhoto1.png'} />
                    </InfoBlockImgSrollbar>
                    <InfoBlockItemScrollBar>
                        <InfoBlockItemCounterWrapper>
                            <InfoBlockItemCounterText>Добавлено в Избранное:</InfoBlockItemCounterText>
                            <InfoBlockItemCounterText>{selectData.length}</InfoBlockItemCounterText>
                        </InfoBlockItemCounterWrapper>
                        <InfoBlockItemBar>{getHotels()}</InfoBlockItemBar>
                    </InfoBlockItemScrollBar>
                </InfoBlockContent>
            </InfoBlockWrapper>
        </>
    );
};
