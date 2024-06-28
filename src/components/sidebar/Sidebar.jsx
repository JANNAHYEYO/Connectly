import "./Sidebar.css"
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import QuizIcon from '@mui/icons-material/Quiz';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import SchoolIcon from '@mui/icons-material/School';
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarlist">
            <li className="sidebarlistItem">
              <RssFeedRoundedIcon
              className="sidebarIcon" />
              <span className="sidebarlistItemText">
                feed
              </span>
            </li>
            <li className="sidebarlistItem">
              <ChatRoundedIcon
              className="sidebarIcon" />
              <span className="sidebarlistItemText">
                chats
              </span>
            </li>
            <li className="sidebarlistItem">
              <PlayCircleRoundedIcon
              className="sidebarIcon" />
              <span className="sidebarlistItemText">
                Videos
              </span>
            </li>
            <li className="sidebarlistItem">
              <GroupsRoundedIcon
              className="sidebarIcon" />
              <span className="sidebarlistItemText">
                Groups
              </span>
            </li>
            <li className="sidebarlistItem">
              <BookmarksRoundedIcon
              className="sidebarIcon" />
              <span className="sidebarlistItemText">
                Bookmarks
              </span>
            </li>
            <li className="sidebarlistItem">
              < QuizIcon
              className="sidebarIcon" />
              <span className="sidebarlistItemText">
                Question
              </span>
            </li>
            <li className="sidebarlistItem">
              <WorkRoundedIcon
              className="sidebarIcon" />
              <span className="sidebarlistItemText">
                Jobs
              </span>
            </li>
            <li className="sidebarlistItem">
              <EventAvailableRoundedIcon
              className="sidebarIcon" />
              <span className="sidebarlistItemText">
                Events
              </span>
            </li>
            <li className="sidebarlistItem">
              <SchoolIcon
              className="sidebarIcon" />
              <span className="sidebarlistItemText">
                Course
              </span>
            </li>
          </ul>

          <button className="sidebarbutton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarfriendlist">
            <li className="sidebarfriend">
              <img className="sidebarfriendimage" src="/assests/person/1.jpeg" alt="" />
              <span className="sidebarfriendName">oliver duth</span>
            </li>
            <li className="sidebarfriend">
              <img className="sidebarfriendimage" src="/assests/person/2.jpeg" alt="" />
              <span className="sidebarfriendName">Jane Doe</span>
            </li>
            <li className="sidebarfriend">
              <img className="sidebarfriendimage" src="/assests/person/3.jpeg" alt="" />
              <span className="sidebarfriendName">mousin</span>
            </li>
            <li className="sidebarfriend">
              <img className="sidebarfriendimage" src="/assests/person/4.jpeg" alt="" />
              <span className="sidebarfriendName">charlie</span>
            </li>
            <li className="sidebarfriend">
              <img className="sidebarfriendimage" src="/assests/person/5.jpeg" alt="" />
              <span className="sidebarfriendName">sonam kapoor</span>
            </li>
            <li className="sidebarfriend">
              <img className="sidebarfriendimage" src="/assests/person/6.jpeg" alt="" />
              <span className="sidebarfriendName">kiara</span>
            </li>
            <li className="sidebarfriend">
              <img className="sidebarfriendimage" src="/assests/person/7.jpeg" alt="" />
              <span className="sidebarfriendName">John david</span>
            </li>
            <li className="sidebarfriend">
              <img className="sidebarfriendimage" src="/assests/person/8.jpeg" alt="" />
              <span className="sidebarfriendName">posney</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
