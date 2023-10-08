

function Button({ title, download, link, label, iconStart, iconEnd, click, size }) {
  let btnSize = "16";
  
  if (size === "small") {
    btnSize = "8";
  }
  else{
    btnSize = "16";
  }


  return (
    <div className="justify-center items-center">
      <button
        download={download}
        href={link}
        className={`font-general-medium flex gap-2 justify-center items-center w-${btnSize} h-${btnSize} sm:w-auto sm:px-${btnSize/2} text-lg shadow-lg rounded-lg bg-ternary-light text-primary-dark focus:ring-1 focus:ring-primary-dark hover:bg-primary-dark hover:text-primary-light hover:translate-y-0.5 hover:scale-105 duration-500`}
        aria-label={label || title} // Fallback to title if label is not provided
        onClick={click}
        role="button" // Explicitly define the role
      >
        {iconStart && <div aria-hidden="true">{iconStart}</div>}
        {/* Hide text on screens smaller than 'sm' */}
        <span className="hidden sm:inline text-xs sm:text-lg ">{title}</span>
        {iconEnd && <div aria-hidden="true">{iconEnd}</div>}
      </button>
    </div>
  );
}

export default Button;
