// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuthContext } from '../../context/AuthContext';

// const ProfilePicUpload = () => {
//   const [file, setFile] = useState(null);
//   const { authUser, setAuthUser } = useAuthContext();
//   const token = JSON.parse(localStorage.getItem("chat-user"))?.token;

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('image', file);

//     try {
//       const res = await fetch("http://localhost:5000/api/profile/upload", {
//         method: "POST",
//         // headers: {
//         //   'Authorization': `Bearer ${token}`,
//         // },
//         credentials: 'include',
//         body: formData,
//       })
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       const data = await res.json();
//       if (data.profilePic) {
//         const updatedUser = { ...authUser, profilePic: data.profilePic };
//         setAuthUser(updatedUser);
//         localStorage.setItem("chat-user", JSON.stringify(updatedUser));
//       } else {
//         console.error("Profile picture URL not returned");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default ProfilePicUpload;