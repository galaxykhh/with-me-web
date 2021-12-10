import React from "react";
import styled from "styled-components";

interface IConstraintBox {
    maxWidth?: string;
}

const ConstraintBox: React.FC<IConstraintBox> = (props) => {
    return (
        <Layout maxWidth={props.maxWidth} >
            {props.children}
        </Layout>
    );
}

export default ConstraintBox;

const Layout = styled.div<{maxWidth?: string}>`
    max-width: ${props => props.maxWidth ?? '1000px'};
    min-width: 600px;
    width: 1200px;
    margin: 0px auto;
`;