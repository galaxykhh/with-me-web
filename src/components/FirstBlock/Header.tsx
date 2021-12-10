import React from "react";
import styled from "styled-components";
import WithMeLogo from "./WithMeLogo";

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
    position: absolute;
    text-align: start;
    top: 30px;
    /* margin-bottom: 50px; */
`;
