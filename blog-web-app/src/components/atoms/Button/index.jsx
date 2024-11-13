function Button({className,children, ...props}){
    return(
        <button className={`btn bg-green-500 font-medium rounded-sm text-white uppercase px-4 cursor-pointer hover:bg-green-600 w-full ${className}`} {...props}>{children}</button>
    )
}

export default Button