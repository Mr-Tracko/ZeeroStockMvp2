import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Package, 
  Search, 
  MessageSquare, 
  ShoppingCart, 
  DollarSign, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  PlayCircle, 
  User, 
  Building2,
  Truck,
  Star,
  Clock,
  TrendingUp,
  Globe,
  Zap
} from 'lucide-react';

const HowItWorksPage = () => {
  const [activeTab, setActiveTab] = useState('buyers');

  const buyerSteps = [
    {
      id: 1,
      icon: <Search className="h-8 w-8" />,
      title: "Browse & Discover",
      description: "Search through thousands of industrial products, surplus materials, and machinery from verified sellers across India.",
      details: "Use our advanced filters to find exactly what you need by category, location, price range, and quality grade.",
      color: "bg-blue-500"
    },
    {
      id: 2,
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Connect & Negotiate",
      description: "Contact sellers directly, ask questions, request samples, and negotiate the best prices for your business needs.",
      details: "Built-in messaging system with document sharing, price negotiation tools, and quality verification.",
      color: "bg-green-500"
    },
    {
      id: 3,
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Secure Purchase",
      description: "Complete your purchase with our secure payment system and track your order from confirmation to delivery.",
      details: "Multiple payment options, escrow protection, and real-time order tracking with logistics partners.",
      color: "bg-purple-500"
    },
    {
      id: 4,
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Receive your products with reliable logistics partners and comprehensive insurance coverage.",
      details: "Pan-India delivery network, quality assurance checks, and hassle-free returns if needed.",
      color: "bg-orange-500"
    }
  ];

  const sellerSteps = [
    {
      id: 1,
      icon: <Package className="h-8 w-8" />,
      title: "List Your Products",
      description: "Upload your surplus inventory, machinery, or raw materials with detailed descriptions and competitive pricing.",
      details: "Easy-to-use listing tools, bulk upload options, and professional photography services available.",
      color: "bg-indigo-500"
    },
    {
      id: 2,
      icon: <User className="h-8 w-8" />,
      title: "Get Verified",
      description: "Complete our verification process to build trust with buyers and access premium seller features.",
      details: "Business documentation verification, quality certifications, and seller rating system.",
      color: "bg-cyan-500"
    },
    {
      id: 3,
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Manage Inquiries",
      description: "Respond to buyer inquiries, share additional details, and negotiate deals through our platform.",
      details: "Centralized inquiry management, automated responses, and lead scoring system.",
      color: "bg-emerald-500"
    },
    {
      id: 4,
      icon: <DollarSign className="h-8 w-8" />,
      title: "Secure Payments",
      description: "Receive payments securely with our escrow system and get paid quickly once orders are delivered.",
      details: "Multiple payout options, transparent fee structure, and fast settlement cycles.",
      color: "bg-rose-500"
    }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "End-to-end encryption and escrow protection"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Verified Sellers",
      description: "All sellers go through strict verification process"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Pan-India Network",
      description: "Connect with buyers and sellers across the country"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Processing",
      description: "Quick order processing and delivery coordination"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Listings", icon: <Package className="h-5 w-5" /> },
    { number: "5,000+", label: "Verified Sellers", icon: <Building2 className="h-5 w-5" /> },
    { number: "₹50Cr+", label: "Transaction Value", icon: <TrendingUp className="h-5 w-5" /> },
    { number: "15+", label: "Cities Covered", icon: <Globe className="h-5 w-5" /> }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "MetalFab Industries",
      role: "Procurement Manager",
      content: "ZeeroStock helped us find high-quality steel surplus at 30% below market rates. The verification process gave us confidence in our purchases.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "TechCorp Solutions",
      role: "Operations Head",
      content: "As a seller, I've successfully liquidated ₹2Cr worth of excess inventory through ZeeroStock. The platform is user-friendly and payments are always on time.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">How ZeeroStock Works</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            India's leading B2B marketplace for industrial surplus, raw materials, and machinery. 
            Connect, trade, and grow your business with confidence.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100"  onClick={() => Navigate("./login")}>
              <PlayCircle className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Free
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple. Secure. Efficient.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're buying or selling, our platform makes industrial trading straightforward and secure.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <Button
                variant={activeTab === 'buyers' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('buyers')}
                className="px-8 py-3 text-lg"
              >
                <Users className="h-5 w-5 mr-2" />
                For Buyers
              </Button>
              <Button
                variant={activeTab === 'sellers' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('sellers')}
                className="px-8 py-3 text-lg"
              >
                <Building2 className="h-5 w-5 mr-2" />
                For Sellers
              </Button>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'buyers' ? buyerSteps : sellerSteps).map((step, index) => (
              <div key={step.id} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -left-3 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <p className="text-sm text-gray-500">{step.details}</p>
                  </CardContent>
                </Card>
                {index < (activeTab === 'buyers' ? buyerSteps : sellerSteps).length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ZeeroStock?</h2>
            <p className="text-xl text-gray-600">Built for the modern industrial economy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of businesses across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industrial Trading?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using ZeeroStock to buy and sell industrial products efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Buying Today
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              Become a Seller
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">Free to join • No setup fees • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;