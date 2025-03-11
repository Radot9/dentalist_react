const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
    const baseStyles = "px-4 py-2 font-medium rounded-lg smooth-corners-lg transition-all duration-300 text-center";
  
    const variants = {
      primary: "bg-deep-indigo text-white hover:bg-midnight-indigo hover:shadow-2xl",
    };
  
    const sizes = {
      sm: "w-[180px] h-[48px]",
      lg: "w-[240px] h-[50px]",
    };
  
    return (
      <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;
  