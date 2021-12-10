import React from "react";
import styled from "styled-components";
import { Text } from "../../element/text";
import { theme } from "../../style/theme";

const CalendarViewText: React.FC = () => {
    return (
        <Container>
            <Text
                size='60px'
                color={theme.colors.white}
                fontWeight={'bold'}
                bottomPadding="2rem"
            >
                한 눈에도 볼 수 있게
            </Text>
            <Text
                size='30px'
                color={theme.colors.white}
                fontWeight={'normal'}
                bottomPadding="1rem"
                style={{letterSpacing: '-1px'}}
            >
                캘린더뷰로 한 눈에 일정을 확인해보세요
            </Text>
        </Container>
    );
}

export default CalendarViewText;

const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;