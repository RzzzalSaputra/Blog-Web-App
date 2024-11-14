import { Gap, Link } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import usePostStore from "../../config/postStore";


function PostDetail(){
    const navigate = useNavigate();
    const {id} = useParams();
    const {getPostById} = usePostStore()
    const [data, setData] = useState({})

    useEffect(()=>{
        const post = getPostById(id)

        setData(post)
    }, [getPostById,id])
    return(
        <div className="detail-blog-wrapper">
            <Gap className={"h-5"}/>
            <img className="img-cover w-full h-80 object-cover rounded" src={data.image} alt="thumb"></img>
            <p className="blog-title m-0 text-xl font-bold text-black mt-5">{data.title}</p>
            <p className="blog-author m-0 text-xs text-gray-500">{data.author} - {data.createAt}</p>
            <p className="blog-body text-xs leading-8">{data.body}</p>
            <Gap className={"h-5"}/>
            <Link title={"Kembali Ke Home"} onClick={()=>navigate('/')}/>
        </div>
    )
}

export default PostDetail;