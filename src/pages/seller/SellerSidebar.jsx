import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { 
  Plus, 
  Settings,
  User,
  FileCheck,
  Gavel,
  BarChart3,
  Package,
  ShoppingBag
} from 'lucide-react';

const SellerSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    {
      title: 'Dashboard',
      icon: <BarChart3 className="h-5 w-5 mr-3" />,
      route: '/seller-dashboard'
    },
    {
      title: 'List New Item',
      icon: <Plus className="h-5 w-5 mr-3" />,
      route: '/seller/ListNewItemPage'
    },
    {
      title: 'Manage Listings',
      icon: <Package className="h-5 w-5 mr-3" />,
      route: '/seller/manage-listings'
    },
    {
      title: 'Offer Bids',
      icon: <Gavel className="h-5 w-5 mr-3" />,
      route: '/seller/offers-bids'
    },
    {
      title: 'My Orders',
      icon: <ShoppingBag className="h-5 w-5 mr-3" />,
      route: '/seller/my-orders'
    },
  ];

  const accountItems = [
    {
      title: 'KYC Dashboard',
      icon: <FileCheck className="h-5 w-5 mr-3" />,
      route: '/seller/kyc-status'
    },
    {
      title: 'Profile Setup',
      icon: <User className="h-5 w-5 mr-3" />,
      route: '/seller/profile-setup'
    },
    {
      title: 'Settings',
      icon: <Settings className="h-5 w-5 mr-3" />,
      route: '/seller/settings'
    }
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <span className="text-blue-600 font-bold text-xl">ZeeroStock</span>
          <span className="ml-2 text-gray-700 text-sm">Seller</span>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex-grow p-4 overflow-y-auto">
        {/* Main Navigation */}
        <div className="mb-6">
          <h3 className="text-xs uppercase text-gray-500 font-semibold mb-3 px-2">Main Menu</h3>
          <ul className="space-y-1">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(item.route)}
                  className={`w-full flex items-center p-3 rounded-lg text-left transition-colors duration-200 ${
                    isActiveRoute(item.route)
                      ? 'bg-blue-50 text-blue-700 font-semibold border-r-4 border-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.icon}
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Account Section */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-xs uppercase text-gray-500 font-semibold mb-3 px-2">Account</h3>
          <ul className="space-y-1">
            {accountItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(item.route)}
                  className={`w-full flex items-center p-3 rounded-lg text-left transition-colors duration-200 ${
                    isActiveRoute(item.route)
                      ? 'bg-blue-50 text-blue-700 font-semibold border-r-4 border-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.icon}
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* User Profile Section at Bottom */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <img 
            src="https://placehold.co/40x40/AEC6CF/FFFFFF?text=JS" 
            alt="John Seller" 
            className="h-10 w-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Seller</p>
            <p className="text-xs text-gray-500 truncate">Premium Seller</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => handleNavigation('/seller/profile-setup')}
          >
            <Settings className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default SellerSidebar;