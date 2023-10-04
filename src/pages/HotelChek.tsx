import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../__data__/store';
import { TitileBar } from '../components/TitleBar/TitileBar';
import { HotelContentWrapper, HotelWrapper } from './HotelChek.style';
import { MainBlock } from '../components/MainBlock/MainBlock';
import { Navigate, useNavigate } from 'react-router';

export const Hotel: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.hotelData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!data) {
            return navigate('/');
        }
    }, []);

    return (
        <HotelWrapper>
            <HotelContentWrapper>
                <TitileBar></TitileBar>
                <MainBlock />
            </HotelContentWrapper>
        </HotelWrapper>
    );
};
