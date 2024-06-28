import "./Rightbar.css";
import { Users } from "../../dummydata";
import Online from "../Online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
     <div className="rightwrapper">
      <div className="birthdaycontainer">
        <img src="post/gift.png" alt="" className="birthdayimg" />
        <span className="birthdaytext">
          <b>pola foster</b> and <b>3 other friends</b> have birthday today!
        </span>
      </div>
      <img src="post/ad.png" alt="itsanad" className="rightbarad"/>
      <h4 className="rightbartitle">Online Friends</h4>
      <ul className="rightbarfriendlist">
        {Users.map(u=>(
          <Online key={u.id} user={u} />
        ))}
      </ul>

     </div>
    </div>
  )
}
