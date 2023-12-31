const Button = ({
  label,
  iconURL,
  bgColor,
  textColor,
  borderColor,
  fullWidth,
  logo,
}) => {
  return (
    <button className="flex justify-center items-center gap-4 px-8 py-4 text-lg bg-green-normal text-white text-xl rounded-full hover:bg-green-semilight hover:text-green-dark hover:shadow-3xl transition-all ease-in-out group">
      <img
        src={logo}
        alt="login"
        className="w-[25px] h-auto  group-hover:filter-green-dark"
      />
      <div className="font-medium">{label}</div>
    </button>
  );
};

export default Button;
