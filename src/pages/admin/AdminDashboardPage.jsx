import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import {
  Users,
  List,
  AlertCircle,
  DollarSign,
  Plus,
  CheckCircle,
  BarChart2,
  Settings
} from 'lucide-react';
import AdminSidebar from './AdminSidebar';

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  const adminStats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12% from last month',
      icon: <Users className="h-5 w-5 text-blue-500" />,
      color: 'text-blue-500',
    },
    {
      title: 'Active Listings',
      value: '3,254',
      change: '+8% from last week',
      icon: <List className="h-5 w-5 text-green-500" />,
      color: 'text-green-500',
    },
    {
      title: 'Pending Verifications',
      value: '127',
      change: 'Requires attention',
      icon: <AlertCircle className="h-5 w-5 text-red-500" />,
      color: 'text-red-500',
    },
    {
      title: 'Monthly Revenue',
      value: '₹24,580',
      change: '+15% from last month',
      icon: <DollarSign className="h-5 w-5 text-purple-500" />,
      color: 'text-purple-500',
    },
  ];

  const recentTransactions = [
    { id: '#TXN-001', user: 'John Smith', amount: '₹150.00', status: 'Completed', date: '2024-01-15' },
    { id: '#TXN-002', user: 'Sarah Johnson', amount: '₹75.50', status: 'Pending', date: '2024-01-14' },
    { id: '#TXN-003', user: 'Mike Davis', amount: '₹220.00', status: 'Completed', date: '2024-01-14' },
    { id: '#TXN-004', user: 'Priya Sharma', amount: '₹300.00', status: 'Completed', date: '2024-01-13' },
    { id: '#TXN-005', user: 'Rahul Verma', amount: '₹120.00', status: 'Processing', date: '2024-01-13' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar on the left */}
      <div className="w-1/5 m-5">
        <AdminSidebar activeRoute="/admin-dashboard" />
      </div>

      {/* Main dashboard content on the right */}
      <div className="w-4/5 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, Administrator</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-2">
              <img src="https://placehold.co/40x40/AEC6CF/FFFFFF?text=AD" alt="Admin User" className="h-10 w-10 rounded-full" />
              <span className="font-medium text-gray-800 hidden sm:block">Admin User</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminStats.map((stat, index) => (
            <Card key={index} className="rounded-lg shadow-sm">
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

        {/* Revenue and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="rounded-lg shadow-sm p-6">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</CardTitle>
            <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-md">
              [Revenue Chart Placeholder]
            </div>
          </Card>
          <Card className="rounded-lg shadow-sm p-6">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</CardTitle>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md py-2 text-base" onClick={() => navigate('/admin/user-management')}>
                <Plus className="h-4 w-4 mr-2" /> Add New User
              </Button>
              <Button className="w-full justify-start bg-green-50 hover:bg-green-100 text-green-700 rounded-md py-2 text-base" onClick={() => navigate('/admin/verifications')}>
                <CheckCircle className="h-4 w-4 mr-2" /> Review Verifications
              </Button>
              <Button className="w-full justify-start bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-md py-2 text-base" onClick={() => navigate('/admin/analytics')}>
                <BarChart2 className="h-4 w-4 mr-2" /> View Analytics
              </Button>
              <Button className="w-full justify-start bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-md py-2 text-base" onClick={() => navigate('/admin/settings')}>
                <Settings className="h-4 w-4 mr-2" /> System Settings
              </Button>
            </div>
          </Card>
        </div>

        {/* Transactions */}
        <Card className="rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Recent Transactions</CardTitle>
            <Button variant="link" className="text-blue-600 hover:underline" onClick={() => navigate('/admin/transactions')}>
              View All
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="font-medium">{txn.id}</TableCell>
                  <TableCell>{txn.user}</TableCell>
                  <TableCell>{txn.amount}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${txn.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        txn.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                      }`}>
                      {txn.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">{txn.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>

  );
};

export default AdminDashboardPage;
