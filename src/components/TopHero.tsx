import React from "react";
import MobileImage from "../components/Universal/MobileImage";
import ConstraintBox from "../components/Universal/ContraintBox";
import { ColumnBox } from "../element/columnBox";
import { RowBox } from "../element/rowBox";
import FullFilledBox from "../components/Universal/FullFilledBox";
import { theme } from "../style/theme";
import SloganText from "./FirstSection/SloganText";
import DownloadButtons from "./FirstSection/DownloadButton";
import styled from "styled-components";
import WithMeLogo from "./Universal/WithMeLogo";


const TopHero: React.FC = () => {
    const imageCounts: string[] = ['1','2','3','4','5','6'];
    return (
        <Layout>

            <ColumnBox style={{justifyContent: 'center', paddingTop: '60px'}}>
                <LogoText>WithMe</LogoText>
                <h2 style={{color: '#222f3e'}}>너와 나만의 공간, 위드미</h2>
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
                {imageCounts.map(x => {
                    if (x != '3' && x != '6') {
                        return <MobileImage
                            width='250px'
                            imageCount={x}
                            transform={true}
                        />
                    }
                })}
            </RowBox>

        </Layout>
    );
}

export default TopHero;

const Layout = styled.div`
    height: 1000px;
    width: 100%;
    min-width: 900px;
    background-color: ${({ theme }) => theme.colors.white};
`;

const LogoText = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 100px;
    font-family: 'Kalam';
    text-align: start;
`;

const StoreButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    width: 180px;
    height: 60px;
    border-radius: 30px;
    margin-right: 25px;
    padding: 20px;
    border: 1px black solid;
    color: ${({ theme }) => theme.colors.black };
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }
    transition: 0.2s ease;
`;


