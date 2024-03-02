import { NextPage } from 'next';
import HeroWrapper from './_components/hero/HeroWrapper';
import HeroServices from './_components/hero/HeroServices';
import AuthHelper from './_components/shared/AuthHelper';

const Homepage: NextPage = () => {
    return (
        <>
            <HeroWrapper />
            <AuthHelper>
                <HeroServices />
            </AuthHelper>
        </>
    );
};

export default Homepage;
