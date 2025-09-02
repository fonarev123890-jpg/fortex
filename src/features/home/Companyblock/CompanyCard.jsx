export default function CompanyCard({ title, description }) {
  return (
    <div className="deva:w-[20vw] peta:h-[120px] peta:w-[35vw] flex h-auto w-[60vw] flex-col gap-2">
      <strong className="text-[28px] font-medium sm:text-4xl">{title}</strong>
      <hr />
      <h3 className="peta:text-[20px] text-[18px] font-bold text-black/50">
        {description}
      </h3>
    </div>
  );
}
