import React from "react";
import styled from "styled-components";

interface IMobileImage {
    imageCount: string;
    width?: string;
    transform?: boolean;
}

const MobileImage: React.FC<IMobileImage> = (props) => {
    return (
        <Image
            src={`images/with-me-${props.imageCount}.png`}
            style={{width: props.width}}
            transform={props.transform ?? false}
        />
    );
}

export default MobileImage;

const Image = styled.img<{transform: boolean}>`
    width: 400px;
    height: auto;
    transition: 0.2s ease;
    &:hover {
        transform: ${props => props.transform ? 'translateY(-30px)' : 'translateY(0px)'};
        
    }
`;