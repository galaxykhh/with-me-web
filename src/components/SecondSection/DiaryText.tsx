import React from "react";
import styled from "styled-components";
import { Text } from "../../element/text";
import { theme } from "../../style/theme";

const DiaryText: React.FC = () => {
    return (
        <Container>
            <Text
                size='60px'
                color={theme.colors.black}
                fontWeight={'bold'}
                bottomPadding="2rem"
            >
                너와 나만의 다이어리.
            </Text>
            <Text
                size='30px'
                color={theme.colors.black}
                fontWeight={'normal'}
                bottomPadding="1rem"
                style={{letterSpacing: '-1px'}}
            >
                연인과의 일상을 사진과 함께 남겨보세요
            </Text>
            <Text
                size='30px'
                color={theme.colors.black}
                fontWeight={'normal'}
                style={{letterSpacing: '-1px'}}
            >
                오늘을 기억할 수 있게
            </Text>
        </Container>
    );
}

export default DiaryText;

const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;