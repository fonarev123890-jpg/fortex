export default function SafetyCard({ icon, title, description }) {
  return (
    <div className="deva:max-w-[300px] peta:h-[400px] peta:w-[60vw] peta:gap-2 flex h-[450px] w-full max-w-[70vw] flex-col items-center gap-1 rounded-2xl border-2 bg-gray-500/40 p-5 text-center md:w-[40vw] xl:max-w-[350px] xl:gap-5">
      <p className="deva:text-5xl text-4xl">{icon}</p>
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="deva:text-[15px] text-[16px] font-extralight">
        {description}
      </p>
    </div>
  );
}
