import AuthHelper from '@/app/_components/shared/AuthHelper';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <AuthHelper>
            <SignIn />
        </AuthHelper>
    );
}
