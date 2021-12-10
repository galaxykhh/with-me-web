import React from "react";
import styled from "styled-components";
import WithMeLogo from "../Universal/WithMeLogo";

const Header: React.FC = () => {
    return (
        <FlexBox>
            <WithMeLogo />
        </FlexBox>
    );
}

export default Header;

const FlexBox = styled.div`
    max-width: 1400px;
    min-width: 600px;
    width: 1200px;
    height: 60px;
    text-align: start;
    /* margin-bottom: 50px; */
`;
