import React from 'react';
import { ButtonWrapper } from './Button.style';

interface IProp {
    text: string;
    onClickFunk: () => void;
}

export const Button: React.FC<IProp> = ({ text, onClickFunk }) => {
    return (
        <>
            <ButtonWrapper onClick={() => onClickFunk()}>{text}</ButtonWrapper>
        </>
    );
};
