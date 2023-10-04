import React, { useState } from 'react';
import { SortingButtonImg, SortingButtonText, SortingButtonWrapper } from './SortingButton.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../__data__/store';
import { dataSlice } from '../../../../__data__/reduser';
import { cpSync } from 'fs';

interface IProp {
    text: string;
    sortItemName: string;
}

export const SortingButton: React.FC<IProp> = ({ text, sortItemName }) => {
    const { selectData, data, sortName } = useSelector((state: RootState) => state.hotelData);

    const [sortClick, setSortClick] = useState(0);

    const dispatch = useDispatch();

    const handleSort = (field: string) => {
        console.log(field);
        if (sortName === field) {
            if (sortClick === 0) {
                if (selectData) {
                    const sortDataConstract = [...selectData].sort((a: any, b: any) =>
                        a[field] > b[field] ? 1 : -1
                    );
                    dispatch(dataSlice.actions.deleteDobleItem(sortDataConstract));
                    console.log('первый');
                    setSortClick(1);
                }
            } else {
                if (selectData) {
                    if (sortClick === 1) {
                        const sortDataConstract = [...selectData].sort((a: any, b: any) =>
                            b[field] > a[field] ? 1 : -1
                        );
                        dispatch(dataSlice.actions.deleteDobleItem(sortDataConstract));
                        console.log('второй');
                        setSortClick(2);
                    } else {
                        if (selectData) {
                            const sortDataConstract = [...selectData].sort((a: any, b: any) =>
                                a['hotelId'] > b['hotelId'] ? 1 : -1
                            );
                            dispatch(dataSlice.actions.deleteDobleItem(sortDataConstract));
                            console.log('третий');
                            setSortClick(0);
                        }
                    }
                }
            }
        } else {
            if (selectData) {
                const sortDataConstract = [...selectData].sort((a: any, b: any) =>
                    a[field] > b[field] ? 1 : -1
                );
                dispatch(dataSlice.actions.deleteDobleItem(sortDataConstract));
                console.log('не зашел в первый');
                setSortClick(1);
            }
        }
    };

    const handleSortNameClicl = (name: string) => {
        dispatch(dataSlice.actions.addSortName(name));
        console.log(sortName);
        handleSort(name);
    };

    return (
        <>
            <SortingButtonWrapper onClick={() => handleSortNameClicl(sortItemName)}>
                <SortingButtonText>{text}</SortingButtonText>
                <SortingButtonImg />
            </SortingButtonWrapper>
        </>
    );
};
