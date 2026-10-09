"use server";

import { setSession } from "@/server/auth";
import { getClientIp, rateLimit } from "@/server/rate-limit";
import { registerUser } from "@/server/services/auth.service";
import type { FormState } from "@/shared/contracts";
import { registerSchema } from "@/shared/validations";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function register(_: FormState, formData: FormData): Promise<FormState> {
  const parsed = registerSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  try {
    const ip = getClientIp(await headers());
    const allowed = await rateLimit(ip, "register", 5, 60);
    if (!allowed.success) {
      return { error: "ทำรายการบ่อยเกินไป กรุณารอสักครู่แล้วลองใหม่อีกครั้ง" };
    }

    const result = await registerUser(
      parsed.data.email,
      parsed.data.password,
      parsed.data.username
    );

    if ("error" in result && result.error) {
      return { error: result.error };
    }

    if (result.session) {
      await setSession(result.session);
    }
  } catch (error) {
    console.error("Register failed:", error);
    return { error: "ระบบสมัครสมาชิกไม่พร้อมใช้งานชั่วคราว" };
  }

  redirect("/dashboard");
}
