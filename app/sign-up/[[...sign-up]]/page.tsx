import AuthHelper from '@/app/_components/shared/AuthHelper';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
    return (
        <AuthHelper>
            <SignUp />
        </AuthHelper>
    );
}
