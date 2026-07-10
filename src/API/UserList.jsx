

// const UserList = ({user}) => {
 
  
//   return (
//     <div >
      
     
     

      

//       {/* 🎴 Card Grid */}
     
        
         
         
//             <div key={user.id} className="border border-gray-200 p-5 rounded-xl shadow-md bg-white flex flex-col justify-between">
//               <div>
//                 <h1 className="text-xl font-bold text-gray-800 mb-2">Name: {user.name} </h1>
//                 <p className="font-bold text-gray-600 mb-2">Email: {user.email}</p>
//                 <p className="font-bold text-gray-600 mb-4">Phone: {user.phone}</p>
//               </div>

//               <button
//                 onClick={() => console.log("Hello Imran")}
//                 className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
//               >
//                 Click Me
//               </button>
//             </div>
         

//       </div>

     
   
//   );
// };

// export default UserList;


const UserList = ({users}) => {
  return (
    <div>
      
    <div className="border border-gray-200 p-5 rounded-xl shadow-md bg-white flex flex-col justify-between" key={users.id}>
              <div>
                <h1 className="text-xl font-bold text-gray-800 mb-2">Name: {users.name}</h1>
                <p className="font-bold text-gray-600 mb-2">Email: {users.email}</p>
                <p className="font-bold text-gray-600 mb-4">Phone: {users.phone}</p>
              </div>

              </div>

    </div>
  );
};

export default UserList;