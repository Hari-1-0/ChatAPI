import { IoSearchSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState();
	const {setSelectedConversation}= useConversation();
	const {conversations} = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!search) return;
		if(search.length < 3) {
			return toast.error('Search term must be atleast 3 characters long')
		}
		const conversation = conversations.find((c) => c.name.toLowerCase().includes(search.toLowerCase()));
		if(conversation) {
			setSelectedConversation(conversation);
			setSearch('');
		} else {
			toast.error("No such user found!")
		}
	}

	const handleHomeClick = () => {
		window.location.reload();
	}

	return (
		<div className='flex items-center gap-2 w-full'>
			<button onClick={handleHomeClick} type='submit' className='flex items-center hover:bg-green-800/50 justify-center w-10 h-10 text-white rounded-full'>
				<FaHome className='w-6 h-6' />
			</button>
			<form onSubmit={handleSubmit} className='flex items-center gap-2 w-full'>			
				<input 
					type='text' 
					placeholder='Search users...' 
					className='input input-bordered rounded-full w-full h-10'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button 
					type='submit' 
					className='flex items-center justify-center w-10 h-10 hover:bg-blue-800/50 text-white rounded-full'
				>
					<IoSearchSharp className='w-6 h-6' />
				</button>
			</form>
		</div>
		
	);
};

export default SearchInput;

// import { IoSearchSharp } from "react-icons/io5";
// import { FaHome } from "react-icons/fa";

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<FaHome />
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;