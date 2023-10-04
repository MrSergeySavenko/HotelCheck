import styled from '@emotion/styled';

export const InfoBlockWrapper = styled('div')(() => ({
    width: '600px',
    height: '806px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    background: '#FFF',
    boxShadow: '0px 4px 33px 0px rgba(0, 0, 0, 0.04)',
    padding: '48px 32px',
}));

export const InfoBlockContent = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
}));

export const InfoBlockContentTitle = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: '100%',
    marginBottom: '28px',
}));

export const InfoBlockHotelLocation = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}));

export const InfoBlockHotelLocationText = styled('p')(() => ({
    color: '#424242',
    fontFamily: 'Roboto',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',

    '&:first-child': {
        marginRight: '20px',
    },
}));

export const InfoBlockArrow = styled('div')(() => ({
    width: '10px',
    height: '20px',
    backgroundImage: 'url("/GrayArrow.svg")',
    marginRight: '20px',
}));

export const InfoBlockData = styled('p')(() => ({
    color: '#41522E',
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
}));

export const InfoBlockImgSrollbar = styled('div')(() => ({
    maxWidth: '600px',
    height: '149px',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '28px',
    overflow: 'auto',
}));

interface IImgProp {
    imgSrc: string;
}

export const InfoBlockImgItem = styled('div')(({ imgSrc }: IImgProp) => ({
    height: '149px',
    width: '164px',
    borderRadius: '10px',
    background: 'lightgray 50% / cover no-repeat, #C4C4C4',
    backgroundImage: `url(${imgSrc})`,
    boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.15)',
    marginRight: '12px',
}));

export const InfoBlockItemScrollBar = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

export const InfoBlockItemCounterWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '12px',
}));

export const InfoBlockItemCounterText = styled('p')(() => ({
    color: '#424242',
    fontFamily: 'Roboto',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '22px',
    letterSpacing: '-0.408px',
    marginLeft: '8px',
}));

export const InfoBlockItemBar = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '529px',
    overflow: 'auto',
}));
