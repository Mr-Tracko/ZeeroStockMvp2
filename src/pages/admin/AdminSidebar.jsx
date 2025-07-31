import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { 
  BarChart3,
  Package,
  FileText,
  TrendingUp,
  CreditCard,
  Users,
  Shield,
  Settings
} from 'lucide-react';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    {
      title: 'Dashboard',
      icon: <BarChart3 className="h-5 w-5 mr-3" />,
      route: '/admin-Dashboard'
    },
    {
      title: 'Listings',
      icon: <Package className="h-5 w-5 mr-3" />,
      route: '/admin/listings'
    },
    {
      title: 'Reports',
      icon: <FileText className="h-5 w-5 mr-3" />,
      route: '/admin/reports'
    },
    {
      title: 'Analytics',
      icon: <TrendingUp className="h-5 w-5 mr-3" />,
      route: '/admin/analytics'
    },
    {
      title: 'Transactions',
      icon: <CreditCard className="h-5 w-5 mr-3" />,
      route: '/admin/transactions'
    },
    {
      title: 'User Details',
      icon: <Users className="h-5 w-5 mr-3" />,
      route: '/admin/user-details/:userId'
    },
  ];

  const accountItems = [
    {
      title: 'Settings',
      icon: <Settings className="h-5 w-5 mr-3" />,
      route: '/admin/settings'
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
          <span className="ml-2 text-gray-700 text-sm">Admin</span>
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
            src="https://placehold.co/40x40/AEC6CF/FFFFFF?text=JA" 
            alt="John Admin" 
            className="h-10 w-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Admin</p>
            <p className="text-xs text-gray-500 truncate">Super Admin</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => handleNavigation('/admin/settings')}
          >
            <Settings className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;