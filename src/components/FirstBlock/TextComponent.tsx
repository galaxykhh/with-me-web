import React from "react";
import styled from "styled-components";
import { Text } from "../../element/text";
import { theme } from "../../style/theme";

const TextComponent: React.FC = () => {
    return (
        <Container>
            <Text
                size='65px'
                color={theme.colors.white}
                fontWeight={'bold'}
                bottomPadding="0.5em"
            >
                너와 나만의 공간.
            </Text>
            <Text
                size='65px'
                color={theme.colors.white}
                fontWeight={'bold'}
            >
                위드미
            </Text>
        </Container>
    );
}

export default TextComponent;

const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;