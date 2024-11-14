import { Button, Gap } from '../../atoms'
import { NavLink } from 'react-router-dom';

function PostItem(props) {
    const { image, alt, name, date, body, onDelete } = props
    
    return (
        <div className="blog-item w-1/2 h-auto rounded overflow-hidden  shadow-md shadow-black ">
            <img src={image} alt={alt} className="image-thumb w-full h-52 object-cover "/>
            <div className="content-detail p-4">
                <div className="title-wrapper flex justify-between items-center">
                    <h3 className="title m-0 font-bold text-black text-xl">{alt}</h3>
                    <div className="edit-wrapper flex items-center">
                        <Button>Edit</Button>
                        <Gap className={"w-10"}/>
                        <Button onClick={onDelete}>Hapus</Button>
                    </div>
                </div>
                <p className='author m-0 mt-1 text-xs text-gray-600'>{name} - {date}</p>
                <p className='body m-0 mt-4 text-xl text-gray-700'>{body}</p>
                <Gap className={'h-4'}/>
                <NavLink to="/post-detail">
                <Button>Lihat Detail</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default PostItem;
