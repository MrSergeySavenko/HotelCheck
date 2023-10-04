import styled from '@emotion/styled';

export const SSelectBlockWrapper = styled('div')(() => ({
    width: '100%',
    height: '408px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    background: '#FFF',
    boxShadow: '0px 4px 33px 0px rgba(0, 0, 0, 0.04)',
    padding: '32px',
}));

export const SSelectBlockTitle = styled('div')(() => ({
    color: '#424242',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    marginBottom: '32px',
}));

export const SSelectBlockSortingWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '16px',
}));

export const SSelectBlockItemWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxHeight: '321px',
    overflow: 'auto',
}));
