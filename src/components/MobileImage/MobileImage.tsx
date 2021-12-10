import React from "react";
import styled from "styled-components";

interface IMobileImage {
    imageCount: string;
}

const MobileImage: React.FC<IMobileImage> = (props) => {
    return (
        <Image src={`images/with-me-${props.imageCount}.png`} />
    );
}

export default MobileImage;

const Image = styled.img`
    width: 450px;
    height: auto;
`;