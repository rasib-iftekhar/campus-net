"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasMinimumLength = password.length >= 6;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!hasUppercase || !hasLowercase || !hasMinimumLength) {
      setErrorMessage("Please meet all password requirements.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await authClient.signUp.email({
        name: name.trim(),
        email,
        password,
        ...(image.trim() ? { image: image.trim() } : {}),
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(error.message || "Unable to create your account. Please try again.");
      }
    } catch {
      setErrorMessage(
        "Unable to create your account. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderRule = (valid: boolean, text: string) => (
    <li
      key={text}
      className={`flex items-center gap-2 text-xs ${
        valid ? "text-teal-400" : "text-slate-400"
      }`}
    >
      <span aria-hidden="true" className="w-3 text-center">
        {valid ? "✓" : "×"}
      </span>
      {text}
    </li>
  );

  return (
    <main className="flex min-h-[calc(100vh-68px)] items-center justify-center bg-[#080c14] px-4 py-8 text-white sm:px-6">
      <section className="w-full max-w-[460px] rounded-[26px] border border-slate-800/80 bg-[#111827] px-7 py-8 shadow-2xl shadow-black/20 sm:px-8 sm:py-8">
        <div className="mb-7 flex flex-col items-center text-center">
          <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-[17px] bg-teal-500 text-white shadow-lg shadow-teal-500/20">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7"
            >
              <path
                d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 11.5v4c3.5 2.5 7.5 2.5 11 0v-4M21 10v5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Create Account
          </h1>
          <p className="mt-1.5 text-sm text-slate-400">
            Join the community and start driving social change
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-semibold text-slate-100"
            >
              Full Name
            </label>
            <div className="flex h-11 items-center gap-3 rounded-xl border border-slate-800 bg-[#080c14] px-3 transition focus-within:border-teal-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0 text-slate-400"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M5 20a7 7 0 0 1 14 0"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your full name"
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-slate-100"
            >
              Email Address
            </label>
            <div className="flex h-11 items-center gap-3 rounded-xl border border-slate-800 bg-[#080c14] px-3 transition focus-within:border-teal-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0 text-slate-400"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@example.com"
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="image"
              className="mb-1.5 block text-sm font-semibold text-slate-100"
            >
              Profile Photo URL
            </label>
            <div className="flex h-11 items-center gap-3 rounded-xl border border-slate-800 bg-[#080c14] px-3 transition focus-within:border-teal-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0 text-slate-400"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="8.5"
                  cy="9"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m21 15-5-5L5 20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="image"
                name="image"
                type="url"
                autoComplete="url"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                placeholder="https://images.example.com/photo.jpg"
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              Optional. Leave empty to use a default avatar.
            </p>
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-slate-100"
            >
              Password
            </label>
            <div className="flex h-11 items-center gap-3 rounded-xl border border-slate-800 bg-[#080c14] px-3 transition focus-within:border-teal-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0 text-slate-400"
              >
                <rect
                  x="4"
                  y="10"
                  width="16"
                  height="11"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M8 10V7a4 4 0 0 1 8 0v3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Create a password"
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="shrink-0 text-slate-400 transition hover:text-slate-200"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>
            </div>
            <ul className="mt-2 space-y-1">
              {renderRule(hasUppercase, "At least one uppercase letter (A-Z)")}
              {renderRule(hasLowercase, "At least one lowercase letter (a-z)")}
              {renderRule(hasMinimumLength, "Minimum 6 characters")}
            </ul>
          </div>

          {errorMessage && (
            <p
              role="alert"
              className="rounded-lg border border-rose-900/70 bg-rose-950/50 px-3 py-2 text-sm text-rose-300"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-teal-500 text-sm font-bold text-white transition hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Register"}
            {!isSubmitting && (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-teal-400 transition hover:text-teal-300"
          >
            Login here
          </Link>
        </p>
      </section>
    </main>
  );
}
