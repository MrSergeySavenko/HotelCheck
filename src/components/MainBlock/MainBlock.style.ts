import styled from '@emotion/styled';

export const MainBlockWrapper = styled('div')(() => ({
    maxWidth: '1048px',
    margin: '0 auto',
}));

export const MainBlockBlocksWrapper = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

export const MainBlockLeftBlock = styled('div')(() => ({
    width: '296px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));
