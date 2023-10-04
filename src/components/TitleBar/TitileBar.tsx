import React from 'react';
import {
    TiteleBarWrapper,
    TitleBarBlockWrapper,
    TitleBarExitImg,
    TitleBarHeader,
    TtileBarExit,
    TtileBarExitText,
} from './TitleBar.style';
import { Navigate, useNavigate } from 'react-router';

export const TitileBar: React.FC = () => {
    const navigate = useNavigate();

    const handleRouteMain = () => {
        return navigate('/');
    };

    return (
        <>
            <TiteleBarWrapper>
                <TitleBarBlockWrapper>
                    <TitleBarHeader>Simple Hotel Check</TitleBarHeader>
                    <TtileBarExit onClick={handleRouteMain}>
                        <TtileBarExitText>Выход</TtileBarExitText>
                        <TitleBarExitImg></TitleBarExitImg>
                    </TtileBarExit>
                </TitleBarBlockWrapper>
            </TiteleBarWrapper>
        </>
    );
};
