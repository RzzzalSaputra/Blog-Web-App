import {createBrowserRouter} from 'react-router-dom'
import {Home, PostDetail, PostForm} from '../pages/index'
import { MainLayout } from '../components'

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
                future: {
                    v7_skipActionErrorRevalidation: true,
                    v7_startTransition: true
                },
            }
            
        ]
    },
])