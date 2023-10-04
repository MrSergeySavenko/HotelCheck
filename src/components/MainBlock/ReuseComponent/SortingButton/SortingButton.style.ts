import styled from '@emotion/styled';

export const SortingButtonWrapper = styled('div')(() => ({
    padding: '4px 8px',
    borderRadius: '4px',
    border: '1px solid #41522E',
    background: '#FFF',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: '8px',
}));

export const SortingButtonText = styled('p')(() => ({
    color: '#41522E',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    letterSpacing: '-0.408px',
    marginRight: '4px',
}));

export const SortingButtonImg = styled('div')(() => ({
    width: '18px',
    height: '18px',
    backgroundImage: "url('/Select.svg')",
}));
