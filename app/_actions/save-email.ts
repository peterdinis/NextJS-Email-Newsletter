'use server';

import { prisma } from '@/app/_db/prisma-init';

export const saveEmail = async ({
    title,
    content,
    newsLetterOwnerId,
}: {
    title: string;
    content: string;
    newsLetterOwnerId: string;
}) => {
    try {
        const email = await prisma.email.findFirst({
            where: {
                title,
                newLetterOwnerId: newsLetterOwnerId,
            },
        });

        if (email) {
            await prisma.email.update({
                where: {
                    id: email.id,
                },
                data: {
                    content,
                },
            });
            return { message: 'Email updated successfully!' };
        } else {
            await prisma.email.create({
                data: {
                    title,
                    content,
                    newLetterOwnerId: newsLetterOwnerId,
                },
            });
            return { message: 'Email saved successfully!' };
        }
    } catch (error) {
        console.log(error);
    }
};
