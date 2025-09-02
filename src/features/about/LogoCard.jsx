function LogoCard({ src, alt }) {
  return (
    <div className="deva:h-44 flex h-35 w-[20vw] items-center justify-center overflow-hidden rounded-lg bg-white/13 sm:w-[20vw] xl:w-[20vw]">
      <img
        className="mx-auto max-h-full max-w-full object-contain"
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default LogoCard;
