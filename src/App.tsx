import React from 'react';
import FifthSection from './sections/FifthSection';
import FourthSection from './sections/FourthSection';
import LastSection from './sections/LastSection';
import SecondSection from './sections/SecondSection';
import SixthSection from './sections/SixthSection';
import ThirdSection from './sections/ThirdSection';
import TopHero from './components/TopHero';

const App: React.FC = () => {
    return (
        <>
            <TopHero />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <LastSection />
            {/* <div style={{paddingBottom: '80px'}} /> */}
        </>
    );
}

export default App;