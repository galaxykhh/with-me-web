import React from "react";
import styled from "styled-components";
import { Text } from "../../element/text";
import { theme } from "../../style/theme";

interface IDownloadButton {
    text: string,
}

// TODO: 이미지로 교체
const DownloadButtons: React.FC = () => {
    return (
        <FlexBox>
            <DownloadButton text='애플 다운로드' />
            <DownloadButton text='구글 다운로드' />
        </FlexBox>
    );
}

const DownloadButton: React.FC<IDownloadButton> = (props) => {
    return (
        <Layout>
            <Text
                size='20px'
                color={theme.colors.white}
                fontWeight="normal"
            >
                {props.text}
            </Text>
        </Layout>
    );
}


export default DownloadButtons;

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 60px;
    border-radius: 30px;
    margin-right: 25px;
    padding: 20px;
    border: 1px white solid;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.purple};
    }
    transition: 0.2s ease;
`;

const FlexBox = styled.div`
    min-width: 500px;
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-top: 3rem;
`;