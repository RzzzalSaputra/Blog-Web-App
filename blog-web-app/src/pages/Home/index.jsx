import { Button, Gap } from "../../components";
import {PostItem} from "../../components";
import Swal from "sweetalert2"

function Home(){
    const handleDelete = ()=>{
    Swal.fire({
        title: "Apakah Anda Yakin?",
        text: "Tak Bisa Dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Dihapus!",
                text: "Post Anda Telah Dihapus.",
                icon: "success"
            });
        }
    });
    }
    return(
        <div className="home-page-wrapper pt-10">
            <div className="create-wrapper w-48 mr-0 ml-auto">
                <Button>Tambah Post Baru</Button>
            </div>
            <Gap className={"h-5"}/>
            <div className="content-wrapper flex justify-between flex-wrap">
                <PostItem 
                    image="https://picsum.photos/800" 
                    alt="Image title"
                    name="Nakano Itsuki"
                    date="11 November 2024"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    onDelete={()=> handleDelete()}
                />

            </div>
        </div>
        
    )
}

export default Home;