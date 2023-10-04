import styled from '@emotion/styled';

export const SearchBlockWrapper = styled('div')(() => ({
    width: '100%',
    height: '346px',
    borderRadius: '16px',
    background: '#FFF',
    boxShadow: '0px 4px 33px 0px rgba(0, 0, 0, 0.04)',
    padding: '32px',
}));

export const SearchBlockContentWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    justifyContent: 'space-between',
}));

export const SearchBlockInputWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    marginBottom: '16px',
}));
