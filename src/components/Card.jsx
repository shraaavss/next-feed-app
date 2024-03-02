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

export default function Post(props){

    return(
        <div className="post">
            <div className="post-header">
                <div className="post-user">
                    <Image src={temp} width={"2rem"} height={"2rem"} alt="userImg"/>
                    <span>Sneh Gupta</span>
                </div>
                <div className="post-control">
                    <Image src={appImg} width={"2rem"} height={"2rem"} alt="appImg"/>
                    <Image src={snoozeImg} width={"2rem"} height={"2rem"} alt="snoozeImg"/>
                </div>
            </div>

            <div className="post-body">
                <Image src={test} width={600} alt="post"/>
            </div>

            <div className="post-footer">
                <div className="post-action">
                    <Image src={like} width={"2rem"} height={"2rem"} alt="like"/>
                    <Image src={bookmark} width={"2rem"} height={"2rem"} alt="bookmark"/>
                </div>
                <div className="post-share">
                    <Image src={repost} width={"2rem"} height={"2rem"} alt="repost"/>
                    <Image src={share} width={"2rem"} height={"2rem"} alt="share"/>
                </div>
            </div>
        </div>
    )
}