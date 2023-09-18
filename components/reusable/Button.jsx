function Button({ title, download, link, label, iconStart, iconEnd }) {
  return (
    <div className=" justify-center items-center sm:block">
      <button
        download={download}
        href={link}
        className="font-general-medium flex gap-2 justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-ternary-light text-primary-dark focus:ring-1 focus:ring-primary-dark hover:bg-primary-dark hover:text-primary-light  hover:translate-y-0.5 hover:scale-105 duration-500"
        aria-label={label}
      >
        {iconStart && <div>{iconStart}</div>}

        <span className="text-sm sm:text-lg duration-100">{title}</span>
        {iconEnd && <div>{iconEnd}</div>}
      </button>
    </div>
  );
}

export default Button;
