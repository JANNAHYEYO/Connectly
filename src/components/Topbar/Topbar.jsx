import "./Topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
export default function Topbar() {
  return (
    <div className="topbarContainer" >
      <div className="topbarLeft">
         <span className="logo">CONNECTLY</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
           <SearchIcon  className="serachIcon"/>
           <input placeholder="Search for people or post" type="text" className="searchinput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <CircleNotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="./assests/person/8.jpeg" alt="profile" className="topbarImg" />
      </div>
    </div>
  )
}
