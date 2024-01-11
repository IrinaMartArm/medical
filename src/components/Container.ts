import styled from "styled-components";

type ContainerPropsType = {
	padding?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1140px;
    width: 100%;
    min-height: 100%;
    padding: ${props => props.padding || '20px'};
    margin: 0 auto;
`