import React from "react";
import styled from "styled-components";
import { ColumnBox } from "../../elements/columnBox";
import { RowBox } from "../../elements/rowBox";
import MobileImage from "./MobileImage";

type MobileImagePosition = 'left' | 'right';

export interface ISection {
    backgroundColor: string,
    imageCount: string,
    mobileImagePosition: MobileImagePosition,
    titleText: string,
    firstLineText: string,
    secondLineText: string,
}

const Section = (props: ISection) => {
    return (
        <Container style={{backgroundColor: props.backgroundColor}}>
            <RowBox
                reverse={props.mobileImagePosition === 'left' ? true : false}
                style={{
                    width: '1100px',
                    minWidth: '900px',       
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    
                }}
            >
                <ColumnBox style={{alignItems: 'start'}} >
                    <h2 style={{paddingBottom: '30px'}}
                    >
                        {props.titleText}
                    </h2>
                    <h3>{props.firstLineText}</h3>
                    <h3>{props.secondLineText}</h3>
                </ColumnBox>

                <MobileImage
                    imageCount={props.imageCount}
                    width='400px'
                />
            </RowBox>
        </Container>
    );
}

export default Section;

const Container = styled.div`
    width: 100%;
    height: 800px;
    min-width: 900px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;