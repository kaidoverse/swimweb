

import React from "react";
import PaystackPop from "@paystack/inline-js";
import "./Payment.css";

const Payment = () => {
    const handlePayment = () => {
        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
            email: "customer@example.com",
            amount: 1200 * 100,
            onSuccess: (transaction) => {
                alert(`Payment successful! Reference: ${transaction.reference}`);
            },
            onCancel: () => {
                alert("Payment was canceled.");
            },
        });
    };

    return (
        <div className="payment-page">
            <h2>Payment</h2>
            <p>Total Amount: ₵1200</p>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Payment;
