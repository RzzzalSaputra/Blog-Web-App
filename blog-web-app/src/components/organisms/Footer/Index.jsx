import { FaSquareFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa6";

function FooterIcons({ icon }){
    const Icon = icon

    return(
        <div className="icon-wrapper bg-white  rounded-sm p-2 mr-5">
            <Icon/>
        </div>
    )
}

function Footer(){
    return(
        <footer>
            <div className="Footer-content flex justify-between items-center bg-green-500 px-5 py-10">
                <div className="social-wrapper flex ">
                    <FooterIcons icon={FaSquareFacebook}/>
                    <FooterIcons icon={FaInstagram}/>
                    <FooterIcons icon={FaTwitter}/>
                    <FooterIcons icon={FaTelegram}/>
                </div>     
            </div>
            <div className="Copyrights bg-green-500 px-5 py-0">
                <p className="text-sm text-white text-center m-0">Copyrights 2024 All right reserved</p>
            </div>
        </footer>
    )   
}

export default Footer;
