import React from "react";
import PasswordText from "../components/SixthSection/PasswordText";
import ConstraintBox from "../components/Universal/ContraintBox";
import FullFilledBox from "../components/Universal/FullFilledBox";
import MobileImage from "../components/Universal/MobileImage";
import { ColumnBox } from "../element/columnBox";
import { RowBox } from "../element/rowBox";
import { theme } from "../style/theme";

const SixthSection: React.FC = () => {
    return (
        <FullFilledBox backgroundColor={theme.colors.lightPrimary} >
            <ConstraintBox>
                    <RowBox reverse={true} >
                        <ColumnBox>
                            <PasswordText />
                        </ColumnBox>
                        <MobileImage imageCount='6'/>
                    </RowBox>
                </ConstraintBox>
        </FullFilledBox>
    );
}

export default SixthSection;