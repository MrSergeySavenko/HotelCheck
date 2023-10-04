import styled from '@emotion/styled';

export const InputBlockWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '16px',
}));

interface SITextProp {
    wrong: boolean;
}

export const InputBlockTitle = styled('p')(({ wrong }: SITextProp) => ({
    color: wrong ? '#EB1717' : '#424242',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    marginBottom: '7px',
}));

interface SIProp {
    date: boolean;
    wrong: boolean;
}

export const InputBlockInput = styled('input')(({ date, wrong }: SIProp) => ({
    borderRadius: '4px',
    border: wrong ? '1px solid #EB1717' : '1px solid #C9CACC',
    background: '#FFF',
    color: '#424242',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '20px',
    padding: date ? '11px 0 11px 15px' : '15px',
    paddingRight: '16px',

    '&::placeholder': {
        color: '#424242',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '20px',
    },

    '&::-webkit-calendar-picker-indicator': {
        backgroundImage: 'url("/calendar.png")',
        width: '24px',
        height: '24px',
    },
}));
