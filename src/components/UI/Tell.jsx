function Tell({ children, clas }) {
  return (
    <a className={`hover:underline ${clas}`} href="tel:+79185555932">
      {children}
    </a>
  );
}

export default Tell;
