import React from "react";
import styled from "styled-components";
import { Text } from "../../element/text";
import { theme } from "../../style/theme";

const CommentText: React.FC = () => {
    return (
        <Container>
            <Text
                size='60px'
                color={theme.colors.white}
                fontWeight={'bold'}
                bottomPadding="2rem"
            >
                다이어리 속 대화
            </Text>
            <Text
                size='30px'
                color={theme.colors.white}
                fontWeight={'normal'}
                bottomPadding="1rem"
                style={{letterSpacing: '-1px'}}
            >
                댓글로 나의 생각을 남겨보세요.
            </Text>
        </Container>
    );
}

export default CommentText;

const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;