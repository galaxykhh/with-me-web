import React from "react";
import styled from "styled-components";
import { Text } from "../../element/text";
import { theme } from "../../style/theme";

const PasswordText: React.FC = () => {
    return (
        <Container>
            <Text
                size='60px'
                color={theme.colors.black}
                fontWeight={'bold'}
                bottomPadding="1rem"
            >
                오직 너와 나만의
            </Text>
            <Text
                size='60px'
                color={theme.colors.black}
                fontWeight={'bold'}
                bottomPadding="2rem"
            >
                공간이니까.
            </Text>
            <Text
                size='30px'
                color={theme.colors.black}
                fontWeight={'normal'}
                bottomPadding="1rem"
                style={{letterSpacing: '-1px'}}
            >
                나만의 비밀번호를 설정해보세요
            </Text>
        </Container>
    );
}

export default PasswordText;

const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;