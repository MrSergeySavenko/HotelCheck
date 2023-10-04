import styled from '@emotion/styled';

export const SLayoutPageWrapper = styled('div')(() => ({
    width: '100%',
    height: '100vh',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('/BackgroundImg.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backdropFilter: 'blur(10px)',
    // background: 'rgba(255, 255, 255, 0.60)',
}));

export const SLayoutWrapper = styled('div')(() => ({
    width: '345px',
    height: '318px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
    background: '#FFF',
    boxShadow: '0px 4px 33px 0px rgba(0, 0, 0, 0.04)',
}));

export const SLayoutText = styled('p')(() => ({
    color: '#424242',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    marginBottom: '32px',
}));

export const SInputWrapper = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '32px',
}));

export const SButtonWrapper = styled('div')(() => ({
    width: '100%',
}));

export const SText = styled('p')(() => ({
    color: '#EB1717',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 'normal',
    marginTop: '7px',
}));
