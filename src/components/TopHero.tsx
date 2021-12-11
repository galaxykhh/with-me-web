import React from "react";
import MobileImage from "../components/Universal/MobileImage";
import { ColumnBox } from "../element/columnBox";
import { RowBox } from "../element/rowBox";
import styled from "styled-components";


const TopHero: React.FC = () => {
    const imageCounts: string[] = ['1','2','4','5'];
    return (
        <Container>

            <ColumnBox style={{justifyContent: 'center', paddingTop: '60px'}}>
                <LogoText>WithMe</LogoText>
                <h3 style={{color: '#222f3e'}}>너와 나만의 공간, 위드미</h3>
            </ColumnBox>

            <RowBox reverse={false} style={{
                paddingTop: '50px',
                paddingBottom: '50px',
                justifyContent: 'center'
            }}>
                <StoreButton>PLAY STORE</StoreButton>
                <StoreButton>APP STORE</StoreButton>
            </RowBox>

            <RowBox reverse={false} style={{justifyContent: 'center'}} >
                {imageCounts.map(x => 
                    (<MobileImage
                        width='250px'
                        imageCount={x}
                        transform={true}
                    />)
                )}
            </RowBox>

        </Container>
    );
}

export default TopHero;

const Container = styled.div`
    height: 1000px;
    width: 100%;
    min-width: 900px;
    background-color: ${({ theme }) => theme.colors.white};
`;

const LogoText = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 100px;
    font-family: 'Kalam';
    text-align: start;
`;

const StoreButton = styled.button`
    all: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.black};
    width: 150px;
    height: 30px;
    border-radius: 30px;
    margin-right: 25px;
    padding: 20px;
    color: ${({ theme }) => theme.colors.white };
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }
    transition: 0.2s ease;
`;


