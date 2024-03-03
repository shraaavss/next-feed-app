import Image from "next/image";
import Link from "next/link";
import appImg from "../assets/appImg.svg";
import snoozeImg from "../assets/snoozeImg.svg";
import temp from "../assets/homeIcon.svg"
import test from "../assets/test.jpeg"
import bookmark from "../assets/bookmark.svg";
import like from "../assets/like.svg"

import repost from "../assets/repost.svg";
import share from "../assets/share.svg"
import { useState, useEffect } from "react";

export default function Post(props) {
    const [liked, setLiked] = useState(false)

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
                        <svg onClick={()=> setLiked(!liked)} style={liked?{fill: "red"}:{fill: "black"}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                        <Image src={bookmark} width={"2rem"} height={"2rem"} alt="bookmark" />
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