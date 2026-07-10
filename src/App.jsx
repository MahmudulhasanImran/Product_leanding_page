// import { useEffect, useState } from "react";

// const APi = ("https://fakestoreapi.com/products");

// const App = () => {
//   const [users, setUser] = useState([]);
//   const [sarch,setsrach] = useState("");


  
//   useEffect(() => {
//     fetch(APi)
//       .then(res => res.json())
//       .then(data => {
//         setUser(data)
//       }  
//   )
//   },[])
//   console.log("data",users);


//   const filteruser = users.filter(user => 
  
//   user.title.toLowerCase().includes(sarch.toLocaleLowerCase())
// )

//  const Inputhandler = (e) => {
//     setsrach(e.target.value);
//   }  



//   return (
//     <div className="bg-[#C2DFFF] min-h-screen pb-20 ">
      
//       <div className="mb-20">
//         <h1>hello</h1>

//         <div className=" max-w-[500px] mx-auto mt-10 ">
//         <input className="px-5 py-2 w-[500px] border bg-amber-200  border-black rounded-md text-black "
//           placeholder="Sarch Name"
//           value={sarch}
//          onChange={Inputhandler}
//         type="text">
          
      
//       </input>
//      </div>


//       <div className="grid grid-cols-4 gap-8 max-w-[1240px] mx-auto mt-10  " >
//         {
//     //       users.map(user =>
//     //       (
//     //         <div key={user.id} className="bg-amber-50 border border-red-800 p-5">
//     //           {/* <h4 className="text-black">Title:{user.title}</h4> */}
//     //           <div className="p-4 border border-red-500 bg-green-700 flex justify-center items-center">
//     //   <img
//     //     className="h-[150px] w-[250px] object-contain" // 👈 'contain' এর জায়গায় 'object-contain' হবে
//     //     src={user.image}
//     //     alt={user.title}
//     //   />
//     // </div>

//     //         </div>
//     //       )
//           //       )
          
//        filteruser.map(user => (
//   <div 
//     key={user.id} 
//     className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
//   > 
//     {/* ১. ইমেজের কন্টেইনার (পারফেক্ট সাইজ ও ব্যাকগ্রাউন্ড) */}
//     <div className="w-full h-[200px] bg-gray-50 rounded-xl p-6 flex justify-center items-center mb-4">
//       <img 
//         className="max-h-full max-w-full object-contain mix-blend-multiply" 
//         src={user.image} 
//         alt={user.title} 
//       />
//     </div>

//     {/* ২. প্রোডাক্টের ইনফরমেশন সেকশন */}
//     <div className="flex-grow flex flex-col justify-between">
//       <div>
//         {/* ক্যাটাগরি */}
//         <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
//           {user.category}
//         </span>
//         {/* টাইটেল (২ লাইনের বেশি হলে ডট ডট হয়ে যাবে) */}
//         <h4 className="text-sm font-bold text-gray-800 line-clamp-2 mb-2 h-10">
//           {user.title}
//         </h4>
//       </div>

//       {/* প্রাইস এবং অ্যাকশন বাটন */}
//       <div className="flex items-center justify-between mt-3">
//         <span className="text-lg font-extrabold text-gray-900">
//           ${user.price}
//         </span>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors">
//           Buy Now
//         </button>
//       </div>
//     </div>
//   </div>
// ))}

        
//       </div>
//       </div>








//     </div>
//   );
// };

// export default App;



import { useEffect, useState } from "react";

const APi = "https://fakestoreapi.com/products";

const App = () => {
  const [users, setUser] = useState([]);
  const [sarch, setsrach] = useState("");
  
  // ১. পপআপ ফর্মের স্টেট (এখানে সিলেক্টেড প্রোডাক্টের ডেটা থাকবে)
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // ২. ফর্মের ইনপুট ডেটার স্টেট
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    fetch(APi)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const filteruser = users.filter((user) =>
    user.title.toLowerCase().includes(sarch.toLocaleLowerCase())
  );

  const Inputhandler = (e) => {
    setsrach(e.target.value);
  };

  // ৩. ফর্মের ইনপুট চেঞ্জ হ্যান্ডলার
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ৪. অর্ডার সাবমিট হ্যান্ডলার
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Order Successful for: ${selectedProduct.title}\n\nCustomer Details:\nName: ${formData.name}\nPhone: ${formData.phone}`);
    
    // অর্ডার সফল হলে ফর্ম রিসেট এবং পপআপ বন্ধ করা
    setFormData({ name: "", address: "", phone: "", email: "" });
    setSelectedProduct(null);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24 font-sans relative">
      
      {/* হেডার/নেভিগেশন */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm backdrop-blur-md bg-white/90">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SwiftCart <span className="text-xs font-medium text-slate-400">Showcase</span>
          </h1>
          
          <div className="w-full sm:w-[350px] relative">
            <input
              className="px-4 py-2.5 w-full border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl text-slate-800 text-sm outline-none transition-all placeholder:text-slate-400"
              placeholder="Search products..."
              value={sarch}
              onChange={Inputhandler}
              type="text"
            />
          </div>
        </div>
      </header>

      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="max-w-[1240px] mx-auto mt-8 sm:mt-12 px-4 sm:px-6">
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">Our Collection</h2>
          <p className="text-slate-500 text-sm mt-1">Explore our dynamically fetched premium items ({filteruser.length})</p>
        </div>

        {/* প্রোডাক্ট গ্রিড */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {filteruser.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* ইমেজের কন্টেইনার */}
              <div className="w-full h-[150px] sm:h-[220px] bg-slate-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex justify-center items-center mb-3 sm:mb-5 relative overflow-hidden">
                <img
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  src={user.image}
                  alt={user.title}
                />
              </div>

              {/* প্রোডাক্ট ইনফরমেশন */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-md inline-block mb-2">
                    {user.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-2 mb-1 sm:mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {user.title}
                  </h4>
                </div>

                {/* প্রাইস এবং অ্যাকশন বাটন */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 sm:mt-4 pt-2 sm:pt-4 border-t border-slate-50 gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">Price</span>
                    <span className="text-sm sm:text-lg font-bold text-slate-900">
                      ${user.price}
                    </span>
                  </div>
                  {/* Buy Now বাটনে ক্লিক করলে স্টেট সেট হবে এবং ফর্ম পপআপ চালু হবে */}
                  <button 
                    onClick={() => setSelectedProduct(user)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl shadow-md shadow-blue-200 hover:shadow-lg transition-all active:scale-95 w-full sm:w-auto text-center"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 🚀 ৫. ডাইনামিক পপআপ অর্ডার ফর্ম (Modal) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-[450px] w-full p-6 shadow-2xl relative overflow-y-auto max-h-[90vh]">
            
            {/* ক্লোজ বাটন */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
            >
              ✕
            </button>

            {/* ফর্ম হেডার */}
            <div className="text-center mb-5 mt-2">
              <h3 className="text-xl font-bold text-slate-900">Checkout Order</h3>
              <p className="text-xs text-slate-500 mt-1">You are ordering:</p>
              <p className="text-sm font-semibold text-blue-600 mt-1 line-clamp-1">{selectedProduct.title}</p>
              <p className="text-lg font-black text-slate-900 mt-1">${selectedProduct.price}</p>
            </div>

            {/* মেইন ফর্ম */}
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 border border-slate-200 bg-slate-50 rounded-xl text-sm focus:bg-white focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="017XXXXXXXX"
                  className="w-full px-4 py-2.5 border border-slate-200 bg-slate-50 rounded-xl text-sm focus:bg-white focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="example@mail.com"
                  className="w-full px-4 py-2.5 border border-slate-200 bg-slate-50 rounded-xl text-sm focus:bg-white focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Shipping Address</label>
                <textarea
                  name="address"
                  required
                  rows="3"
                  value={formData.address}
                  onChange={handleFormChange}
                  placeholder="Your full delivery address..."
                  className="w-full px-4 py-2.5 border border-slate-200 bg-slate-50 rounded-xl text-sm focus:bg-white focus:border-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* কনফার্ম বাটন */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold py-3 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl transition-all active:scale-98 mt-2"
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;