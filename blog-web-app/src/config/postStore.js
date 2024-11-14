import { create } from 'zustand';

const fakePost = [
    {
        _id: "1",
        title: "lorem ipsum",
        body: "lorem ipsum isi",
        author: "Itsuki",
        image: "https://picsum.photos/800",
        createAt: "2024-11-14"
    },
    {
        _id: "2",
        title: "lorem ipsum2",
        body: "lorem ipsum isi 2",
        author: "Itsuki",
        image: "https://picsum.photos/800",
        createAt: "2024-11-14"
    }
];

const usePostStore = create((set, get) => ({
    posts: [],
    getPosts: () => {
        set({ posts: fakePost });
    },
    getPostById: (id) => {
        return get().posts.find((post) => post._id === id); 
    }
}));

export default usePostStore;
