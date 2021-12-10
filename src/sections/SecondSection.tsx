import React from "react";
import styled from "styled-components";
import DiaryText from "../components/SecondSection/DiaryText";
import ConstraintBox from "../components/Universal/ContraintBox";
import FullFilledBox from "../components/Universal/FullFilledBox";
import MobileImage from "../components/Universal/MobileImage";
import { ColumnBox } from "../element/columnBox";
import { RowBox } from "../element/rowBox";
import { theme } from "../style/theme";

const SecondSection: React.FC = () => {
    return (
        <FullFilledBox backgroundColor={theme.colors.lightPrimary} >
            <ConstraintBox>
                    <RowBox reverse={true} >
                        <ColumnBox>
                            <DiaryText />
                        </ColumnBox>
                        <MobileImage imageCount='2'/>
                    </RowBox>
                </ConstraintBox>
        </FullFilledBox>
    );
}

export default SecondSection;