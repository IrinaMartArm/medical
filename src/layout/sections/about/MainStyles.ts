import styled from 'styled-components';
import { Theme } from '../../../style/Theme';
import { font } from '../../../style/Common';

const StyledMain = styled.section`
    //min-height: 100vh;
    display: flex;
    align-items: center;
`

const Hello = styled.span`   
    letter-spacing: 2.5px;
    ${font({weight: 700, fmax: 50, fmin: 36})};

    span {
        white-space: nowrap;
    }
`

const MainTitle = styled.h1`  
    font-weight: 400;
    margin: 10px 0;
    ${font({weight: 400, fmax: 36, fmin: 20})}

    span {
        position: relative;
        z-index: 2;
        &::before {
            content: '';
            display: inline-block;
            position: absolute;
            width: 90%;
            height: 7px;
            /* left: 30px; */
            bottom: 10px;
            z-index: -1;
            background-color: ${Theme.colors.accent}
        }
    }

    @media ${Theme.media.mobile} {
        margin: 15px 0;
    }
`

const Text = styled.p`
    ${font({weight: 700, fmax: 20, fmin: 16})};
` 

const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px; 
    padding: 15px;
    width: 100%;
    max-width: 400px;
    height: 400px;
    border-radius: 3px;
    border: 1px solid ${Theme.colors.border};
`




export const S = {
    StyledMain,
    MainTitle,
    Description,
    Hello,
    Text
}