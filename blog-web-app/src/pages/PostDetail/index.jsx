import { Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";


function PostDetail(){
    const navigate = useNavigate();
    return(
        <div className="detail-blog-wrapper">
            <Gap className={"h-5"}/>
            <img className="img-cover w-full h-80 object-cover rounded" src="https://picsum.photos/800" alt="thumb"></img>
            <p className="blog-title m-0 text-xl font-bold text-black mt-5">Lorem Ipsum 1</p>
            <p className="blog-author m-0 text-xs text-gray-500">Itsuki - November 14 2024</p>
            <p className="blog-body text-xs leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Gap className={"h-5"}/>
            <Link title={"Kembali Ke Home"} onClick={()=>navigate('/')}/>
        </div>
    )
}

export default PostDetail;