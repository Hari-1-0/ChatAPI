import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col border-r border-slate-500 p-4'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-1 mb-2 flex items-center justify-between'>
						<div className='flex items-center'>
        					<span className='label-text'>To:</span>
        					<span className='text-gray-900 font-bold ml-2'>{selectedConversation.name}</span>
    					</div>
						<img 
        					src={selectedConversation.profilePic} 
        					alt='Profile' 
        					className='w-10 h-10 rounded-full object-cover' 
    					/>
					</div>
					<Messages />
					<MessageInput/>
				</>
			)}
		</div>
	);
};
export default MessageContainer;

import SettingsMenu from "./SettingsMenu";
import LogoutButton from "../sidebar/LogoutButton";

const NoChatSelected = () => {
	const { authUser } = useAuthContext();

	return (
		<div className='relative flex flex-col items-center justify-center w-full h-full'>
			<div className="absolute top-4 left-4 flex items-center space-x-4">
				<img 
				src={authUser.profilePic} 
				alt='Profile' 
				className='w-12 h-12 rounded-full object-cover' 
				/>
				<span className="ml-2 text-white">{authUser.name}</span>
			</div>
			<div className="absolute top-4 right-4 flex items-center space-x-4">
				<div className="w-9 h-9 flex items-center justify-center rounded-full">
					<div className="w-7 h-7 flex items-center justify-center rounded-full">
						<LogoutButton />
					</div>
				</div>
				<div className="w-9 h-9 flex items-center justify-center rounded-full">
					<SettingsMenu />
				</div>
			</div>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold text-4xl">
					Welcome to ChatAPI
				</p>
				<TiMessages className='text-3xl md:text-7xl text-center text-purple-500 drop-shadow-lg' />
			</div>

		</div>

	);
};