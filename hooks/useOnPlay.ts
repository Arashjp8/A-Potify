import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";


function useOnPlay(songs: Song[]) {
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user } = useUser();

    const onPlay = (id: string) => {
        if (!user) return authModal.onOpen();

        player.setID(id);
        player.setIDs(songs.map(song => song.id));
    };

    return onPlay;
}

export default useOnPlay;