export const initiatePayment = async (amount: number, currency = 'INR') => {
  // Placeholder for payment gateway integration
  // In production, call backend endpoint to create Stripe session
  return {
    success: true,
    paymentId: `PAY_${Date.now()}`,
    amount,
    currency,
  };
};
