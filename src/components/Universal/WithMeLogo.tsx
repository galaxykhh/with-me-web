import React from "react";
import styled from "styled-components";

const WithMeLogo: React.FC = () => {
    return (
        <LogoText>WithMe</LogoText>
    );
}

export default WithMeLogo;

const LogoText = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 80px;
    font-family: 'Kalam';
    text-align: start;
`;