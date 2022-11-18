import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from "react-router-dom";
import { SearchOutlined } from "@mui/icons-material";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>Social Media</span>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search..." />
                </div>
            </div>

            <div className="right">
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsNoneOutlinedIcon/>
                <div className="user">
                    <img src="https://c4.wallpaperflare.com/wallpaper/449/864/836/4k-red-dead-redemption-red-dead-redemption-2-john-marston-men-hd-wallpaper-preview.jpg" alt="UserImage" />
                    <span>John Marston</span>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;