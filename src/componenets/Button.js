const Button = ({ text, href }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <a
        href={href}
        className="relative px-6 py-3 text-black group cursor-pointer text-center"
        onClick={handleClick}
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
        <span className="absolute inset-0 w-full h-full border-[2px] border-black rounded-lg"></span>
        <span className="relative">{text}</span>
      </a>
    </>
  );
};

export default Button;
