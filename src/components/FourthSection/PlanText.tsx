import React from "react";
import styled from "styled-components";
import { Text } from "../../element/text";
import { theme } from "../../style/theme";

const PlanText: React.FC = () => {
    return (
        <Container>
            <Text
                size='60px'
                color={theme.colors.black}
                fontWeight={'bold'}
                bottomPadding="2rem"
            >
                너와 나만의 일정.
            </Text>
            <Text
                size='30px'
                color={theme.colors.black}
                fontWeight={'normal'}
                bottomPadding="1rem"
                style={{letterSpacing: '-1px'}}
            >
                연인과 함께 일정을 나눠보세요.
            </Text>
        </Container>
    );
}

export default PlanText;

const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;