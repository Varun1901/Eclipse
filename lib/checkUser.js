import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  try {
    const name = `${user.firstName} ${user.lastName}`;
    
    const loggedInUser = await db.user.upsert({
      where: {
        clerkUserId: user.id,
      },
      update: {}, // or update fields if you want
      create: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return loggedInUser;

  } catch (error) {
    console.log("CheckUser Error:", error.message);
    return null;
  }
};
