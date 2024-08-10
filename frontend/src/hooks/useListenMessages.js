import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";
import { useSoundContext } from "../context/SoundContext";

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();
    const { sound } = useSoundContext();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const audio = new Audio(`/assets/sounds/${sound}.mp3`);
            audio.play();
            setMessages([...messages, newMessage]);
        })
        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages, sound])
}

export default useListenMessages