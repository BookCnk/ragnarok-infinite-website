"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { register } from "./actions";
import styles from "@/components/auth-card.module.css";

export function RegisterForm() {
  const [state, action, pending] = useActionState(register, { error: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [subscribeNews, setSubscribeNews] = useState(true);

  return (
    <div className={styles.authCard}>
      {/* Ornate Corner Accents */}
      <div aria-hidden="true" className={styles.cornerTopLeft} />
      <div aria-hidden="true" className={styles.cornerTopRight} />
      <div aria-hidden="true" className={styles.cornerBottomLeft} />
      <div aria-hidden="true" className={styles.cornerBottomRight} />

      <form action={action} className={styles.form}>
        {/* Username Field */}
        <div className={styles.fieldGroup}>
          <div className={styles.inputWrapper}>
            <User aria-hidden="true" className={styles.fieldIcon} />
            <input
              id="register-username"
              name="username"
              type="text"
              autoComplete="username"
              required
              minLength={3}
              maxLength={20}
              className={styles.input}
              placeholder="ชื่อผู้ใช้"
            />
          </div>
          <p className={styles.helperText}>3-20 ตัวอักษร (A-Z, a-z, 0-9)</p>
        </div>

        {/* Email Field */}
        <div className={styles.fieldGroup}>
          <div className={styles.inputWrapper}>
            <Mail aria-hidden="true" className={styles.fieldIcon} />
            <input
              id="register-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={styles.input}
              placeholder="อีเมล"
            />
          </div>
          <p className={styles.helperText}>ใช้สำหรับยืนยันบัญชีและกู้คืนรหัสผ่าน</p>
        </div>

        {/* Password Field */}
        <div className={styles.fieldGroup}>
          <div className={styles.inputWrapper}>
            <Lock aria-hidden="true" className={styles.fieldIcon} />
            <input
              id="register-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={8}
              className={styles.input}
              placeholder="รหัสผ่าน"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.eyeBtn}
              aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            >
              {showPassword ? (
                <EyeOff aria-hidden="true" className={styles.fieldIcon} />
              ) : (
                <Eye aria-hidden="true" className={styles.fieldIcon} />
              )}
            </button>
          </div>
          <p className={styles.helperText}>อย่างน้อย 8 ตัวอักษร (ผสมตัวอักษรและตัวเลข)</p>
        </div>

        {/* Confirm Password Field */}
        <div className={styles.fieldGroup}>
          <div className={styles.inputWrapper}>
            <Lock aria-hidden="true" className={styles.fieldIcon} />
            <input
              id="register-confirm-password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={8}
              className={styles.input}
              placeholder="ยืนยันรหัสผ่าน"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={styles.eyeBtn}
              aria-label={showConfirmPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            >
              {showConfirmPassword ? (
                <EyeOff aria-hidden="true" className={styles.fieldIcon} />
              ) : (
                <Eye aria-hidden="true" className={styles.fieldIcon} />
              )}
            </button>
          </div>
        </div>

        {/* Checkbox: Terms of Service */}
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="terms"
            required
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className={styles.checkbox}
          />
          <span className={styles.termsText}>
            ฉันยอมรับ{" "}
            <Link href="/terms" className={styles.termsLink}>
              ข้อกำหนดการใช้งาน
            </Link>{" "}
            และ{" "}
            <Link href="/privacy" className={styles.termsLink}>
              นโยบายความเป็นส่วนตัว
            </Link>
          </span>
        </label>

        {/* Checkbox: News Subscription */}
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="newsletter"
            checked={subscribeNews}
            onChange={(e) => setSubscribeNews(e.target.checked)}
            className={styles.checkbox}
          />
          <span className={styles.termsText}>
            รับข่าวสารและกิจกรรมจาก Ragnarok III Infinite
          </span>
        </label>

        {/* Error Alert */}
        {state?.error ? (
          <div role="alert" className={styles.errorMessage}>
            {state.error}
          </div>
        ) : null}

        {/* Golden Submit Button */}
        <button
          type="submit"
          disabled={pending}
          className={styles.goldSubmitBtn}
        >
          {pending ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก"}
        </button>

        {/* Social Register Divider */}
        <div className={styles.socialDivider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>หรือสมัครด้วย</span>
          <span className={styles.dividerLine} />
        </div>

        {/* Social Icons */}
        <div className={styles.socialGrid}>
          <button
            type="button"
            aria-label="สมัครด้วย Google"
            className={styles.socialBtn}
            onClick={() => alert("ระบบ Google สมัครสมาชิกกำลังเชื่อมต่อในเร็วๆ นี้")}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="สมัครด้วย Facebook"
            className={styles.socialBtn}
            onClick={() => alert("ระบบ Facebook สมัครสมาชิกกำลังเชื่อมต่อในเร็วๆ นี้")}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
              <path
                fill="#1877F2"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="สมัครด้วย Steam"
            className={styles.socialBtn}
            onClick={() => alert("ระบบ Steam สมัครสมาชิกกำลังเชื่อมต่อในเร็วๆ นี้")}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
              <path
                fill="currentColor"
                d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.077 2.911c0 .052.005.105.005.158 0 1.87-1.52 3.391-3.391 3.391-1.637 0-3.004-1.162-3.324-2.704L.43 14.992C1.933 20.181 6.643 24 12.222 24c6.627 0 12-5.373 12-12S18.606 0 11.979 0zm-3.613 16.038c-.352 0-.69.07-.999.197l-2.022-.835c.34-.844 1.047-1.494 1.928-1.78l1.71 2.47c-.198-.033-.404-.052-.617-.052zm7.574-9.336c-1.246 0-2.262 1.016-2.262 2.262s1.016 2.262 2.262 2.262 2.262-1.016 2.262-2.262-1.016-2.262-2.262-2.262z"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="สมัครด้วย Apple"
            className={styles.socialBtn}
            onClick={() => alert("ระบบ Apple สมัครสมาชิกกำลังเชื่อมต่อในเร็วๆ นี้")}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
              <path
                fill="currentColor"
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.16c.64-.78 1.08-1.86.96-2.95-1 .04-2.1.66-2.74 1.43-.58.67-1.09 1.76-.95 2.83 1.12.09 2.09-.53 2.73-1.31"
              />
            </svg>
          </button>
        </div>

        {/* Switch to Login link */}
        <div className={styles.switchFooter}>
          <span>มีบัญชีอยู่แล้ว?</span>
          <Link href="/login" className={styles.switchLink}>
            เข้าสู่ระบบ &gt;
          </Link>
        </div>
      </form>
    </div>
  );
}
