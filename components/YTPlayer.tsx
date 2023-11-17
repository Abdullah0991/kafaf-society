'use client'
import { MATCH_URL_YOUTUBE } from "@/constants";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const YTPlayer = ({ url, title }: { url: string, title: string }) => {
    if (!MATCH_URL_YOUTUBE.test(url)) {
        return <p>Url is not a valid YT video!</p>
    }

    return (
        <div>
            <LiteYouTubeEmbed
                id={url.match(MATCH_URL_YOUTUBE)![1]}
                title={title}
            />
        </div>
    );
};

export default YTPlayer;