import "./Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummydata";
export default function Post({post}) {
    return (
    <div className="post">
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src="assests/person/10.jpeg" alt="profile" className="postprofile"/>
                    <span className="postusername">
                        {Users.filter(u=>u.id === post.userId)[0].username}
                    </span>
                    <span className="postdate">{post.date}</span>

                </div>
                <div className="posttopright">
                    <MoreVertIcon  className="moreicon" />
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">{post?.desc}</span>
                <img src={post.photo} alt="postimage" className="postimage"/>
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <img src="post/like.png" alt="like" className="likeicon" />
                    <img src="post/heart.png" alt="heart" className="hearticon" />
                    <span className="likecounter">{post.like} people like it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommandtext">{post.comment}comments</span>
                </div>
            </div>
        </div>        
    </div>
  )
}
