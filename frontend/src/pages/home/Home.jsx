import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from '../../components/messages/MessageContainer';
import InfoPanel from '../../components/api/InfoPanel';

// backdrop-blur-lg
const Home = () => {
	return (
		<div className='justify-start flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
			<InfoPanel className='max-w-fit'/>
		</div>
	);
};
export default Home;