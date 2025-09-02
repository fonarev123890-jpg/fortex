import { useContext } from "react";
import ModalContext from "./ModalContext";

export default function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal должен использоваться внутри ModalProvider");
  }
  return ctx;
}
