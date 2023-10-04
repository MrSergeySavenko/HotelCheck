import React, { useEffect, useState } from 'react';
import {
    SButtonWrapper,
    SInputWrapper,
    SLayoutPageWrapper,
    SLayoutText,
    SLayoutWrapper,
    SText,
} from './LayoutPage.style';
import { InputBlock } from '../../components/MainBlock/ReuseComponent/InputBlock/InputBlock';
import { Button } from '../../components/MainBlock/ReuseComponent/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataLow } from '../../__data__/actions/hotelData.actions';
import { RootState } from '../../__data__/store';
import { Navigate } from 'react-router';

export const LayoutPage: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.hotelData);

    const [login, setLogin] = useState('');
    const [loginField, setLoginField] = useState(false);
    const [pass, setPass] = useState('');
    const [passField, setPassField] = useState(false);

    const [formValid, setFormValid] = useState(false);

    const reEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const reNumber = /^\d+$/;

    const dispatch = useDispatch();

    useEffect(() => {
        if (loginField && passField) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [loginField, passField]);

    const blurHandle = (e: any) => {
        switch (e.target.name) {
            case 'login':
                setLoginField(true);
                console.log('login');
                break;
            case 'pass':
                setPassField(true);
                console.log('pass');
                break;
        }
    };

    const getSelfInfo = () => {
        dispatch(fetchDataLow() as any);
        console.log('click');
    };

    const handleRouteMain = () => {
        if (data) {
            return <Navigate to={'/main'} />;
        }
    };

    return (
        <>
            <SLayoutPageWrapper>
                <SLayoutWrapper>
                    <SLayoutText>Simple Hotel Check</SLayoutText>
                    <SInputWrapper>
                        <InputBlock
                            placeholderText=''
                            titleText='Логин'
                            getValue={login}
                            setGetValue={setLogin}
                            type='text'
                            bDate={false}
                            name='login'
                            onBlur={(e: any) => blurHandle(e)}
                            wrong={formValid}
                        />
                        {login === '' ? (
                            loginField ? (
                                <SText>Это поле не может быть пустым</SText>
                            ) : null
                        ) : !reEmail.test(String(login)) ? (
                            <SText>Это поле введено не верно</SText>
                        ) : null}
                        <InputBlock
                            placeholderText=''
                            titleText='Пароль'
                            getValue={pass}
                            setGetValue={setPass}
                            type='text'
                            bDate={false}
                            name='pass'
                            onBlur={(e: string) => blurHandle(e)}
                            wrong={formValid}
                        />
                        {pass === '' ? (
                            passField ? (
                                <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                    Это поле не может быть пустым
                                </SText>
                            ) : null
                        ) : reNumber.test(String(pass)) ? (
                            <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                Это поле введено не верно
                            </SText>
                        ) : null}
                    </SInputWrapper>
                    <SButtonWrapper>
                        <Button text='Войти' onClickFunk={getSelfInfo} />
                    </SButtonWrapper>
                </SLayoutWrapper>
                {handleRouteMain()}
            </SLayoutPageWrapper>
        </>
    );
};
