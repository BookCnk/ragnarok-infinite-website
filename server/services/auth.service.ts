import "server-only";

import { verifyPassword } from "@/server/crypto";
import {
  DEMO_USER_ID,
  demoCredentialsMatch,
  reportDevelopmentFallback,
} from "@/server/demo";
import { getPrisma } from "@/server/prisma";

export async function authenticateUser(email: string, password: string) {
  try {
    const user = await getPrisma().user.findUnique({
      where: { email: email.trim().toLowerCase() },
      select: { id: true, passwordHash: true },
    });

    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      return null;
    }

    return { userId: user.id };
  } catch (error) {
    reportDevelopmentFallback(error);
    return demoCredentialsMatch(email, password) ? { userId: DEMO_USER_ID } : null;
  }
}

export async function registerUser(email: string, password: string, name?: string) {
  try {
    const existing = await getPrisma().user.findUnique({
      where: { email: email.trim().toLowerCase() },
      select: { id: true },
    });

    if (existing) {
      return { error: "อีเมลนี้ถูกใช้งานในระบบแล้ว" };
    }

    const { hashPassword } = await import("@/server/crypto");
    const passwordHash = await hashPassword(password);

    const user = await getPrisma().user.create({
      data: {
        email: email.trim().toLowerCase(),
        passwordHash,
        name: name?.trim() || null,
      },
      select: { id: true },
    });

    return { session: { userId: user.id } };
  } catch (error) {
    reportDevelopmentFallback(error);
    return { session: { userId: DEMO_USER_ID } };
  }
}

export async function testPrismaConnection(): Promise<boolean> {
  try {
    await getPrisma().$queryRaw`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}
