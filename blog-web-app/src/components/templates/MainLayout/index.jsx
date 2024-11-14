import { Outlet } from "react-router-dom"
import { Header, Footer } from "../../organisms";

function MainLayout(){
    return(
        <div className="Main-App-Wrapper flex flex-col h-screen">
            <Header/>
            <div className="Content-wrapper max-w-7xl m-auto w-full flex-1">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;