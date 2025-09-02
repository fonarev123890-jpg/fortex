import { useEffect, useRef, useState } from "react";
import { PHONE_TEMPLATE, PHONE_MESSAGES } from "../../constants/phoneModal";
import useModal from "./useModal";
import useLockBodyScroll from "../../components/hooks/useLockBodyScroll";

export default function PhoneModal() {
  const API_URL = "https://eo6lgs9ghhess1a.m.pipedream.net";
  const { isOpen, closeModal } = useModal();
  useLockBodyScroll(isOpen);

  const [tail, setTail] = useState("");
  const [status, setStatus] = useState("idle");
  const [touched, setTouched] = useState(false);
  const inputRef = useRef(null);

  function formatPhone(digits) {
    let i = 0;
    return PHONE_TEMPLATE.replace(/x/g, () =>
      i < digits.length ? digits[i++] : "_",
    );
  }

  function extractDigits(str) {
    return str.replace(/\D/g, "").replace(/^79/, "").slice(0, 9);
  }

  function nextCaretPos(digits) {
    const shown = formatPhone(digits);
    const p = shown.indexOf("_");
    return p === -1 ? shown.length : p;
  }

  function placeCaret(digits = tail) {
    const el = inputRef.current;
    if (!el) return;
    const pos = nextCaretPos(digits);
    requestAnimationFrame(() => el.setSelectionRange(pos, pos));
  }

  useEffect(() => {
    placeCaret(tail);
  }, [tail]);

  if (!isOpen) return null;

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) closeModal();
  }

  function handleChange(e) {
    const digits = extractDigits(e.target.value);
    setTail(digits);
    setStatus("idle");
  }

  function handleKeyDown(e) {
    if (e.key === "Backspace") {
      e.preventDefault();
      setTail((s) => s.slice(0, -1));
      return;
    }
    if (["Delete", "ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      placeCaret();
    }
  }

  function handleFocus() {
    placeCaret();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (tail.length !== 9) {
      setTouched(true);
      return;
    }

    const e164 = `+79${tail}`;

    try {
      setStatus("loading");
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: e164 }),
      });

      if (!res.ok) throw new Error("Ошибка при отправке");

      setStatus("success");
      setTail("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40"
      onClick={handleOverlayClick}
    >
      <div className="relative h-full w-full max-w-md bg-white p-8 shadow-lg">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
        >
          &times;
        </button>

        <h2 className="mt-50 mb-6 text-2xl font-bold">
          {PHONE_MESSAGES.title}
        </h2>
        <p className="mb-6 text-gray-600">{PHONE_MESSAGES.subtitle}</p>

        {status === "success" ? (
          <p className="font-semibold text-green-800">
            {PHONE_MESSAGES.success}
          </p>
        ) : status === "error" ? (
          <p className="font-semibold text-red-800">
            {PHONE_MESSAGES.error.main}
            <br />
            <a href={`tel:${PHONE_MESSAGES.error.phone}`} className="underline">
              {PHONE_MESSAGES.error.phone}
            </a>
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              name="phone"
              type="tel"
              value={formatPhone(tail)}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={() => setTouched(true)}
              inputMode="numeric"
              autoComplete="tel"
              disabled={status === "loading"}
              className="mb-2 w-full rounded border border-gray-300 px-4 py-2 disabled:opacity-50"
            />

            {touched && tail.length < 9 && (
              <p className="mb-2 text-sm text-red-500">
                {PHONE_MESSAGES.validation}
              </p>
            )}

            <button
              type="submit"
              disabled={tail.length < 9 || status === "loading"}
              className="flex w-full items-center justify-center rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
            >
              {status === "loading" ? (
                <svg
                  className="h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                PHONE_MESSAGES.button
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
