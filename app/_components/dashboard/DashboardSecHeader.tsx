import { FC, ReactNode } from 'react';
import IconRounded from '../shared/IconRounded';

type Props = {
    icon: ReactNode;
    title: string;
    main?: boolean;
};

const DashboardSecHeader: FC<Props> = ({ icon, title, main }: Props) => {
    return (
        <div className='mt-3 mb-6 flex items-center justify-between'>
            <div className='flex items-center justify-start'>
                {icon && main && (
                    <IconRounded icon={icon} className='mr-3' bg />
                )}
                <h1
                    className={`leading-tight ${main ? 'text-3xl' : 'text-2xl'}`}
                >
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default DashboardSecHeader;
