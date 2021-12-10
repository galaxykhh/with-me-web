import React from "react";
import styled from "styled-components";
import CommentText from "../components/ThirdSection/CommentText";
import ConstraintBox from "../components/Universal/ContraintBox";
import FullFilledBox from "../components/Universal/FullFilledBox";
import MobileImage from "../components/Universal/MobileImage";
import { ColumnBox } from "../element/columnBox";
import { RowBox } from "../element/rowBox";
import { theme } from "../style/theme";

const ThirdSection: React.FC = () => {
    return (
        <FullFilledBox backgroundColor={theme.colors.primary} >
            <ConstraintBox>
                    <RowBox reverse={false} >
                        <ColumnBox>
                            <CommentText />
                        </ColumnBox>
                        <MobileImage imageCount='3'/>
                    </RowBox>
                </ConstraintBox>
        </FullFilledBox>
    );
}

export default ThirdSection;