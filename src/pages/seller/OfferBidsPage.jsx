import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Check, X, Reply, DollarSign, Package, Clock } from 'lucide-react'; // Icons
import SellerSidebar from "./SellerSidebar";

const OffersBidsPage = () => {
  const navigate = useNavigate();

  // Dummy data for offers/bids
  const [offers, setOffers] = useState([
    {
      id: 'OFF-001',
      listingId: 'LST-001',
      productName: 'High-Grade Steel Coils',
      buyer: 'Bharat Steels',
      type: 'Offer',
      amount: '₹52,000 / Ton',
      quantity: '100 Tons',
      status: 'Pending',
      date: '2024-07-22',
    },
    {
      id: 'BID-001',
      listingId: 'LST-003',
      productName: 'Industrial Bearings (SKF)',
      buyer: 'Precision Mech',
      type: 'Bid',
      amount: '₹850 / Piece',
      quantity: '500 Pieces',
      status: 'Pending',
      date: '2024-07-21',
    },
    {
      id: 'OFF-002',
      listingId: 'LST-002',
      productName: 'Electronic Microcontrollers',
      buyer: 'Digital Systems',
      type: 'Offer',
      amount: '₹110 / Unit',
      quantity: '5000 Units',
      status: 'Pending',
      date: '2024-07-20',
    },
    {
      id: 'OFF-003',
      listingId: 'LST-005',
      productName: 'CNC Machine Spares',
      buyer: 'Advanced Mfg. Co.',
      type: 'Offer',
      amount: '₹14,000 / Lot',
      quantity: '1 Lot',
      status: 'Accepted',
      date: '2024-07-19',
    },
    {
      id: 'BID-002',
      listingId: 'LST-001',
      productName: 'High-Grade Steel Coils',
      buyer: 'SteelCorp',
      type: 'Bid',
      amount: '₹53,000 / Ton',
      quantity: '100 Tons',
      status: 'Rejected',
      date: '2024-07-18',
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState(null); // 'accept', 'reject', 'counter'
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [counterAmount, setCounterAmount] = useState('');

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Pending':
        return 'yellow';
      case 'Accepted':
        return 'green';
      case 'Rejected':
        return 'red';
      case 'Countered':
        return 'blue';
      default:
        return 'default';
    }
  };

  const handleAction = (action, offer) => {
    setSelectedOffer(offer);
    setDialogAction(action);
    setIsDialogOpen(true);
    if (action === 'counter') {
      setCounterAmount(offer.amount.replace(/[^0-9.]/g, '')); // Pre-fill with current amount
    }
  };

  const confirmAction = () => {
    if (!selectedOffer) return;

    let updatedOffers = offers.map(o => {
      if (o.id === selectedOffer.id) {
        if (dialogAction === 'accept') {
          return { ...o, status: 'Accepted' };
        } else if (dialogAction === 'reject') {
          return { ...o, status: 'Rejected' };
        } else if (dialogAction === 'counter') {
          return { ...o, status: 'Countered', amount: `₹${parseFloat(counterAmount).toLocaleString('en-IN')} / ${selectedOffer.quantity.split(' ')[1]}` };
        }
      }
      return o;
    });
    setOffers(updatedOffers);

    console.log(`${dialogAction} action confirmed for offer ${selectedOffer.id}`);
    // In a real app, dispatch Redux action or API call to update offer status
    alert(`Offer ${selectedOffer.id} ${dialogAction}ed!`); // Replace with Shadcn Toast/Dialog
    setIsDialogOpen(false);
    setSelectedOffer(null);
    setCounterAmount('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/5">
          <SellerSidebar activeRoute="/seller/offers-bids" />
        </div>

        {/* Main Content */}
        <div className="w-4/5 pl-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <Card className="p-6 rounded-lg shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <DollarSign className="h-6 w-6 mr-2" /> Offers & Bids
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Review and respond to offers and bids on your active listings.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {offers.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <p className="text-lg mb-4">No offers or bids received yet.</p>
                    <Button onClick={() => navigate('/seller/list-new-item')}>
                      List Your First Item
                    </Button>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Buyer</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {offers.map((offer) => (
                        <TableRow key={offer.id}>
                          <TableCell className="font-medium">
                            <a href={`/product/${offer.listingId}`} className="text-blue-600 hover:underline">
                              {offer.productName}
                            </a>
                          </TableCell>
                          <TableCell>{offer.buyer}</TableCell>
                          <TableCell>{offer.type}</TableCell>
                          <TableCell>{offer.amount}</TableCell>
                          <TableCell>{offer.quantity}</TableCell>
                          <TableCell>
                            <Badge variant={getStatusVariant(offer.status)} className="rounded-full px-2 py-1">
                              {offer.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{offer.date}</TableCell>
                          <TableCell className="text-right">
                            {offer.status === 'Pending' && (
                              <>
                                <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-800" onClick={() => handleAction('accept', offer)}>
                                  <Check className="h-4 w-4 mr-1" /> Accept
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800 ml-2" onClick={() => handleAction('reject', offer)}>
                                  <X className="h-4 w-4 mr-1" /> Reject
                                </Button>
                                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 ml-2" onClick={() => handleAction('counter', offer)}>
                                  <Reply className="h-4 w-4 mr-1" /> Counter
                                </Button>
                              </>
                            )}
                            {(offer.status === 'Accepted' || offer.status === 'Countered') && (
                              <Button variant="ghost" size="sm" onClick={() => navigate(`/seller/order-details/${offer.id}`)}>
                                View Order
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          {/* Dialog content remains same */}
        </DialogContent>
      </Dialog>
    </div>
  )
};

export default OffersBidsPage;
