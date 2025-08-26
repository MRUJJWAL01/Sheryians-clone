import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineUser } from 'react-icons/hi';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div style={{ fontFamily: "Helvetica Now Display, sans-serif" }} className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="">
          <h2 className="text-4xl  text-white mb-8">Sign In</h2>
          
          {/* Tab Switcher */}
          <div className="flex  space-x-6 mb-8">
            <button
              className={`text-lg ${
                activeTab === 'phone' 
                  ? 'text-[#E9E9E9] border-b-2 border-emerald-400' 
                  : 'text-gray-400'
              } pb-2`}
              onClick={() => setActiveTab('phone')}
            >
              Phone
            </button>
            <button
              className={`text-lg ${
                activeTab === 'email' 
                  ? 'text-[#E9E9E9] border-b-2 border-emerald-400' 
                  : 'text-gray-400'
              } pb-2`}
              onClick={() => setActiveTab('email')}
            >
              Email
            </button>
          </div>

          {/* Phone Input Form */}
          {activeTab === 'phone' && (
            <div className="space-y-6">
              <div className="text-left">
                <label className="text-[rgb(158,158,158)] text-[11.9px]">Mobile Number *</label>
                <input
                  type="tel"
                  className="w-full bg-[#1E1E1E] text-[14px] text-[rgb(233,233,233)] rounded px-3 py-1 mt-2 outline-none"
                  placeholder="Enter Your Mobile Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Email Input Form */}
          {activeTab === 'email' && (
            <div className="space-y-6">
              <div className="text-left">
                <label className="text-gray-300 text-sm">Email Address *</label>
                <input
                  type="email"
                  className="w-full bg-gray-900 text-white rounded-md px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Enter Your Email Address"
                />
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-gray-800"></div>
            <span className="px-4 text-gray-400">Or</span>
            <div className="flex-1 border-t border-gray-800"></div>
          </div>

          {/* Google Sign In Button */}
          <button className="w-full flex items-center justify-center space-x-2 border  border-[#242424] rounded-full py-3 text-white hover:bg-gray-900 transition-colors">
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>

          {/* Create Account Button */}
          <button className="w-full flex items-center justify-center space-x-2 border border-[#242424] rounded-full py-3 text-white mt-4 hover:bg-gray-900 transition-colors">
            <HiOutlineUser size={24} />
            <span>Create a New Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;