import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  HelpCircle, 
  FileText, 
  Headphones,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  BookOpen,
  Video,
  Download
} from 'lucide-react';

const SupportContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    priority: 'medium'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log('Support ticket submitted:', formData);
  };

  const supportChannels = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+91 8000 123456",
      availability: "Mon-Fri, 9 AM - 7 PM IST",
      color: "bg-green-500"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "support@zeerostock.com",
      availability: "24/7 - Response within 4 hours",
      color: "bg-blue-500"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Instant help through live chat",
      contact: "Available on website",
      availability: "Mon-Fri, 9 AM - 7 PM IST",
      color: "bg-purple-500"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Call Support",
      description: "Screen sharing and video assistance",
      contact: "Schedule a call",
      availability: "By appointment only",
      color: "bg-orange-500"
    }
  ];

  const quickHelp = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Knowledge Base",
      description: "Browse our comprehensive help articles",
      link: "View Articles"
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "Watch Videos"
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "User Manual",
      description: "Download complete platform guide",
      link: "Download PDF"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Community Forum",
      description: "Connect with other users",
      link: "Join Forum"
    }
  ];

  const faqItems = [
    {
      question: "How do I verify my business account?",
      answer: "Upload your business registration documents, GST certificate, and complete the KYC process. Verification typically takes 24-48 hours."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support bank transfers, UPI, credit cards, and escrow payments for secure transactions."
    },
    {
      question: "How is product quality ensured?",
      answer: "All sellers go through verification, products can be inspected before purchase, and we offer quality guarantees."
    },
    {
      question: "What are the platform fees?",
      answer: "We charge a small commission on successful transactions. Listing products is completely free."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your support request has been submitted successfully. Our team will get back to you within 4 hours.
            </p>
            <div className="space-y-3">
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '', email: '', company: '', phone: '', 
                    subject: '', category: '', message: '', priority: 'medium'
                  });
                }}
                className="w-full"
              >
                Submit Another Request
              </Button>
              <Button variant="outline" className="w-full">
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Support</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Need help? Our dedicated support team is here to assist you with any questions or issues. 
            Get expert help to make the most of your ZeeroStock experience.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <MessageSquare className="h-5 w-5 mr-2" />
              Start Live Chat
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="h-5 w-5 mr-2" />
              Call Support
            </Button>
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-lg text-gray-600">Choose the support channel that works best for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className={`${channel.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mx-auto mb-4`}>
                    {channel.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{channel.title}</CardTitle>
                  <CardDescription className="text-sm">{channel.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-medium text-gray-900 mb-2">{channel.contact}</p>
                  <p className="text-sm text-gray-500 mb-4">{channel.availability}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Send className="h-6 w-6 mr-2 text-blue-600" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter company name"
                        className="rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Support Category</Label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a category</option>
                        <option value="account">Account & Verification</option>
                        <option value="technical">Technical Issues</option>
                        <option value="payment">Payment & Billing</option>
                        <option value="listing">Product Listing</option>
                        <option value="order">Order Management</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority Level</Label>
                      <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Brief description of your issue or question"
                      className="rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Please provide detailed information about your query, including any error messages, steps you've taken, or specific assistance you need..."
                      className="rounded-md resize-none"
                    />
                    <p className="text-sm text-gray-500">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-gray-600">
                        <p className="font-medium mb-1">Privacy Notice</p>
                        <p>Your information is secure with us. We use it only to respond to your support request and improve our services.</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Help */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-blue-600" />
                  Quick Help
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickHelp.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded text-blue-600">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Office Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-gray-900">Head Office</p>
                  <p className="text-sm text-gray-600">
                    ZeeroStock Technologies Pvt Ltd<br />
                    Block A, Tech Park<br />
                    Sector 18, Gurugram<br />
                    Haryana 122015, India
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-600">Mon-Fri: 9:00 AM - 7:00 PM IST</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-600">+91 8000 123456</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-600">support@zeerostock.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <Headphones className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Average Response Time</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-1"> 4 Hours</p>
                  <p className="text-sm text-gray-600">For email support</p>
                  <Badge variant="secondary" className="mt-2">
                    24/7 Support Available
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <HelpCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContactPage;