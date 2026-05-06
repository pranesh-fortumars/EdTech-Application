import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, ShieldCheck, Receipt, Download, 
  ChevronRight, AlertCircle, CheckCircle2, IndianRupee,
  Calendar, Building, History, Award
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './FeeGateway.css';

import useAuthStore from '../../store/useAuthStore';
import '../admin/AdminModules.css';

const bills = [
  { id: 'INV-2026-004', title: 'Term 2 Tuition Fee', amount: 45000, due: 'May 15, 2026', status: 'pending' },
  { id: 'INV-2026-003', title: 'Lab & Infrastructure Fee', amount: 5000, due: 'Paid', status: 'paid' },
];

const allStudentFees = [
  { id: 'STU-001', name: 'Arun Kumar', grade: '12-A', total: 50000, paid: 45000, status: 'partial' },
  { id: 'STU-002', name: 'Meena R.', grade: '11-B', total: 50000, paid: 50000, status: 'paid' },
  { id: 'STU-003', name: 'Siddharth V.', grade: '12-A', total: 50000, paid: 0, status: 'pending' },
  { id: 'STU-004', name: 'Ananya S.', grade: '10-C', total: 50000, paid: 50000, status: 'paid' },
];

const FeeGateway = () => {
  const { user } = useAuthStore();
  const { addNotification } = useNotificationStore();
  const [selectedBill, setSelectedBill] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const isAdmin = user?.role === 'admin';

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSelectedBill(null);
      addNotification('Payment successful! Transaction ID: TXN_992834', 'success');
    }, 2500);
  };

  if (isAdmin) {
    return (
      <div className="institutional-finance-monitor" style={{ padding: '2rem', background: 'var(--bg-secondary)', minHeight: '100vh', paddingTop: '6rem' }}>
        <header className="module-header flex-between mb-12">
          <div>
            <h1>Institutional <span className="text-gradient">Financial Monitor</span></h1>
            <p>Macro-scale oversight of revenue collection and scholarship disbursement.</p>
          </div>
          <div className="flex gap-4">
            <button className="btn-icon-vibrant"><Download size={20} /></button>
            <button className="btn-primary-vibrant"><CreditCard size={18} /> Initiate Batch Billing</button>
          </div>
        </header>

        <div className="pro-grid-4 mb-12">
          {[
            { label: 'Total Expected Revenue', value: '₹4.2M', icon: Building, color: 'blue' },
            { label: 'Revenue Collected', value: '₹3.1M', icon: CheckCircle2, color: 'emerald' },
            { label: 'Outstanding Dues', value: '₹1.1M', icon: AlertCircle, color: 'rose' },
            { label: 'Scholarship Impact', value: '₹450k', icon: Award, color: 'indigo' }
          ].map((stat, i) => (
            <div key={i} className="admin-card">
              <div className={`bg-${stat.color}-vibrant`} style={{ width: '40px', height: '40px', borderRadius: '0.75rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <stat.icon size={20} />
              </div>
              <p className="text-slate-400 font-bold uppercase tracking-wider" style={{ fontSize: '0.65rem', margin: 0 }}>{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800" style={{ margin: '0.25rem 0' }}>{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="pro-grid-main">
          <div className="main-content">
            <div className="admin-card">
              <h3 className="text-xl font-bold mb-8">Student Financial Ledger</h3>
              <div className="pro-table-wrapper">
                <table className="pro-table">
                  <thead>
                    <tr>
                      <th>Student ID</th>
                      <th>Full Name</th>
                      <th>Grade</th>
                      <th>Total Due</th>
                      <th>Paid Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allStudentFees.map((stu) => (
                      <tr key={stu.id}>
                        <td className="text-mono font-bold">{stu.id}</td>
                        <td className="font-bold">{stu.name}</td>
                        <td>{stu.grade}</td>
                        <td>₹{stu.total.toLocaleString()}</td>
                        <td className="text-emerald font-bold">₹{stu.paid.toLocaleString()}</td>
                        <td>
                          <span className={`badge-pro ${stu.status === 'paid' ? 'badge-emerald' : stu.status === 'partial' ? 'badge-amber' : stu.status === 'rose'}`}>
                            {stu.status.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <aside>
            <div className="admin-card bg-blue-vibrant text-white mb-6">
              <h4 className="font-black mb-4">Collection Pulse</h4>
              <div style={{ position: 'relative', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '10px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 900 }}>74%</span>
                      <p style={{ fontSize: '0.6rem', margin: 0, opacity: 0.8 }}>COLLECTED</p>
                    </div>
                 </div>
              </div>
              <p className="text-xs opacity-90 mt-4">Current collection is **12% higher** compared to the same period last year.</p>
            </div>

            <div className="admin-card">
              <h4 className="font-bold mb-6">Recent Transactions</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { user: 'Meena R.', msg: 'Paid Term 2 Fee', amount: '₹45,000', time: '10m ago' },
                  { user: 'Ananya S.', msg: 'Lab Fee Credit', amount: '₹5,000', time: '1h ago' }
                ].map((txn, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 800 }}>{txn.user}</p>
                      <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{txn.msg}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 900, color: 'var(--success)' }}>{txn.amount}</p>
                      <span className="text-slate-400 font-bold" style={{ fontSize: '0.65rem' }}>{txn.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }

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
