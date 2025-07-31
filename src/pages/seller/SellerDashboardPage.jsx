import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { Button } from '../../components/ui/button';
import { 
  ChevronDown, 
  List, 
  DollarSign, 
  Clock, 
  Percent, 
  Plus, 
  Edit, 
  Trash2, 
  ExternalLink,
  ShoppingBag,
  Settings,
  User,
  FileCheck,
  Gavel,
  BarChart3,
  Package,
  Eye
} from 'lucide-react';

const SellerDashboardPage = () => {
  const navigate = useNavigate();

  // Sidebar navigation items
  const sidebarItems = [
    {
      title: 'Dashboard',
      icon: <BarChart3 className="h-5 w-5 mr-3" />,
      route: '/seller-dashboard',
      isActive: true
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
      route: '/seller/offer-bids'
    },
    {
      title: 'My Orders',
      icon: <ShoppingBag className="h-5 w-5 mr-3" />,
      route: '/seller/my-orders'
    },
    {
      title: 'Analytics',
      icon: <BarChart3 className="h-5 w-5 mr-3" />,
      route: '/seller/analytics'
    }
  ];

  const accountItems = [
    {
      title: 'KYC Dashboard',
      icon: <FileCheck className="h-5 w-5 mr-3" />,
      route: '/seller/kyc-dashboard'
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

  // Dummy data for dashboard cards
  const dashboardStats = [
    {
      title: 'Total Revenue',
      value: '₹24,567',
      change: '+12.5%',
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
      color: 'text-green-500',
    },
    {
      title: 'Active Listings',
      value: '143',
      change: '+8 new',
      icon: <List className="h-5 w-5 text-blue-500" />,
      color: 'text-blue-500',
    },
    {
      title: 'Pending Offers',
      value: '27',
      change: 'Awaiting response',
      icon: <Clock className="h-5 w-5 text-yellow-500" />,
      color: 'text-yellow-500',
    },
    {
      title: 'Conversion Rate',
      value: '68%',
      change: '+3.2%',
      icon: <Percent className="h-5 w-5 text-purple-500" />,
      color: 'text-purple-500',
    },
  ];

  // Dummy data for Active Listings table
  const activeListings = [
    { id: 'SKU-MBP16-001', product: 'MacBook Pro 16"', category: 'Electronics', price: '₹2,399', stock: '12', status: 'Active' },
    { id: 'SKU-IP15-001', product: 'iPhone 15 Pro', category: 'Electronics', price: '₹999', stock: '3', status: 'Low Stock' },
    { id: 'SKU-IND-005', product: 'Industrial Sensor', category: 'Sensors', price: '₹150', stock: '25', status: 'Active' },
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Enhanced Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <span className="text-blue-600 font-bold text-xl">ZeeroStock</span>
            <span className="ml-2 text-gray-700 text-sm">Seller</span>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex-grow p-4">
          {/* Main Navigation */}
          <div className="mb-6">
            <h3 className="text-xs uppercase text-gray-500 font-semibold mb-3 px-2">Main Menu</h3>
            <ul className="space-y-1">
              {sidebarItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(item.route)}
                    className={`w-full flex items-center p-3 rounded-lg text-left transition-colors duration-200 ${
                      item.isActive 
                        ? 'bg-blue-50 text-blue-700 font-semibold border-r-2 border-blue-600' 
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
                    className="w-full flex items-center p-3 rounded-lg text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
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

      {/* Main Content Area */}
      <div className="flex-grow p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
            <p className="text-gray-600">Welcome back, manage your inventory and track performance</p>
          </div>
          {/* User Profile/Notifications */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            {/* Quick Actions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  Quick Actions <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleNavigation('/seller/ListNewItemPage')}>
                  <Plus className="mr-2 h-4 w-4" />
                  List New Item
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation('/seller/offer-bids')}>
                  <Gavel className="mr-2 h-4 w-4" />
                  View Offers
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation('/seller/analytics')}>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analytics
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* KYC/KYB Verification Status */}
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md flex justify-between items-center">
          <span>
            <span className="font-semibold">KYC/KYB Verified</span>: Your account is fully verified and ready for trading
          </span>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleNavigation('/seller/kyc-dashboard')}
          >
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>

        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardStats.map((stat, index) => (
            <Card key={index} className="rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className={`text-xs ${stat.color}`}>{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sales Performance and Category Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Sales Performance</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    Last 30 days <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                  <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                  <DropdownMenuItem>Last 90 days</DropdownMenuItem>
                  <DropdownMenuItem>This Year</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-md">
              [Sales Performance Chart Placeholder]
            </div>
          </Card>
          <Card className="rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Category Performance</CardTitle>
              <Button 
                variant="link" 
                className="text-blue-600 hover:underline" 
                onClick={() => handleNavigation('/seller/analytics')}
              >
                View all
              </Button>
            </div>
            <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-md">
              [Category Performance Chart Placeholder]
            </div>
          </Card>
        </div>

        {/* Active Listings Table */}
        <Card className="rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Active Listings</CardTitle>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                onClick={() => handleNavigation('/seller/manage-listings')}
              >
                <Eye className="h-4 w-4 mr-2" /> View All
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white" 
                onClick={() => handleNavigation('/seller/list-new-item')}
              >
                <Plus className="h-4 w-4 mr-2" /> Add New
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeListings.map((listing) => (
                <TableRow key={listing.id}>
                  <TableCell className="font-medium">{listing.product}</TableCell>
                  <TableCell>{listing.category}</TableCell>
                  <TableCell>{listing.price}</TableCell>
                  <TableCell>{listing.stock}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      listing.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {listing.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="mr-2" 
                      onClick={() => handleNavigation(`/seller/edit-listing/${listing.id}`)}
                    >
                      <Edit className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => console.log('Delete', listing.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default SellerDashboardPage;