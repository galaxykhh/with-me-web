import React from "react";
import CalendarViewText from "../components/FifthSection/CalendarViewText";
import ConstraintBox from "../components/Universal/ContraintBox";
import FullFilledBox from "../components/Universal/FullFilledBox";
import MobileImage from "../components/Universal/MobileImage";
import { ColumnBox } from "../element/columnBox";
import { RowBox } from "../element/rowBox";
import { theme } from "../style/theme";

const FifthSection: React.FC = () => {
    return (
        <FullFilledBox backgroundColor={theme.colors.primary} >
            <ConstraintBox>
                    <RowBox reverse={false} >
                        <ColumnBox>
                            <CalendarViewText />
                        </ColumnBox>
                        <MobileImage imageCount='5'/>
                    </RowBox>
                </ConstraintBox>
        </FullFilledBox>
    );
}

export default FifthSection;