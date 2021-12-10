import React from "react";
import styled from "styled-components";

interface IFullFilledBox {
    backgroundColor: string,
}

const FullFilledBox: React.FC<IFullFilledBox> = (props) => {
    return (
        <Layout style={{backgroundColor: props.backgroundColor}} >{props.children}</Layout>
    );
}

export default FullFilledBox;

const Layout = styled.div`
    height: 100vh;
    width: 100%;
`;