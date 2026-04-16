import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';
import configData from '../data/config.json';

const PreetiBhojSponsor = () => {
  const config = configData.preetiBhojSponsor;
  const history = useHistory();

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const [formData, setFormData] = useState({
    amountOption: config.options[0].value,
    customAmount: '',
    date: '',
    name: '',
    phone: '',
    email: '',
    gotra: '',
    occasion: '',
    sankalp: '',
    paymentMethod: config.paymentMethods[0]
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceed = (e) => {
    e.preventDefault();
    history.push('/payment');
  };

  const getDisplayAmount = () => {
    if (formData.amountOption === 'custom') {
      return formData.customAmount ? `₹${formData.customAmount}` : '₹0';
    }
    return `₹${formData.amountOption}`;
  };

  return (
    <div className="bg-[#F5F1E5] min-h-screen pb-20 services-bg-symbols">
      {/* Header section with maroon background */}
      <div className="bg-[#c23632] relative">
        <div className="header-bg-symbols absolute top-0 left-0 w-full h-[170px] opacity-100 mix-blend-overlay"></div>
        <Header />
      </div>

      {isConfirmed ? (
        <div className="flex items-center justify-center p-4 py-16">
          <div className="bg-white max-w-[600px] w-full p-8 rounded-xl shadow-lg border border-gray-100 text-center">
            
            <div className="mb-6">
              <div className="w-[80px] h-[80px] bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto shadow-sm">
                ✅
              </div>
            </div>

            <h1 className="text-3xl font-bold text-[#C23632] mb-2">Thank you for sponsoring Preeti Bhoj 🙏</h1>
            <p className="text-gray-600 text-lg mb-8">May the divine blessings always be with you.</p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-left max-w-[400px] mx-auto shadow-sm">
              <h3 className="font-bold text-gray-800 border-b border-gray-200 pb-2 mb-4 text-center">Booking Details</h3>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Date:</span>
                <span className="font-semibold text-gray-800">{formData.date || 'Pending Date Selection'}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-500">Reference ID:</span>
                <span className="font-mono font-bold text-[#F3A40C]">{referenceId}</span>
              </div>
            </div>

            <div className="space-y-4 max-w-[300px] mx-auto mb-6">
              <button className="w-full flex items-center justify-center gap-2 bg-[#F3A40C] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#d99006] transition-colors shadow-md">
                📄 Download Receipt (PDF)
              </button>
              
              <button className="w-full flex items-center justify-center gap-2 border-[2px] border-[#25D366] text-[#25D366] font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors shadow-sm">
                💬 WhatsApp Confirmation
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-8 mb-4">
               ✉️ An email receipt has been sent automatically to your registered address.
            </p>

            <Link to="/" className="text-[#F3A40C] font-semibold underline hover:text-[#d99006]">
              Return to Home
            </Link>
          </div>
        </div>
      ) : (
        <div className="py-10 px-4 mt-8">
          <div className="max-w-[700px] mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-10 relative z-10">
            
            {/* Section 1: Title & Info */}
            <div className="text-center mb-8 border-b border-gray-100 pb-6">
              <h1 className="text-3xl font-bold text-[#C23632] mb-3">{config.title}</h1>
              <p className="text-gray-600 text-lg mb-4">{config.description}</p>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 font-semibold px-4 py-2 rounded-full text-sm">
                 🙌 {config.impactCounter}
              </div>
            </div>

            <form onSubmit={handleProceed} className="space-y-8">
              
              {/* Section 2: Sponsorship Options */}
              <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">🍛 Sponsorship Options</h3>
                <div className="space-y-3">
                  {config.options.map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3 bg-white p-3 rounded border border-gray-200 cursor-pointer hover:border-[#F3A40C] transition-colors">
                      <input
                        type="radio"
                        name="amountOption"
                        value={opt.value}
                        checked={String(formData.amountOption) === String(opt.value)}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-[#F3A40C] accent-[#F3A40C]"
                        required
                      />
                      <div className="flex-1">
                        <span className="font-medium text-gray-800">{opt.label}</span>
                        {opt.value !== 'custom' && <span className="float-right text-gray-600 font-bold">₹{opt.value}</span>}
                      </div>
                    </label>
                  ))}
                  
                  {String(formData.amountOption) === 'custom' && (
                    <div className="mt-2 pl-8">
                      <input
                        type="number"
                        name="customAmount"
                        placeholder="Enter custom amount (₹)"
                        value={formData.customAmount}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-[#F3A40C] focus:ring-1 focus:ring-[#F3A40C]"
                        required
                        min="1"
                      />
                    </div>
                  )}
                </div>
              </section>

              {/* Section 3: Select Date */}
              <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                 <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">📅 Select Date</h3>
                 <input
                   type="date"
                   name="date"
                   value={formData.date}
                   onChange={handleInputChange}
                   required
                   className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-[#F3A40C]"
                 />
                 <p className="text-xs text-gray-500 mt-2">💡 Some dates might be pre-booked and unavailable.</p>
              </section>

              {/* Section 4: Basic Details */}
              <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">👤 Basic Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:border-[#F3A40C]" />
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:border-[#F3A40C]" />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required className="border border-gray-300 px-4 py-2 rounded w-full sm:col-span-2 focus:outline-none focus:border-[#F3A40C]" />
                  <input type="text" name="gotra" placeholder="Gotra (Optional)" value={formData.gotra} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:border-[#F3A40C]" />
                  <input type="text" name="occasion" placeholder="Occasion (Optional)" value={formData.occasion} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:border-[#F3A40C]" />
                </div>
              </section>

              {/* Section 5: Sankalp / Message */}
              <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">📝 Sankalp / Message (Optional)</h3>
                <textarea
                  name="sankalp"
                  rows="3"
                  placeholder="E.g., In memory of..."
                  value={formData.sankalp}
                  onChange={handleInputChange}
                  className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:border-[#F3A40C]"
                ></textarea>
              </section>

              {/* Section 6: Payment */}
              <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">💳 Payment</h3>
                <div className="mb-6">
                   <p className="text-gray-600">Total Amount to Pay:</p>
                   <p className="text-3xl font-bold text-[#C23632]">{getDisplayAmount()}</p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#F3A40C] hover:bg-[#d99006] text-white font-bold py-4 rounded-lg text-lg transition-transform hover:-translate-y-1 shadow-lg"
                >
                  Sponsor Now
                </button>
              </section>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreetiBhojSponsor;
