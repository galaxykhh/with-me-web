import React from "react";
import styled from "styled-components";
import DownloadButtons from "../../components/FirstBlock/DownloadButton";
import Header from "../../components/FirstBlock/Header";
import TextComponent from "../../components/FirstBlock/TextComponent";
import MobileImage from "../../components/MobileImage/MobileImage";
import ConstraintBlock from "../../components/Universal/ContraintBlock";

const FirstBlock: React.FC = () => {
    return (
        <Container>
            <ConstraintBlock>
                <Header />
                <ConstraintBlock maxWidth='1000px'>
                <RowBox>
                    <ColumnBox>
                        <TextComponent />
                        <DownloadButtons />
                    </ColumnBox>
                    <MobileImage imageCount='1'/>
                </RowBox>
                </ConstraintBlock>
            </ConstraintBlock>
        </Container>
    );
}

export default FirstBlock;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ColumnBox = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;