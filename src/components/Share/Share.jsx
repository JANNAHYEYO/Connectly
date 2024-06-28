import "./Share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function share() {
  return (
    <div className="share">
        <div className="sharewrapper">
            <div className="sharetop">
                <img src="assests/person/5.jpeg" alt="profilepicture" className="shareprofileimg" />
                <input type="text" placeholder="what's in your mind?" className="shareinput"/>
            </div>
            <hr className="sharehr"/>
            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <PermMediaIcon htmlColor="tomato"className="icon" />
                        <span className="shareoptiontext">photo or video</span>
                    </div>
                    <div className="shareoption">
                        <LabelIcon htmlColor="blue" className="icon" />
                        <span className="shareoptiontext">Tag</span>
                    </div>
                    <div className="shareoption">
                        <LocationOnIcon htmlColor="green" className="icon" />
                        <span className="shareoptiontext">Location</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotionsIcon htmlColor="gold" className="icon" />
                        <span className="shareoptiontext">Feelings</span>
                    </div>
                </div>
                <button className="sharebutton">Share</button>
            </div>
            
        </div>
        
    </div>
  )
}
