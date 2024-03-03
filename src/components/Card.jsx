import Image from "next/image";
import Link from "next/link";
import appImg from "../assets/appImg.svg";
import snoozeImg from "../assets/snoozeImg.svg";
import temp from "../assets/homeIcon.svg"
import test from "../assets/test.jpeg"
import Bookmark from "../assets/bookmark.svg";
import Bookmarked from "../assets/bookmarked.svg"
import Like from "../assets/like.svg"
import Liked from "../assets/liked.svg";

import repost from "../assets/repost.svg";
import share from "../assets/share.svg"
import { useState, useEffect } from "react";

export default function Post(props) {
    const [liked, setLiked] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)

    return (
        <div className="post-wrap">

            <div className="post">
                <div className="post-header">
                    <div className="post-user post-icons">
                        <Image src={temp} width={32} height={32} alt="userImg" />
                        <span>Sneh Gupta</span>
                    </div>
                    <div className="post-control">
                        <Image className="post-icons" src={appImg} width={32} height={32} alt="appImg" />
                        <Image className="post-icons" src={snoozeImg} width={32} height={32} alt="snoozeImg" />
                    </div>
                </div>

                <div className="post-body">
                    <img src={props.img} alt="post"/>
                </div>

                <div className="post-footer">
                    <div className="post-action">
                        {liked?
                        <Image className="post-icons" onClick={()=>setLiked(!liked)} src={Liked} width={32} height={32} alt={"Liked"}/>
                        :
                        <Image className="post-icons" onClick={()=>setLiked(!liked)} src={Like} width={32} height={32} alt={"Like"}/>}
                        {/* <Image src={Liked} width={32} height={32} alt={"liked"}/> */}
                        {bookmarked?
                        <Image className="post-icons" onClick={()=>setBookmarked(!bookmarked)} src={Bookmarked} width={32} height={32} alt={"Bookmarked"}/>
                        :
                        <Image className="post-icons" onClick={()=>setBookmarked(!bookmarked)} src={Bookmark} width={32} height={32} alt={"Bookmark"}/>}
                        {/* <Image src={bookmark} width={32} height={32} alt="bookmark" /> */}
                    </div>
                    <div className="post-share">
                        <Image className="post-icons" src={repost} width={32} height={32} alt="repost" />
                        <Image className="post-icons" src={share} width={32} height={32} alt="share" />
                    </div>
                </div>
            </div>

        </div>

    )
}