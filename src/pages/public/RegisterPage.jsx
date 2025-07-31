// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
// import { Input } from '../../components/ui/input';
// import { Label } from '../../components/ui/label';
// import { Button } from '../../components/ui/button';
// import { Checkbox } from '../../components/ui/checkbox';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'; // Import Shadcn Select

// const RegisterPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-4">
//       <Card className="w-full max-w-md rounded-xl shadow-lg">
//         <CardHeader className="text-center pb-6">
//           <div className="flex justify-center mb-4">
//             <span className="text-blue-600 font-bold text-4xl">ZeeroStock</span>
//           </div>
//           <CardTitle className="text-2xl font-bold text-gray-900">Create Your Account</CardTitle>
//           <CardDescription className="text-gray-600">
//             Join ZeeroStock to unlock capital or find excess inventory
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {/* Static form structure - no state or functions */}
//           <form className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 required
//                 className="rounded-md"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Create a password"
//                 required
//                 className="rounded-md"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="confirm-password">Confirm Password</Label>
//               <Input
//                 id="confirm-password"
//                 type="password"
//                 placeholder="Confirm your password"
//                 required
//                 className="rounded-md"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="account-type">Account Type</Label>
//               <Select>
//                 <SelectTrigger id="account-type" className="rounded-md">
//                   <SelectValue placeholder="Select account type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="seller">Seller Account (Manufacturing Unit)</SelectItem>
//                   <SelectItem value="buyer">Buyer Account (Business)</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Checkbox id="terms" className="rounded" />
//               <Label htmlFor="terms" className="text-sm">
//                 I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
//               </Label>
//             </div>
//             <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base">
//               Sign Up
//             </Button>
//           </form>

//           <div className="relative my-8">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t border-gray-300" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-white px-2 text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           {/* Social Sign-On Buttons */}
//           <div className="flex flex-col space-y-3">
//             <Button variant="outline" className="w-full rounded-md py-2 text-base border-gray-300 text-gray-700 hover:bg-gray-50">
//               <img src="https://www.svgrepo.com/show/353782/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
//               Google
//             </Button>
//             <Button variant="outline" className="w-full rounded-md py-2 text-base border-gray-300 text-gray-700 hover:bg-gray-50">
//               <img src="https://www.svgrepo.com/show/448208/microsoft.svg" alt="Microsoft" className="h-5 w-5 mr-2" />
//               Microsoft
//             </Button>
//           </div>

//           <p className="mt-8 text-center text-sm text-gray-600">
//             Already have an account?{' '}
//             <a href="/login" className="text-blue-600 hover:underline" onClick={() => navigate('/login')}>
//               Login
//             </a>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

const RegisterPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    accountType: '',
    adminKey: '',
    termsAccepted: false
  });
  
  const [showAdminKey, setShowAdminKey] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Clear error when user types
  };

  const handleAccountTypeChange = (value) => {
    setFormData(prev => ({ ...prev, accountType: value, adminKey: '' }));
    setShowAdminKey(value === 'admin');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password || !formData.confirmPassword || !formData.accountType) {
      setError('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.termsAccepted) {
      setError('Please accept the Terms & Conditions');
      return;
    }

    // Admin validation
    if (formData.accountType === 'admin') {
      if (!formData.adminKey) {
        setError('Admin secret key is required');
        return;
      }
      if (formData.adminKey !== 'admin123') {
        setError('Invalid admin secret key');
        return;
      }
    }

    // Route based on account type - PROPER NAVIGATION
    switch (formData.accountType) {
      case 'seller':
        navigate('/seller-dashboard');
        break;
      case 'buyer':
        navigate('/buyer-dashboard');
        break;
      case 'admin':
        navigate('/admin-dashboard');
        break;
      default:
        setError('Please select an account type');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-4">
      <Card className="w-full max-w-md rounded-xl shadow-lg">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            <span className="text-blue-600 font-bold text-4xl">ZeeroStock</span>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Create Your Account</CardTitle>
          <CardDescription className="text-gray-600">
            Join ZeeroStock to unlock capital or find excess inventory
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="rounded-md"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                required
                className="rounded-md"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                required
                className="rounded-md"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="account-type">Account Type</Label>
              <Select onValueChange={handleAccountTypeChange} value={formData.accountType}>
                <SelectTrigger id="account-type" className="rounded-md">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin Account</SelectItem>
                  <SelectItem value="seller">Seller Account (Manufacturing Unit)</SelectItem>
                  <SelectItem value="buyer">Buyer Account (Business)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {showAdminKey && (
              <div className="space-y-2">
                <Label htmlFor="admin-key">Admin Secret Key</Label>
                <Input
                  id="admin-key"
                  type="password"
                  placeholder="Enter admin secret key"
                  required
                  className="rounded-md"
                  value={formData.adminKey}
                  onChange={(e) => handleInputChange('adminKey', e.target.value)}
                />
                <p className="text-xs text-gray-500">
                  Enter the admin secret key to access admin portal
                </p>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                className="rounded" 
                checked={formData.termsAccepted}
                onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
              </Label>
            </div>
            
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base">
              Sign Up
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Sign-On Buttons */}
          <div className="flex flex-col space-y-3">
            <Button variant="outline" className="w-full rounded-md py-2 text-base border-gray-300 text-gray-700 hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/353782/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
              Google
            </Button>
            <Button variant="outline" className="w-full rounded-md py-2 text-base border-gray-300 text-gray-700 hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/448208/microsoft.svg" alt="Microsoft" className="h-5 w-5 mr-2" />
              Microsoft
            </Button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline" onClick={() => navigate('/login')}>
              Login
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;