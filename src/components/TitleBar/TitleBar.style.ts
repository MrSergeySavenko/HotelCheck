import styled from '@emotion/styled';
import { url } from 'inspector';

export const TiteleBarWrapper = styled('div')(() => ({
    margin: '0 auto',
    width: '100%',
    padding: '32px 0',
}));

export const TitleBarBlockWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

export const TitleBarHeader = styled('p')(() => ({
    color: '#424242',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
}));

export const TtileBarExit = styled('div')(() => ({
    width: '83px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

export const TtileBarExitText = styled('p')(() => ({
    color: '#41522E',
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    letterSpacing: '-0.408px',
}));

export const TitleBarExitImg = styled('div')(() => ({
    width: '24px',
    height: '24px',
    backgroundImage: "url('/Exit.svg')",
}));
