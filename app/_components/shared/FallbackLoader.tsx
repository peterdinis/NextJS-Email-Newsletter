import { Spinner } from '@nextui-org/react';
import { FC } from 'react';

const FallbackLoader: FC = () => {
    return <Spinner color='primary' />;
};

export default FallbackLoader;
