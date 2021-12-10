import React from "react";
import styled from "styled-components";

interface IBlock {
    maxWidth?: string;
}

const ConstraintBlock: React.FC<IBlock> = (props) => {
    return (
        <Layout maxWidth={props.maxWidth} >
            {props.children}
        </Layout>
    );
}

export default ConstraintBlock;

const Layout = styled.div<{maxWidth?: string}>`
    max-width: ${props => props.maxWidth ?? '1200px'};
    min-width: 600px;
    width: 1200px;
    margin: 0px auto;
`;