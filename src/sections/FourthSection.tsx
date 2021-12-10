import React from "react";
import PlanText from "../components/FourthSection/PlanText";
import ConstraintBox from "../components/Universal/ContraintBox";
import FullFilledBox from "../components/Universal/FullFilledBox";
import MobileImage from "../components/Universal/MobileImage";
import { ColumnBox } from "../element/columnBox";
import { RowBox } from "../element/rowBox";
import { theme } from "../style/theme";

const FourthSection: React.FC = () => {
    return (
        <FullFilledBox backgroundColor={theme.colors.lightPrimary} >
            <ConstraintBox>
                    <RowBox reverse={true} >
                        <ColumnBox>
                            <PlanText />
                        </ColumnBox>
                        <MobileImage imageCount='4'/>
                    </RowBox>
                </ConstraintBox>
        </FullFilledBox>
    );
}

export default FourthSection;