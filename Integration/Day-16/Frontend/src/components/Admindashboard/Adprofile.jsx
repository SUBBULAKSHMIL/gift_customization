import React from 'react';
import './Adprofile.css';

function AdminProfile() {
  return (
    <div className='adminprofile-all'>
      <div className='adminprofile-image'>
        <h3>Profile</h3><br/>
        <div className='admin-image'></div><br/>
        <button className='admin-button'>Admin</button>
      </div>
      <div className='adminprofile-details'>
        <div className='admin-details'>
          <h2>Edit Details</h2><br/>
          <div className='form-group'>
            <label>First Name</label><br/>
            <input type='text' value=' Subbulakshmi' /><br/><br/>
          </div>
          <div className='form-group'>
            <label>Last Name</label><br/>
            <input type='text' value=' L' /><br/><br/>
          </div>
          <div className='form-group'>
            <label>Email Address</label><br/>
            <input type='text' value=' 727721euit162@skcet.ac.in' /><br/><br/>
          </div>
          <h3>Change Password</h3><br/>
          <div className='form-group'>
            <label>Password</label><br/>
            <input type='password' value=' subbu123' /><br/><br/>
          </div>
          <div className='form-group'>
            <label>Confirm Password</label><br/>
            <input type='password' value=' subbu123' /><br/><br/>
          </div>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
