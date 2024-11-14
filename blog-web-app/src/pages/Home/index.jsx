import { Button, Gap } from "../../components";
import { PostItem } from "../../components";
import Swal from "sweetalert2";
import usePostStore from "../../config/postStore";
import { useEffect } from "react";

function Home() {
    const { posts, getPosts } = usePostStore();

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    const handleDelete = () => {
        Swal.fire({
            title: "Apakah Anda Yakin?",
            text: "Tak Bisa Dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Dihapus!",
                    text: "Post Anda Telah Dihapus.",
                    icon: "success",
                });
            }
        });
    };

    return (
        <div className="home-page-wrapper pt-10">
            <div className="create-wrapper w-48 mr-0 ml-auto">
                <Button>Tambah Post Baru</Button>
            </div>
            <Gap className={"h-5"} />
            <div className="content-wrapper flex justify-between flex-wrap">
                {posts.map((post) => {
                    return (
                        <PostItem
                            key={post._id}
                            _id={post._id}
                            image={post.image}
                            alt={post.title}
                            name={post.name}
                            date={post.createAt}
                            body={post.body}
                            onDelete={() => handleDelete()}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
