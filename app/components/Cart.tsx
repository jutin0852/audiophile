import { useCart } from "@/context/cartContext";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const CartModal = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
  } = useCart();
  console.log(cartItems);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="bg-white w-full max-w-md p-6 relative overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">CART ({cartItems.length})</h2>
          <button
            onClick={clearCart}
            className="text-gray-500 hover:text-gray-700 underline text-sm"
          >
            Remove all
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl">
                    {item.img && (
                      <Image
                        className="text-3xl mr-4"
                        src={item.img}
                        height={100}
                        width={100}
                        alt=""
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.name}</h3>
                    <p className="text-gray-600 text-sm">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-600 hover:text-orange"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-600 hover:text-orange"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between mb-6">
                <span className="text-gray-600">TOTAL</span>
                <span className="font-bold text-lg">
                  $ {getCartTotal().toLocaleString()}
                </span>
              </div>

              <Link href={"/checkout"}>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-orange text-white py-3 rounded hover:bg-orange transition-colors font-bold"
                >
                  CHECKOUT
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
