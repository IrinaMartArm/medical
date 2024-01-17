import styled from "styled-components";

type WrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    padding?: string
    maxWidth?: string
}

export const Wrapper = styled.div<WrapperPropsType>`
    display: flex;
    width: 100%;
    max-width: ${props=>props.maxWidth || '1200px'};
    flex-direction: ${props=>props.direction || 'row'};
    justify-content:  ${props=>props.justify || 'flex-start'};
    align-items: ${props=>props.align || 'stretch'};
    flex-wrap: ${props=>props.wrap || 'nowrap'};
    height: 100%;
    gap:${props=>props.gap || '0px'};
    padding: ${props => props.padding || '20px'};
    margin: 0 auto;
    //border: 1px solid red;
`