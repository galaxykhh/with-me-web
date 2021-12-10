import styled from "styled-components";

export const RowBox = styled.div<{reverse: boolean}>`
    display: flex;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    justify-content: space-between;
    align-items: center;
`;