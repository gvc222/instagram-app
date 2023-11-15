import React from 'react'
import "./Post.css"
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post( {user, postImage, likes, timestamp}) {
  return (
    <div className="post">
        <div className="post__header">
            <div className="post__headerAuthor">
                <Avatar className="avatar">{user[0].toUpperCase()}</Avatar>
                {user} • <span className="span__timestamp">{timestamp}</span>
            </div>
            <MoreHorizIcon />
        </div>

        <div className="post__image">
            <img src={postImage} alt="" />
        </div>
        <div className="post_footer">
            <div className="post__footerIcons">
                <div className="post__iconsMain">
                    <FavoriteBorderIcon className="postIcon"/>
                    <ChatBubbleOutlineIcon className="postIcon"/>
                    <TelegramIcon className="postIcon"/>
                </div>
                <div className="post__iconSave">
                    <BookmarkBorderIcon className="postIcon"/>
                </div>
            </div>
            {likes} likes
        </div>
    </div>
  )
}

export default Post