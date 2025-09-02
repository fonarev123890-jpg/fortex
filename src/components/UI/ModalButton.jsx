import useModal from "../../features/modal/useModal";

function ModalButton({ variant = "primary", children, clas }) {
  const { openModal } = useModal();

  const baseClasses =
    "cursor-pointer transition rounded-2xl focus:outline-none";

  const variants = {
    primary:
      "py-2 px-[20%] bottom-3 bg-blue-300 hover:bg-blue-200 text-[12px] border-3 border-white rounded-3xl min-[1550px]:px-20 lg:px-15 min-[730px]:px-30 sm:px-25 sm:text-[15px] min-[500px]:bottom-5 min-[500px]:py-3",
    secondary: `py-3 mt-40 px-12 ${clas} bg-white text-black border-2 border-blue-300 hover:bg-blue-300 hover:text-white`,
  };

  return (
    <button
      onClick={openModal}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default ModalButton;
