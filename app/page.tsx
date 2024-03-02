import { NextPage } from 'next';
import HeroWrapper from './_components/hero/HeroWrapper';
import HeroServices from './_components/hero/HeroServices';

const Homepage: NextPage = () => {
    return (
        <>
            <HeroWrapper />
            <HeroServices />
        </>
    );
};

export default Homepage;
