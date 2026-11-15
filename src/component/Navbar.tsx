"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";

const eventLinks = [
  { name: "Create Event", href: "/create-event", icon: "plus" },
  { name: "Manage Events", href: "/manage-events", icon: "settings" },
  { name: "Joined Events", href: "/joined-events", icon: "check" },
];

function EventIcon({ icon }: { icon: string }) {
  if (icon === "plus") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-teal-400">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "settings") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-indigo-400">
        <path
          d="m10 3-.5 2a7.5 7.5 0 0 0-1.6.9L6 5.2 4 8.7l1.5 1.4a7 7 0 0 0 0 1.8L4 13.3l2 3.5 1.9-.7a7.5 7.5 0 0 0 1.6.9l.5 2h4l.5-2a7.5 7.5 0 0 0 1.6-.9l1.9.7 2-3.5-1.5-1.4a7 7 0 0 0 0-1.8L20 8.7l-2-3.5-1.9.7a7.5 7.5 0 0 0-1.6-.9L14 3h-4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-emerald-400">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8 12 2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const user = session?.user;

  useEffect(() => {
    if (!dropdownOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !dropdownRef.current?.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownOpen]);

  const handleLogout = async () => {
    await authClient.signOut();
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  const avatar = (
    <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-teal-500 text-sm font-bold text-white">
      {user?.image ? (
        <Image
          src={user.image}
          alt=""
          width={36}
          height={36}
          unoptimized
          className="h-full w-full object-cover"
        />
      ) : (
        user?.name?.trim().charAt(0).toUpperCase() || "U"
      )}
    </span>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900 text-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-lg shadow-teal-500/20">
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
          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Campus<span className="text-teal-400">-Net</span>
          </span>
        </Link>

        <Link
          href="/events"
          className="hidden items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-teal-300 sm:flex"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <rect
              x="3.5"
              y="5"
              width="17"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M7.5 3v4M16.5 3v4M3.5 9.5h17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          Upcoming Events
        </Link>

        <div className="hidden items-center gap-3 sm:flex">
          {!isPending &&
            (user ? (
              <>
                <div ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((open) => !open)}
                    aria-label={`${user.name || "Account"} menu`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="menu"
                    className="group relative flex items-center gap-2 rounded-full border border-slate-700 p-1 transition hover:border-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                  >
                    {avatar}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`mr-1 h-4 w-4 text-teal-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="m7 10 5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2.5 py-1 text-xs text-white opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      {user.name || "Account"}
                    </span>
                  </button>

                  {dropdownOpen && (
                    <div
                      role="menu"
                      className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-700 bg-[#111827] shadow-xl shadow-black/30"
                    >
                      <div className="border-b border-slate-700 px-5 py-4">
                        <p className="truncate text-sm font-bold text-slate-100">
                          {user.name || "Account"}
                        </p>
                        <p className="mt-1 truncate text-sm text-slate-400">
                          {user.email}
                        </p>
                      </div>
                      <div className="p-2">
                      {eventLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 hover:text-white"
                        >
                          <EventIcon icon={item.icon} />
                          {item.name}
                        </Link>
                      ))}
                      </div>
                      <div className="border-t border-slate-700 p-2">
                      <button
                        type="button"
                        role="menuitem"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-rose-400 transition hover:bg-slate-800"
                      >
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                          <path d="M10 17l5-5-5-5m5 5H3m9-9h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Logout
                      </button>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-rose-400 transition hover:border-rose-400/50 hover:bg-rose-400/5"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M10 17l5-5-5-5m5 5H3m9-9h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-400"
              >
                Login
              </Link>
            ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-xl text-slate-200 sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-700 bg-slate-900 px-5 py-4 sm:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link
              href="/events"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            >
              Upcoming Events
            </Link>

            {!isPending &&
              (user ? (
                <>
                  <div className="flex items-center gap-3 px-3 py-2">
                    {avatar}
                    <span className="truncate text-sm font-medium text-slate-200">
                      {user.name || "Account"}
                    </span>
                  </div>
                  {eventLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-sm text-slate-200 hover:bg-slate-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-1 rounded-xl bg-teal-500 px-4 py-2.5 text-left text-sm font-bold text-white hover:bg-teal-400"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 rounded-xl bg-teal-500 px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-teal-400"
                >
                  Login
                </Link>
              ))}
          </div>
        </div>
      )}
    </header>
  );
}
