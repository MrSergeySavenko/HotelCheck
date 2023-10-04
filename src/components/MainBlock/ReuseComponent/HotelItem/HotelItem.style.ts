import styled from '@emotion/styled';

export const SHoteItemWrapper = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: '16px',
    paddingLeft: '0',
}));

export const SHotelItemSpan = styled('div')(() => ({
    width: '100%',
    height: '1px',
    borderRadius: '8px',
    background: 'rgba(135, 135, 135, 0.20)',
    flexShrink: '0',
    alignSelf: 'stretch',
}));

export interface SIHouseProp {
    active: boolean;
}

export const SHotelItemHomeWrapper = styled('div')(({ active }: SIHouseProp) => ({
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(65, 82, 46, 0.05)',
    display: active ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '24px',
}));

export const SHotelItemHomeImg = styled('div')(() => ({
    width: '35px',
    height: '35px',
    backgroundImage: "url('/HouseGreen.svg')",
    marginTop: '-3px',
}));

export const SHotelItemInfoHotelWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
}));

interface IInsoBlock {
    right: boolean;
}

export const SHotelItemInfoBlock = styled('div')(({ right }: IInsoBlock) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: right ? 'end' : 'start',
}));

export const SHotelItemHeader = styled('p')(() => ({
    color: '#424242',
    fontFamily: 'Roboto',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '22px',
    letterSpacing: '-0.408px',
}));

export const SHotelItemDateWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItem: 'center',
    marginBottom: '3px',
}));

export const SHotelItemDate = styled('div')(() => ({
    color: '#878787',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
    letterSpacing: '-0.408px',
    marginRight: '10px',
}));

export const SHotelItemGraySpan = styled('div')(() => ({
    width: '9px',
    height: '1px',
    borderRadius: '2px',
    background: '#C4C4C4',
    display: 'flex',
    marginTop: '10px',
    marginRight: '10px',
}));

export const SHotelItemRatingWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
}));

export const SHotelItemGrayStar = styled('div')(() => ({
    height: '17px',
    width: '17px',
    backgroundImage: "url('/GrayStar.png')",
    backgroundSize: 'cover',
    marginRight: '5px',
}));

export const SHotelItemGoldStar = styled('div')(() => ({
    width: '17px',
    height: '17px',
    backgroundImage: "url('/GoldStar.png')",
    backgroundSize: 'cover',
    marginRight: '5px',
}));

interface IItemHart {
    isActive: boolean;
}

export const SHotelItemHart = styled('div')(({ isActive }: IItemHart) => ({
    width: '23px',
    height: '20px',
    backgroundImage: isActive ? "url('/ActiveHart.svg')" : "url('/Hart.svg')",
    marginBottom: '22px',
    marginRight: '3px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}));

export const SHotelItemPriceWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
}));

export const SHotelItemPriceName = styled('p')(() => ({
    color: '#878787',
    fontfamily: 'Roboto',
    fontSize: '11px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '22px',
    letterSpacing: '-0.408px',
    marginRight: '8px',
}));

export const SHotelItemPriceText = styled('p')(() => ({
    color: '#424242',
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
    letterSpacing: '-0.408px',
}));
