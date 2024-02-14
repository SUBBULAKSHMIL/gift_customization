import './Userprofile.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Userprofile() {
    const [users, setUsers] = useState({});

    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
          const token = localStorage.getItem('token');
        if (!token) {
          return;
        }
        const response = await axios.get(`http://localhost:8080/user/get/${localStorage.getItem("id")}`,{
          headers: {
              Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        setUsers(response.data);
      } 
      catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    return (
        <div className='adminprofile-all'>
            {/* Left side (image and profile details) */}
            <div className='adminprofile-image'>
                <h3>Profile</h3>
                <div className='admin-image'></div><br/>
                <button className='admin-button'>User</button>
            </div>

            {/* Right side (profile details) */}
            <div className='adminprofile-details'>
                <div className='admin-details'>
                    <div className='profile-table'>
                        <table className='admin-table'>
                            <tbody>
                                <tr className='admin-tr'>
                                    <td className='admin-td'>Id</td>
                                    <td className='admin-td'>{users.id}</td>
                                </tr>
                                <tr className='admin-tr'>
                                    <td className='admin-td'>Name</td>
                                    <td className='admin-td'>{users.name}</td>
                                </tr>
                                <tr className='admin-tr'>
                                    <td className='admin-td'>Email</td>
                                    <td className='admin-td'>{users.emailId}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Userprofile;


// import React, { Component, useState } from 'react'
// import '../assets/css/adminprofile.css'
// import icon from '../assets/images/icon1.jpg'

// function Editprofile() {
//     const [UserProfileData, setUserProfileData]=useState({
//         "name":"Sahana",
//         "email":"sahana@gmail.com",
//         "password":"sahana",
//         "confirmpassword":"sahana"
//     });

//     return ( <div className='adminprofile-all'>
//         <div className='adminprofile-image'>
//             <h3>Profile</h3>
//             <div className='admin-image'>   
//             </div><br/>
//             <button className='admin-button'>User
//             </button>
//         </div>
//         <div className='adminprofile-details'>
//             <div className='admin-details'>
//                     <h2>Edit Details</h2>
//                     <label>Name</label><br/>
//                     <input type='text' value={UserProfileData.name}/><br/>
//                     <label>Email Address</label><br/>
//                     <input type='text'value={UserProfileData.email}/><br/>
//                     <h3>Change Password</h3>
//                     <label>Password</label><br/>
//                     <input type='password' value={UserProfileData.password}/><br/>
//                     <label> Confirm Password</label><br/>
//                     <input type='password'value={UserProfileData.confirmpassword}/><br/><br/>
//                     <button>Save</button>
//             </div>

//         </div>
//     </div> );
// }

// export default Editprofile;