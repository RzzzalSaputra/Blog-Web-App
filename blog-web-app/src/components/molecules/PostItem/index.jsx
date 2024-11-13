import { Button, Gap } from '../../atoms'

function PostItem(props) {
    const { image, alt, name, date, body } = props
    
    return (
        <div className="w-1/2 h-auto rounded overflow-hidden  shadow-2xl shadow-black ">
            <img src={image} alt={alt} className=" w-full h-52 object-cover"/>
            <div className="content-detail m-2">
                <div className="title-wrapper flex justify-between p-1">
                    <h3 className="title font-semibold text-xl">{alt}</h3>
                    <div className="edit-wrapper flex items-center">
                        <Button>Edit</Button>
                        <Gap className={"w-10"}/>
                        <Button>Hapus</Button>
                    </div>
                </div>
                <p className='author'>{name} - {date}</p>
                <Gap className={'h-4'}/>
                <p className='body'>{body}</p>
            </div>
        </div>
    )
}

export default PostItem;
