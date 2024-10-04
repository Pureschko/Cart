import React from 'react';
import CartDesktop from '../components/CartDesktop';
import CartMobile from '../components/CartMobile';

const Cart = ({ cartItems, onRemove, onDecrease, onIncrease }) => {
  // Функция для расчета общей стоимости корзины
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  const handleReset = () => {
    // Логика для сброса корзины
  };

  const handleCheckout = () => {
    // Логика для оформления заказа
  };

  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto bg-white">
        <div className="overflow-x-auto">
          <h1 className="text-2xl font-semibold uppercase mt-10 text-center">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div>
              <span className="block text-center text-4xl mt-10">🛒</span>
              <p className="text-center py-4">Your cart is empty</p>
            </div>
          ) : (
            <>
              <CartDesktop
                cartItems={cartItems}
                onRemove={onRemove}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                onReset={handleReset}
                onCheckout={handleCheckout}
                totalPrice={totalPrice}
              />
              <CartMobile
                cartItems={cartItems}
                onRemove={onRemove}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                onReset={handleReset}
                onCheckout={handleCheckout}
                totalPrice={totalPrice}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;