import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Navigation } from '@/components/layout/Navigation';
import { useBookingStore } from '@/store/bookingStore';

export function Payment() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { updateBookingStatus } = useBookingStore();

  const { bookingId, amount } = location.state || {};

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
      .slice(0, 19);
  };

  const formatExpiry = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .slice(0, 5);
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Update booking status
    if (bookingId) {
      updateBookingStatus(bookingId, 'confirmed');
    }
    
    setIsProcessing(false);
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-20">
          <div className="mx-auto max-w-md px-4 py-12">
            <Card>
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                  Payment Successful!
                </h2>
                <p className="mt-2 text-gray-600">
                  Your booking has been confirmed. You will receive a confirmation email shortly.
                </p>
                <div className="mt-6 w-full">
                  <Button
                    className="w-full bg-[#4382FF]"
                    onClick={() => navigate('/dashboard')}
                  >
                    Go to Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('customer.payment.title')}</h1>

          {/* Progress Steps */}
          <div className="mb-8 mt-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
              <CheckCircle className="h-5 w-5" />
            </div>
            <span className="text-sm text-gray-600">Details</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4382FF] text-sm font-bold text-white">
              2
            </div>
            <span className="text-sm font-medium">Payment</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600">
              3
            </div>
            <span className="text-sm text-gray-600">Confirmation</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">
                      {t('customer.payment.secure')}
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="cardNumber">{t('customer.payment.cardNumber')}</Label>
                      <div className="relative mt-2">
                        <CreditCard className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="cardNumber"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                          placeholder="1234 5678 9012 3456"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">{t('customer.payment.expiry')}</Label>
                        <Input
                          id="expiry"
                          value={expiry}
                          onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                          placeholder="MM/YY"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc">{t('customer.payment.cvc')}</Label>
                        <Input
                          id="cvc"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value.slice(0, 3))}
                          placeholder="123"
                          className="mt-2"
                          type="password"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold">Order Summary</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service</span>
                      <span>{amount} zł</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platform Fee</span>
                      <span>0 zł</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{amount} zł</span>
                    </div>
                  </div>

                  <Button
                    className="mt-6 w-full bg-[#4382FF] hover:bg-[#0066CC]"
                    disabled={!cardNumber || !expiry || !cvc || isProcessing}
                    onClick={handleSubmit}
                  >
                    {isProcessing ? 'Processing...' : t('customer.payment.pay', { amount: `${amount} zł` })}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
