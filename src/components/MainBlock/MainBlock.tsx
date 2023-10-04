import React from 'react';
import { MainBlockBlocksWrapper, MainBlockLeftBlock, MainBlockWrapper } from './MainBlock.style';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { SelectBlock } from './SelectBlock/SelectBlock';
import { InfoBlock } from './InfoBlock/InfoBlock';

export const MainBlock: React.FC = () => {
    return (
        <>
            <MainBlockWrapper>
                <MainBlockBlocksWrapper>
                    <MainBlockLeftBlock>
                        <SearchBlock></SearchBlock>
                        <SelectBlock></SelectBlock>
                    </MainBlockLeftBlock>
                    <InfoBlock />
                </MainBlockBlocksWrapper>
            </MainBlockWrapper>
        </>
    );
};
