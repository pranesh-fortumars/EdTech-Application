import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, ShieldCheck, Receipt, Download, 
  ChevronRight, AlertCircle, CheckCircle2, IndianRupee,
  Calendar, Building, History
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './FeeGateway.css';

const bills = [
  { id: 'INV-2026-004', title: 'Term 2 Tuition Fee', amount: 45000, due: 'May 15, 2026', status: 'pending' },
  { id: 'INV-2026-003', title: 'Lab & Infrastructure Fee', amount: 5000, due: 'Paid', status: 'paid' },
];

const FeeGateway = () => {
  const { addNotification } = useNotificationStore();
  const [selectedBill, setSelectedBill] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSelectedBill(null);
      addNotification('Payment successful! Transaction ID: TXN_992834', 'success');
    }, 2500);
  };

  return (
    <div className="fee-gateway-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>Financial Portal</h1>
          <p>Institutional billing and payment gateway for **AuraEd**.</p>
        </div>
        <div className="header-stats">
          <div className="mini-stat">
            <span>Outstanding Balance</span>
            <strong>₹45,000</strong>
          </div>
        </div>
      </header>

      <div className="gateway-grid">
        <div className="billing-section card">
          <div className="section-header">
            <h3>Invoice History</h3>
            <button className="btn-icon"><History size={16} /></button>
          </div>
          
          <div className="bill-list">
            {bills.map((bill) => (
              <div 
                key={bill.id} 
                className={`bill-item ${bill.status === 'paid' ? 'paid' : ''} ${selectedBill === bill.id ? 'selected' : ''}`}
                onClick={() => bill.status === 'pending' && setSelectedBill(bill.id)}
              >
                <div className="bill-info">
                  <span className="id">{bill.id}</span>
                  <h4>{bill.title}</h4>
                  <div className="meta">
                    <Calendar size={12} /> {bill.due}
                  </div>
                </div>
                <div className="bill-amount">
                  <span className="price">₹{bill.amount.toLocaleString()}</span>
                  <div className={`status-tag ${bill.status}`}>
                    {bill.status === 'paid' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                    {bill.status.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="payment-sidebar">
          <div className="card glass payment-methods">
            <h3>Secure Checkout</h3>
            <div className="method-grid">
              <div className="method active">
                <CreditCard size={20} />
                <span>Card / UPI</span>
              </div>
              <div className="method">
                <Building size={20} />
                <span>Net Banking</span>
              </div>
            </div>

            <div className="order-summary mt-2">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{selectedBill ? '45,000' : '0'}</span>
              </div>
              <div className="summary-row">
                <span>Transaction Fee (0%)</span>
                <span>₹0</span>
              </div>
              <div className="summary-total mt-1">
                <span>Total Amount</span>
                <strong>₹{selectedBill ? '45,000' : '0'}</strong>
              </div>
            </div>

            <button 
              className="btn-primary full-width mt-2" 
              disabled={!selectedBill || isProcessing}
              onClick={handlePayment}
            >
              {isProcessing ? <RefreshCw className="animate-spin" size={18} /> : <><ShieldCheck size={18} /> Pay Securely Now</>}
            </button>

            <p className="security-note">
              <ShieldCheck size={12} /> SSL Encrypted & PCI-DSS Compliant
            </p>
          </div>

          <div className="card scholarship-alert mt-2 border-emerald">
            <div className="alert-header">
              <Award className="text-emerald" size={20} />
              <h4>Scholarship Active</h4>
            </div>
            <p>Your "Merit Excellence" scholarship has reduced this term fee by **15%**.</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

const RefreshCw = ({ className, size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-refresh-cw ${className}`}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>;

export default FeeGateway;
