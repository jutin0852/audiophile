"use client";
import React, { useState } from "react";
import { Check, ArrowLeft, Package, CreditCard } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import { useCart } from "@/context/cartContext";
import Image from "next/image";

interface FormErrors {
  [key: string]: string;
}

const AudiophileCheckout = () => {
  //   const [orderPlaced, setOrderPlaced] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-Money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const { cartItems } = useCart();
  console.log(cartItems);
  const orderItems = cartItems.map(({ id, name, price, quantity }) => ({
    id,
    name,
    price,
    quantity,
  }));

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + shipping;

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    if (formData.paymentMethod === "e-Money") {
      if (!formData.eMoneyNumber.trim())
        newErrors.eMoneyNumber = "e-Money number is required";
      if (!formData.eMoneyPin.trim())
        newErrors.eMoneyPin = "e-Money PIN is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const createOrder = useMutation(api.orders.createOrder);

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const orderData = {
        orderId: `ORD-${Date.now()}`,
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        shipping: {
          address: formData.address,
          zipCode: formData.zipCode,
          city: formData.city,
          country: formData.country,
        },
        items: orderItems,
        totals: { subtotal, shipping, vat, grandTotal },
        paymentMethod: formData.paymentMethod,
        status: "confirmed",
        timestamp: new Date().toISOString(),
      };
      console.log(orderData);

      await createOrder(orderData);

      await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      setShowModal(true);
    } catch (error) {
      console.log("Failed to place order", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const OrderConfirmationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-8">
        <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-2xl font-bold mb-2">THANK YOU</h2>
        <h3 className="text-2xl font-bold mb-4">FOR YOUR ORDER</h3>

        <p className="text-gray-600 mb-6">
          You will receive an email confirmation shortly.
        </p>

        <div className="flex mb-6">
          <div className="bg-gray-100 p-4 flex-1 rounded-l-lg">
            <div className="flex items-center mb-2">
              {cartItems[0].img && (
                <Image
                  className="text-3xl mr-4"
                  src={cartItems[0].img}
                  height={100}
                  width={100}
                  alt=""
                />
              )}
              <div>
                <p className="font-bold text-sm">{cartItems[0].name}</p>
                <p className="text-gray-600 text-sm">
                  $ {cartItems[0].price.toLocaleString()}
                </p>
              </div>
              <p className="ml-auto text-gray-600">x{cartItems[0].quantity}</p>
            </div>
            {cartItems.length > 1 && (
              <p className="text-xs text-gray-500 border-t pt-2">
                and {cartItems.length - 1} other item(s)
              </p>
            )}
          </div>

          <div
            className="bg-black text-white p-4 rounded-r-lg flex flex-col justify-center items-center"
            style={{ minWidth: "140px" }}
          >
            <p className="text-gray-400 text-xs mb-1">GRAND TOTAL</p>
            <p className="font-bold text-lg">$ {grandTotal.toLocaleString()}</p>
          </div>
        </div>

        <Link href={"/"}>
          <button
            // onClick={() => window.location.reload()}
            className="w-full bg-orange text-white py-3 rounded hover:bg-orange transition-colors font-bold"
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );

  if (showModal) {
    return <OrderConfirmationModal />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href={"/"}>
          <button className="flex items-center text-gray-600 mb-6 hover:text-black">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-8">CHECKOUT</h2>

            <div className="mb-8">
              <h3 className="text-orange text-sm font-bold mb-4">
                BILLING DETAILS
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-orange`}
                    placeholder="Alexei Ward"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-orange`}
                    placeholder="alexei@mail.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-orange`}
                  placeholder="+1 202-555-0136"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-orange text-sm font-bold mb-4">
                SHIPPING INFO
              </h3>

              <div className="mb-4">
                <label className="block text-xs font-bold mb-2">
                  Your Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-orange`}
                  placeholder="1137 Williams Avenue"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded ${
                      errors.zipCode ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-orange`}
                    placeholder="10001"
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.zipCode}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-orange`}
                    placeholder="New York"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-bold mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-orange`}
                  placeholder="United States"
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-orange text-sm font-bold mb-4">
                PAYMENT DETAILS
              </h3>

              <div className="mb-4">
                <label className="block text-xs font-bold mb-2">
                  Payment Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center px-4 py-3 border rounded cursor-pointer hover:border-orange">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="e-Money"
                      checked={formData.paymentMethod === "e-Money"}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <Package className="w-5 h-5 mr-2" />
                    e-Money
                  </label>

                  <label className="flex items-center px-4 py-3 border rounded cursor-pointer hover:border-orange">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cash on Delivery"
                      checked={formData.paymentMethod === "Cash on Delivery"}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <CreditCard className="w-5 h-5 mr-2" />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              {formData.paymentMethod === "e-Money" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-2">
                      e-Money Number
                    </label>
                    <input
                      type="text"
                      name="eMoneyNumber"
                      value={formData.eMoneyNumber}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded ${
                        errors.eMoneyNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:border-orange`}
                      placeholder="238521993"
                    />
                    {errors.eMoneyNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.eMoneyNumber}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      e-Money PIN
                    </label>
                    <input
                      type="text"
                      name="eMoneyPin"
                      value={formData.eMoneyPin}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded ${
                        errors.eMoneyPin ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-orange`}
                      placeholder="6891"
                    />
                    {errors.eMoneyPin && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.eMoneyPin}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {formData.paymentMethod === "Cash on Delivery" && (
                <div>
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 h-fit">
            <h3 className="text-xl font-bold mb-6">SUMMARY</h3>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center">
                  {item.img && (
                    <Image
                      className="text-3xl mr-4"
                      src={item.img}
                      height={100}
                      width={100}
                      alt=""
                    />
                  )}
                  <div className="flex-1">
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-gray-600 text-sm">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-gray-600">x{item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">TOTAL</span>
                <span className="font-bold">$ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">SHIPPING</span>
                <span className="font-bold">$ {shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">VAT (INCLUDED)</span>
                <span className="font-bold">$ {vat.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between mb-6">
              <span className="text-gray-600">GRAND TOTAL</span>
              <span className="font-bold text-orange text-lg">
                $ {grandTotal.toLocaleString()}
              </span>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-orange text-white py-3 rounded hover:bg-orange transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "PROCESSING..." : "CONTINUE & PAY"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudiophileCheckout;
