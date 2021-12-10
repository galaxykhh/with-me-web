import styled from "styled-components";

interface IText {
    size: string;
    color: string;
    fontWeight: string;
    bottomPadding?: string;
}

export const Text = styled.div<IText>`
    font-size: ${props => props.size};
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    padding-bottom: ${props => props.bottomPadding};
    white-space: nowrap;
    font-family: 'Nanum Gothic';
`;