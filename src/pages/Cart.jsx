import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0), 0); //Calculate the total amount

  return (
    <div className="bg-slate-50 min-h-screen">
      <main className="container mx-auto bg-slate-50">
        <div className="overflow-x-auto">
          <h1 className="text-2xl font-semibold uppercase mt-10 text-center">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            // If cart is empty, show this message
            <div>
            <span className="block text-center text-4xl mt-10">🛒</span>
            <p className="text-center py-4">Your cart is empty</p>
            </div>
          ) : (
            <>
              {/* Show table only if there are items in the cart */}
              <table className="min-w-full mt-10 border border-slate-200 hidden lg:table">
              <thead className='border-b border-slate-200'>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-slate-500"></th>
                  <th className="pr-24 py-3 text-left text-sm font-medium text-slate-500">Product</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Description</th>
                  <th className="pl-24 py-3 text-left text-sm font-medium text-slate-500">Amount</th>
                  <th className="pl-24 py-3 text-left text-sm font-medium text-slate-500">Price</th>
                </tr>
              </thead>
              <tbody className='border-b border-slate-200'>
                {cartItems.map((item, index) => (
                  <tr key={index} className="border-t border-slate-200">
                    <td className="px-6 py-4" width="5%">
                      <div className="flex justify-center">
                        <button className="text-slate-800 text-xl p-2">&times;</button>
                      </div>
                    </td>

                    {/* Product */}
                    <td className="pr-24 py-6" width="10%">
                      <div className="flex items-center w-full h-auto rounded-sm">
                        <img
                          src={item.image}
                          alt={item.title}
                          className='w-full h-full bg-white object-contain' />
                      </div>
                    </td>

                    {/* Description */}
                    <td className="px-6 ml-8 py-6 text-left" width="30%">
                      <div className="font-medium text-sm">{item.title}</div>
                      <div className='text-sm mt-2 line-clamp-3'>
                        {item.description || 'No description available.'}
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="pl-24 py-6" width="10%">
                      <div className="flex items-center bg-slate-200 rounded-sm w-24">
                        <button className="px-3 py-1 text-cyan-600 font-semibold focus:outline-none">-</button>
                        <span className="mx-2">{item.quantity}</span>
                        <button className="px-3 py-1 text-cyan-600 font-semibold focus:outline-none">+</button>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="pl-24 py-4 font-semibold text-base" width="10%">{item.price}</td>
                  </tr>
                ))}
  </tbody>
  <tfoot>
                {/* Total Sum */}
                <tr>
                  <td></td>
                  <td colSpan="2"></td>
                  <td className="pl-24 py-4 font-normal text-2xl text-left">TOTAL</td>
                  <td className="pl-24 py-4 font-bold text-2xl">{totalPrice} €</td>
                </tr>
                {/* Buttons */}
                <tr>
                  <td></td>
                  <td colSpan="2"></td>
                  <td className="pl-24 py-4 text-left">
                    <button className='text-white px-12 py-2 rounded-sm bg-rose-600 hover:bg-red-600 hover:text-white'>Reset</button>
                  </td>
                  <td className="pl-24 py-4">
                    <button className='bg-cyan-600 text-white px-8 py-2 rounded-sm hover:bg-cyan-700'>Checkout</button>
                  </td>
                </tr>
                </tfoot>
              </table>

    {/* Mobile version */}
    <div className="lg:hidden flex flex-col justify-center items-center py-4 mt-6 space-y-6">
      {cartItems.map((item, index) => (
        <div key={index} className="flex flex-col border border-slate-200 py-2 w-64 h-96">

          {/* Delete button and pic */}
          <div className="relative flex justify-center mb-4 mt-2">
          <button className="absolute -top-4 right-2 text-slate-800 text-xl p-2">&times;</button>
            <img src={item.image} alt={item.title} className="mt-8 w-24 h-24 object-contain" />
          </div>

          {/* Title */}
          <div className="flex justify-center items-center mb-2 mt-4 px-4">
            <h3 className="text-base text-slate-800 font-medium text-center">{item.title}</h3>
          </div>

          {/* Price */}
          <div className="flex justify-center items-center mb-2">
            <p className="text-slate-800 font-extrabold">{item.price} €</p>
          </div>

          {/* Amount */}
          <div className="flex justify-center items-center mt-10">
            <div className="flex items-center bg-slate-200 rounded-sm w-24">
              <button className="px-3 py-1 text-cyan-600 font-semibold">-</button>
              <span className="mx-2">2</span>
              <button className="px-3 py-1 text-cyan-600 font-semibold">+</button>
            </div>
            </div>
            
        </div>
      ))}
    </div>
    
    {/* Total Sum and buttons for mobile screens */}
    <div className='flex flex-col justify-center items-center mt-4'>
    <div className="space-y-4 lg:hidden w-64">
  <div className="flex justify-between w-full">
    <span className="font-bold text-xl">TOTAL</span>
    <span className="font-bold text-xl">{totalPrice} €</span>
  </div>
  <button className="w-full bg-rose-600 text-white px-8 py-2 rounded-sm hover:bg-red-600">Reset</button>
  <button className="w-full bg-cyan-600 text-white px-8 py-2 rounded-sm hover:bg-cyan-700">Checkout</button>
</div>
</div>
  </>
)}
    </div>
  </main>
</div>
);
};

export default Cart;