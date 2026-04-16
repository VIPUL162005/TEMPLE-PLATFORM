import React, { useState } from 'react';
import Header from './Header';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  return (
    <div className="bg-[#F5F1E5] min-h-screen pb-20">
      <div className="bg-[#c23632] relative">
        <div className="header-bg-symbols absolute top-0 left-0 w-full h-[170px] opacity-100 mix-blend-overlay"></div>
        <Header />
      </div>

      <div className="max-w-[1000px] mx-auto px-4 mt-8 pb-16">
        <h1 className="text-2xl font-bold text-[#c23632] mb-6 font-heading">Car Pooja</h1>

        <div className="bg-white border-2 border-[#e28743] shadow-md p-8 md:p-12 mb-6 max-w-[800px] mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-heading border-b pb-4">Payment Method</h2>
          
          <div className="mb-8 pl-4 space-y-6">
            {/* PayPal Option */}
            <div className="flex items-start">
              <input 
                type="radio" 
                id="paypal" 
                name="paymentMethod" 
                value="paypal" 
                className="mt-1 mr-3 accent-[#c23632]"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
              />
              <div className="flex-1 flex justify-between items-center pr-4">
                <label htmlFor="paypal" className="font-bold text-gray-800 cursor-pointer flex items-center">
                  PayPal <span className="text-sm font-normal text-gray-500 ml-4">You will be redirected to the PayPal website</span>
                </label>
                <div className="text-blue-800 font-bold italic">PayPal</div>
              </div>
            </div>

            {/* Credit Card Option */}
            <div>
              <div className="flex items-start">
                <input 
                  type="radio" 
                  id="creditCard" 
                  name="paymentMethod" 
                  value="creditCard" 
                  className="mt-1 mr-3 accent-[#c23632]"
                  checked={paymentMethod === 'creditCard'}
                  onChange={() => setPaymentMethod('creditCard')}
                />
                <div className="flex-1 flex justify-between items-center pr-4">
                  <label htmlFor="creditCard" className="font-bold text-gray-800 cursor-pointer">
                    Pay With Credit Card
                  </label>
                  <div className="flex space-x-2 text-xs font-bold border rounded px-2 py-1 items-center bg-gray-50">
                    <span className="text-blue-900 border-r pr-2">VISA</span>
                    <span className="text-red-500 border-r pr-2">MasterCard</span>
                    <span className="text-blue-500 pr-1">AMEX</span>
                  </div>
                </div>
              </div>

              {/* Credit Card Details */}
              {paymentMethod === 'creditCard' && (
                <div className="mt-4 ml-7 bg-red-50/20 border border-red-200 p-6 rounded-md">
                   <div className="flex flex-col md:flex-row gap-6 mb-4">
                     <div className="flex-[2]">
                       <label className="block text-[13px] font-semibold text-gray-700 mb-1">Card Number <span className="text-red-500">*</span></label>
                       <input type="text" placeholder="1234 5678 9101 3456" className="w-full border border-red-300 rounded p-2 focus:outline-none text-sm bg-white" />
                     </div>
                     <div className="flex-1">
                       <label className="block text-[13px] font-semibold text-gray-700 mb-1">Expiration Date <span className="text-red-500">*</span></label>
                       <input type="text" placeholder="MM/YY" className="w-full border border-red-300 rounded p-2 focus:outline-none text-sm bg-white" />
                     </div>
                   </div>
                   
                   <div className="flex items-end gap-6">
                     <div className="flex-1 max-w-[250px]">
                       <label className="block text-[13px] font-semibold text-gray-700 mb-1">Card Security Code <span className="text-red-500">*</span></label>
                       <input type="text" placeholder="***" className="w-full border border-red-300 rounded p-2 focus:outline-none text-sm bg-white" />
                     </div>
                     <div className="mb-2">
                       <a href="#" className="text-[12px] text-red-500 hover:underline">What is this?</a>
                     </div>
                   </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center text-red-500 text-xs mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            We protect your payment information using pro-level security SSL.
          </div>

          <h2 className="text-lg font-bold text-gray-900 mb-6 font-heading border-b pb-2">Billing Address</h2>
          
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none text-sm" />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none text-sm" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input type="email" className="w-full border border-gray-300 rounded p-2 focus:outline-none text-sm" />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-300 rounded p-2 focus:outline-none text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1">Street Address <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none text-sm mb-2" />
              <input type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none text-sm" />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-[1.5]">
                <label className="block text-[13px] font-semibold text-gray-700 mb-1">State/Province <span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 rounded p-2 focus:outline-none text-sm bg-white">
                  <option value=""></option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none text-sm" />
              </div>
              <div className="flex-[0.8]">
                <label className="block text-[13px] font-semibold text-gray-700 mb-1">Zip/Postal Code <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded p-2 focus:outline-none text-sm bg-white">
                <option value=""></option>
              </select>
            </div>

            <div className="mt-8 space-y-3 pt-6 border-t border-gray-200 border-dashed">
              <div className="flex items-center">
                <input type="checkbox" id="policy" className="w-4 h-4 accent-[#c23632]" />
                <label htmlFor="policy" className="ml-2 text-[13px] text-gray-700 font-bold">
                  Please check to acknowledge our <span className="text-blue-600 hover:underline cursor-pointer">Privacy & Terms Policy</span>
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="createAccount" className="w-4 h-4 accent-[#c23632]" />
                <label htmlFor="createAccount" className="ml-2 text-[13px] text-gray-600">
                  Create an account for later use
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-10 pt-4">
              <button type="submit" className="bg-[#fcd34d] hover:bg-[#fbb040] text-gray-900 font-bold py-3 w-[300px] transition-colors shadow-md rounded-sm text-[16px]">
                Confirm Payment
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Payment;
