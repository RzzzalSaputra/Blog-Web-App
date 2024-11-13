import {createBrowserRouter} from 'react-router-dom'
import {Home, PostDetail, PostForm} from '../pages/index'
import { PostItem, MainLayout } from '../components'

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/post-detail',
                element: <PostDetail/>
            },
            {
                path: '/post-form',
                element: <PostForm/>
            },
            {
                path: '/post-item',
                element: <PostItem 
                    image="https://picsum.photos/800" 
                    alt="Image title"
                    name="Nakano Itsuki"
                    date="11 November 2024"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
            },
            {
                future: {
                    v7_skipActionErrorRevalidation: true,
                    v7_startTransition: true
                },
            }
            
        ]
    },
])