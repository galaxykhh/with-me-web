import React from "react";
import TopHero from "../components/TopHero";
import Section, { ISection } from "../components/Universal/Section";
import { theme } from "../style/theme";

const sections: ISection[] = [
    {
        backgroundColor: theme.colors.lightPrimary,
        imageCount: '2',
        mobileImagePosition: 'right',
        titleText: '너와 나만의 다이어리.',
        firstLineText: '연인과의 시간이 기억에서 사라지지 않도록',
        secondLineText: '사진과 함께 하루를 기록해보세요',
    },
    {
        backgroundColor: theme.colors.primaryGrey,
        imageCount: '4',
        mobileImagePosition: 'left',
        titleText: '너와 나만의 일정.',
        firstLineText: '무엇을 할지 고민하는 시간마저 즐겁도록',
        secondLineText: '함께할 시간을 계획하고 공유해보세요',
    },
    {
        backgroundColor: theme.colors.primary,
        imageCount: '6',
        mobileImagePosition: 'right',
        titleText: '너와 나만의 공간이니까.',
        firstLineText: '우리 둘만의 공간을 다른 누군가 보지 못하도록',
        secondLineText: '자신만의 비밀번호를 설정해보세요',
    },
]

const BrowserPage: React.FC = () => {
    return (
        <>
            <TopHero />
            {sections.map(x => (
                <Section
                    backgroundColor={x.backgroundColor}
                    imageCount={x.imageCount}
                    mobileImagePosition={x.mobileImagePosition}
                    titleText={x.titleText}
                    firstLineText={x.firstLineText}
                    secondLineText={x.secondLineText}
                />
            ))}
        </>
    );
}

export default BrowserPage;