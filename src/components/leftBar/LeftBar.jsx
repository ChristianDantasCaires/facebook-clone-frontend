import "./leftBar.scss";
import Friends from '@mui/icons-material/PeopleAltTwoTone';
import Groups from '@mui/icons-material/Diversity1TwoTone';
import Market from '@mui/icons-material/StorefrontTwoTone';
import Watch from '@mui/icons-material/SmartDisplayTwoTone';
import Memories from '@mui/icons-material/WatchLaterTwoTone';

const LeftBar = () => {
    return ( 
        <div className="leftBar">
            <div className="container">
                <div className="menu">

                    <div className="user">
                        <img src="https://c4.wallpaperflare.com/wallpaper/449/864/836/4k-red-dead-redemption-red-dead-redemption-2-john-marston-men-hd-wallpaper-preview.jpg" alt="UserImage" />
                        <span>John Marston</span>
                    </div>
                    <div className="item">
                        <Friends color="primary"/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <Groups color="secondary"/>
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <Market htmlColor="blue"/>
                        <span>MarketPlace</span>
                    </div>
                    <div className="item">
                        <Watch htmlColor="darkblue"/>
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <Memories htmlColor="yellowgreen"/>
                        <span>Memories</span>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default LeftBar;