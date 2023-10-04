import React, { useState } from 'react';
import { InputBlockInput, InputBlockTitle, InputBlockWrapper } from './InputBlock.style';

interface IProp {
    placeholderText: string;
    titleText: string;
    getValue: string;
    setGetValue: (arr: string) => void;
    type: string;
    bDate: boolean;
    name: string;
    onBlur?: (arr: string) => void;
    wrong: boolean;
}

export const InputBlock: React.FC<IProp> = ({
    placeholderText,
    titleText,
    getValue,
    setGetValue,
    type,
    bDate,
    wrong,
}) => {
    return (
        <>
            <InputBlockWrapper>
                <InputBlockTitle wrong={wrong}>{titleText}</InputBlockTitle>
                <InputBlockInput
                    placeholder={placeholderText}
                    value={getValue}
                    type={type}
                    date={bDate}
                    onChange={(e) => setGetValue(e.target.value)}
                    wrong={wrong}
                />
            </InputBlockWrapper>
        </>
    );
};
