import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useNotificationStore from '../store/useNotificationStore';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const ToastContainer = () => {
  const { notifications, removeNotification } = useNotificationStore();

  return (
    <div className="toast-container">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={`toast-item ${n.type}`}
          >
            {n.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            <span>{n.message}</span>
            <button onClick={() => removeNotification(n.id)} className="toast-close">
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
