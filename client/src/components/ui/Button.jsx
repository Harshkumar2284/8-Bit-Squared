export default function Button({variant="primary", children, onClick, className }) {
    const baseClasses = "hover:cursor-pointer  transition-all duration-300 font-pixel";
    const variantClasses = {
        primary: "text-white  hover:text-yellow-500",
        secondary: "border-2 px-3 py-1 rounded-xl bg-linear-to-t from-orange-500  to-yellow-200 text-black shadow-sm shadow-orange-900 ",
    };

    return (
        <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {children}
        </button>
    )
}