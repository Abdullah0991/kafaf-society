'use client';
import { MATCH_URL_YOUTUBE } from "@/constants";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

type Props = { url: string, title: string; className?: string };

const YTPlayer = ({ url, title, className }: Props) => {
    if (!MATCH_URL_YOUTUBE.test(url)) {
        return <p>Url is not a valid YT video!</p>
    }

    return (
        <div>
            <LiteYouTubeEmbed
                id={url.match(MATCH_URL_YOUTUBE)![1]}
                title={title}
                wrapperClass={`yt-lite ${className}`}
            />
        </div>
    );
};

export default YTPlayer;