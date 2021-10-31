import React from 'react';
import Banner from '../Banner/Banner';
import Guide from '../Guide/Guide';
import Introduction from '../Introduction/Introduction';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div>

            <div>
                <Banner></Banner>
            </div>

            <div className="container" id="places">
                <Places></Places>
            </div>

            <div>
                <Introduction></Introduction>
            </div>

            <div className="container">
                <Guide></Guide>
            </div>
        </div>
    );
};

export default Home;