import { prisma } from '@/app/_db/prisma-init';

export const getEmails = async ({
    newsLetterOwnerId,
  }: {
    newsLetterOwnerId: string;
  }) => {
    try {
      const emails = await prisma.email.findFirst({ 
        where: {
          newLetterOwnerId: newsLetterOwnerId
        }
       });
      return emails;
    } catch (error) {
      console.log(error);
    }
  };