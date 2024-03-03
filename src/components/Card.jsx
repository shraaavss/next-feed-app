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
                    <div className="post-user">
                        <Image src={temp} width={"2rem"} height={"2rem"} alt="userImg" />
                        <span>Sneh Gupta</span>
                    </div>
                    <div className="post-control">
                        <Image src={appImg} width={"2rem"} height={"2rem"} alt="appImg" />
                        <Image src={snoozeImg} width={"2rem"} height={"2rem"} alt="snoozeImg" />
                    </div>
                </div>

                <div className="post-body">
                    <img src={props.img} alt="post"/>
                </div>

                <div className="post-footer">
                    <div className="post-action">
                        {liked?
                        <Image onClick={()=>setLiked(!liked)} src={Liked} width={"2rem"} height={"2rem"} alt={"Liked"}/>
                        :
                        <Image onClick={()=>setLiked(!liked)} src={Like} width={"2rem"} height={"2rem"} alt={"Like"}/>}
                        {/* <Image src={Liked} width={"2rem"} height={"2rem"} alt={"liked"}/> */}
                        {bookmarked?
                        <Image onClick={()=>setBookmarked(!bookmarked)} src={Bookmarked} width={"2rem"} height={"2rem"} alt={"Bookmarked"}/>
                        :
                        <Image onClick={()=>setBookmarked(!bookmarked)} src={Bookmark} width={"2rem"} height={"2rem"} alt={"Bookmark"}/>}
                        {/* <Image src={bookmark} width={"2rem"} height={"2rem"} alt="bookmark" /> */}
                    </div>
                    <div className="post-share">
                        <Image src={repost} width={"2rem"} height={"2rem"} alt="repost" />
                        <Image src={share} width={"2rem"} height={"2rem"} alt="share" />
                    </div>
                </div>
            </div>

        </div>

    )
}