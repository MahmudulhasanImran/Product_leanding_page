

const UseApi = ({users}) => {
  return (
    <div>
     <div key={users.id} className="border border-gray-200 p-5 rounded-xl shadow-md bg-white">

           <h4 className="text-xl font-bold text-gray-800 mb-2">Name: {users.name} </h4>
          < p className= "text-gray-600" > Email:{users.email}</p>
          <p className="text-gray-600">Phone:{users.phone}</p> 
       
           </div> 
    </div>
  );
};

export default UseApi;