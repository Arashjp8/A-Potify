"use client";
import React from "react";
import usePlayer from "@/hooks/usePlayer";
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongURL from "@/hooks/useLoadSongURL";

function Player() {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeID);

    const songURL = useLoadSongURL(song);

    if (!song || !songURL || !player.activeID) return null;

    return (
        <div className={"fixed bottom-0 bg-black w-full py-2 h-[80px] px-4"}>
            player {player.activeID}
        </div>
    );
}

export default Player;