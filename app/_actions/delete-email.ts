import { prisma } from '@/app/_db/prisma-init';

export const deleteEmail = async ({ emailId }: { emailId: string }) => {
    try {
        await prisma.email.delete({
            where: {
                id: emailId,
            },
        });
        return {
            message: 'Email deleted',
        };
    } catch (error) {
        return {
            message: 'Something went wrong',
        };
    }
};
