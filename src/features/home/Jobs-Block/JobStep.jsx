export default function JobStep({ number, title, description, icon }) {
  return (
    <div className="deva:max-w-[450px] deva:p-3 relative flex h-auto max-w-[100%] gap-2 rounded-2xl border-2 border-blue-300 bg-gray-100 p-1 shadow-2xl sm:h-100 md:h-90">
      <div className="deva:text-[20px] absolute hidden h-14 items-center justify-center rounded-full border-1 border-blue-300 bg-gray-300 p-6 text-[16px] font-bold text-black sm:flex">
        {number}
      </div>
      <div className="mt-4 flex flex-col items-start gap-5 p-3 sm:items-center">
        <h3 className="deva:text-[20px] text-[18px] font-medium sm:mt-8 md:mt-0">
          {title}
        </h3>
        <p className="deva:text-[16px] flex justify-center text-[15px] font-light lg:text-[17px]">
          {description}
        </p>
        <p className="flex text-6xl sm:hidden">{icon}</p>
      </div>
    </div>
  );
}
