import styled from "styled-components";

type ContainerPropsType = {
	padding?: string
	display?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1500px;
    width: 100%;
    min-height: 100%;
    padding: ${props => props.padding || '20px'};
  	display: ${props => props.display || 'inline-block'};
    margin: 0 auto;
`