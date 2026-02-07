import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import "./Payment.css";

const Payment = () => {
    const [status, setStatus] = useState("");

    const handlePayment = () => {
        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
            email: "customer@example.com",
            amount: 1200 * 100,
            onSuccess: (transaction) => {
                setStatus(`Payment successful! Reference: ${transaction.reference}`);
            },
            onCancel: () => {
                setStatus("Payment was canceled.");
            },
        });
    };

    return (
        <div className="payment-page">
            <h2>Payment</h2>
            <p>Total Amount: GHS 1200</p>
            <button onClick={handlePayment}>Pay Now</button>
            {status && <p className="payment-status">{status}</p>}
        </div>
    );
};

export default Payment;
