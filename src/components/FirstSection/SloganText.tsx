import React from "react";
import styled from "styled-components";
import { Text } from "../../element/text";
import { theme } from "../../style/theme";

const SloganText: React.FC = () => {
    return (
        <Container>
            <Text
                size='50px'
                color={theme.colors.white}
                fontWeight={'bold'}
                bottomPadding="1rem"
            >
                너와 나만의 공간.
            </Text>
            <Text
                size='65px'
                color={theme.colors.white}
                fontWeight={'1000'}
            >
                위드미
            </Text>
        </Container>
    );
}

export default SloganText;

const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;