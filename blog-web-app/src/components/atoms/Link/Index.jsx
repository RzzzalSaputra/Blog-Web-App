
function Link({title, onClick}){
    return(
        <p className="link text-center text-xl text-gray-500 underline cursor-pointer" onClick={onClick}>{title}</p>
    )
}

export default Link