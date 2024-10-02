{/* THIS CODE IS WORK*/}
import React from 'react';

const Cart = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
    <main className="container mx-auto bg-slate-50">
      <div className="overflow-x-auto">
        <table className="min-w-full mt-10 ">
          <thead className='border-b border-slate-200'>

            {/* Title*/}
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500"></th>
              <th className="pr-24 py-3 text-left text-sm font-medium text-gray-500">Product</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Description</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Amount</th>
              <th className="pl-24 py-3 text-left text-sm font-medium text-gray-500">Price</th>
            </tr>
          </thead>
          <tbody className='border-b border-slate-200'>
             <tr>
             <td className="px-6 py-4" width="5%">
    <div className="flex justify-center">
      <button className="text-slate-800 text-xl p-2">&times;</button>
    </div>
  </td>

    {/* Product*/}
                <td className="pr-24 py-4" width="10%">
                  
                   
                    <div className=" flex items-center w-full h-auto rounded-sm">
                      <img
                        src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                        alt="White Gold Plated Princess"
                        className='w-full h-full bg-white object-contain'/>
                    </div>
                  
        
              </td>

              {/* Description*/}
              <td className="px-6 ml-8 py-4 text-left" width="30%">
                  <div className="font-medium text-sm">White Gold Plated Princess</div>
                  <div className='text-sm mt-2'>
                    Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...
                  </div>
                </td>

                {/*Amount*/}
              <td className=" pl-24 py-6" width="10%">
                <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-slate-200 text-cyan-600 font-semibold">-</button>
          <span className="mx-2">2</span>
            <button className="px-3 py-1 bg-slate-200 text-cyan-600 font-semibold">+</button>
           </div>
              </td>

              {/*Price*/}
              <td className="pl-24 py-4 font-semibold text-base" width="10%">19,98&nbsp;€</td>
            </tr>
          </tbody>
          <tfoot>

            {/*Total Sum*/}
          <tr>
          <td></td>
            <td colSpan="2"></td>
            <td className="pl-24 py-4 font-normal text-2xl">TOTAL</td>
            <td className="pl-24 py-4 font-bold text-2xl">233,29&nbsp;€</td>
          </tr>

          {/*Buttons*/}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="pl-24 py-4">
              <button className='text-red-600 px-4 py-2 rounded-sm border border-red-600 hover:bg-red-600 hover:text-white'>Reset</button>
              </td>
              <td className="pl-24 py-4">
                <button className='bg-cyan-600 text-white px-6 py-2 rounded-sm hover:bg-cyan-700'>Checkout</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
    </div>
  );
}

export default Cart;




// import React from 'react'

// const Cart = () => {
//   return (
//     <div className='bg-slate-50 min-h-screen'>
//     <div className="Cart pb-2 mx-20">

// {/* Titles */}
// <ul className="mt-10 flex border-b border-slate-200 px-14 pb-2">
//       <li className="w-1/5 text-left">Product</li> 
//       <li className="w-3/5 text-left relative left-32">Description</li> 
//       <li className="w-1/5 text-center ml-8">Amount</li>     
//       <li className="w-1/5 text-right">Price</li>         
//     </ul>

// {/* Product */}
// <div className='flex items-center mt-6 border-b border-slate-200 pb-6'>
// <button className='text-slate-800 text-xl'>&times;</button>
// <div className='flex items-center'>
// <img
// src="https://img.freepik.com/fotos-kostenlos/frau-fotografiert-ihre-reise_23-2147641171.jpg?t=st=1727797452~exp=1727801052~hmac=674f3a2949bfcbe56be3cece82bcdf3e875fd0fd981d75fb4951de0cd85a18c7&w=1800"
// alt="Product"
// className='w-20 h-20 mx-12'/>
// </div>

// {/* Description */}
// <div className='-ml-0 flex-grow'>
//     <h3 className='ml-48 font-medium text-sm'>White Gold Plated Princess Ring</h3>
//     <p className ='ml-48 text-slate-800 text-sm'>Sed ut perspiciatis unde omnis 
//         iste natus error sit <br /> voluptatem accusantium doloremque laudantium,<br />
//         totam rem aperiam, eaque ipsa quae ab illo ...</p>
// </div>

// {/* Amount */}
// <div className="flex items-center mr-24 pr-16">
//             <button className="px-3 py-1 bg-slate-200 text-cyan-600 font-semibold">-</button>
//             <span className="mx-4">2</span>
//             <button className="px-3 py-1 bg-slate-200 text-cyan-600 font-semibold">+</button>
//           </div>

// {/* Price */}
//           <div className='flex items-center ml-auto mr-10 font-semibold text-xl'>9,99€</div>
//           </div>

// {/* Total price */}
//           <div className ='flex justify-end items-center mt-6 pt-2'>
//           <span className="font-normal text-2xl mr-4">TOTAL</span>
//           <span className="font-bold text-2xl">233,29€</span>
// </div>

// {/* Buttons */}
// <div className='flex justify-end mt-14 space-x-4'>
//     <button className='text-red-600 px-4 py-2 rounded-sm border border-red-600 hover:bg-red-600 hover:text-white'>Empty cart</button>
//     <button className='bg-cyan-600 text-white px-6 py-2 rounded-sm hover:bg-cyan-700'>Checkout</button>
//     </div>
//   </div>
//   </div>
//   );
// }

// export default Cart