import React from "react";
import styled from "styled-components";

const WithMeLogo: React.FC = () => {
    return (
        <LogoText>WithMe</LogoText>
    );
}

export default WithMeLogo;

const LogoText = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-family: 'Kalam';
    text-align: start;
`;