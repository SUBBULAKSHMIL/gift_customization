import React, { useState } from 'react';
import logo from '../../assets/images/logo4.png';
import { Link } from 'react-router-dom';

const Search = ({ cartItems, items = [] }) => { // Provide a default value for items prop
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  // fixed Header
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search');
    search?.classList.toggle('active', window.scrollY > 100);
  });

  const cartItemsCount = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  const handleSearch = () => {
    // Filter items based on search query
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width'>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search' onClick={handleSearch}></i>
            <input
              type='text'
              placeholder='Search and hit enter...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <Link to='/Dashboard'>
              <i className='fa fa-user icon-circle'></i>
            </Link>

            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                {cartItemsCount > 0 && (
                  <span className='cart-length-ser'>{cartItemsCount}</span>
                )}
              </Link>
            </div>
              <Link to='/'>
                <button style={{height:'40px', width:'70px', borderRadius:'15px', borderColor:'black', marginLeft:'20px'}}>Logout</button>
              </Link>
          </div>
        </div>
      </section>

      <div className="items-container">
        {filteredItems.map(item => (
          <div key={item.id} className="item">
            {/* Render item details here */}
            <p>{item.name}</p>
            <p>{item.description}</p>
            {/* Add more item details as needed */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;

















// import React from 'react';
// import logo from '../../assets/images/logo4.png';
// import { Link } from 'react-router-dom';

// const Search = ({ cartItems }) => {
//   // fixed Header
//   window.addEventListener('scroll', function () {
//     const search = document.querySelector('.search');
//     search?.classList.toggle('active', window.scrollY > 100);
//   });

//   const cartItemsCount = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
//   // const cartItemsCount =5;

//   return (
//     <>
//       <section className='search'>
//         <div className='container c_flex'>
//           <div className='logo width '>
//             <img src={logo} alt='' />
//             {/* <span style={{color:'maroon'}}><b>GOLDEN WRAP</b></span> */}
//           </div>

//           <div className='search-box f_flex'>
//             <i className='fa fa-search'></i>
//             <input type='text' placeholder='Search and hit enter...' />
//             <span>All Category</span>
//           </div>

//           <div className='icon f_flex width'>
//             <Link to='/Dashboard'>
//               <i className='fa fa-user icon-circle'></i>
//             </Link>

//             <div className='cart'>
//               <Link to='/cart'>
//                 <i className='fa fa-shopping-bag icon-circle'></i>
//                 {cartItemsCount > 0 && (
//                   <span className='cart-length-ser'>{cartItemsCount}</span>
//                 )}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Search;













// import React from 'react'
// import logo from '../../assets/images/logo4.png'
// import { Link } from 'react-router-dom'

// const Search = ({cartItems}) => {
//   // fixed Header
//   window.addEventListener("scroll", function () {
//     const search = document.querySelector(".search")
//     search.classList.toggle("active", window.scrollY > 100)
//   })
//   return (
//     <>
//     <section className='search'>
//       <div className='container c_flex'>
//         <div className='logo width '>
//           <img src={logo} alt='' />
//           {/* <span style={{color:'maroon'}}><b>GOLDEN WRAP</b></span> */}
//         </div>

//         <div className='search-box f_flex'>
//           <i className='fa fa-search'></i>
//           <input type='text' placeholder='Search and hit enter...' />
//           <span>All Category</span>
//         </div>

//         <div className='icon f_flex width'>
//           <Link to='/login'>
//             <i className='fa fa-user icon-circle'></i>
//           </Link>
//           <div className='cart'>
//             <Link to='/cart'>
//               <i className='fa fa-shopping-bag icon-circle'></i>
//               <span> {cartItems.length === 0 ? "" : cartItems.length} </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   </>
//   )
// }

// export default Search
