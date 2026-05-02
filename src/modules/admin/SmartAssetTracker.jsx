import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Wifi, AlertTriangle, CheckCircle2, 
  MapPin, Activity, HardDrive, RefreshCw,
  Search, Filter, Settings, Info
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './AssetTracker.css';

const initialAssets = [
  { id: 'IOT-SB-001', name: 'Smart Board - Class 12A', location: 'Block A, Floor 2', status: 'Online', battery: 85, health: 98 },
  { id: 'IOT-SB-002', name: 'Smart Board - Class 11B', location: 'Block B, Floor 1', status: 'Warning', battery: 12, health: 92 },
  { id: 'IOT-PC-045', name: 'Lab PC - Station 45', location: 'Computer Lab 1', status: 'Offline', battery: 0, health: 45 },
  { id: 'IOT-LB-012', name: 'Physics Lab Equip - Kit 12', location: 'Science Block', status: 'Online', battery: 92, health: 100 },
];

const SmartAssetTracker = () => {
  const { addNotification } = useNotificationStore();
  const [assets, setAssets] = useState(initialAssets);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshAssets = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      addNotification('Asset telemetry synchronized successfully.', 'success');
    }, 2000);
  };

  return (
    <div className="asset-tracker-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>IoT Smart Campus Tracking</h1>
          <p>Real-time telemetry and health monitoring for institutional assets.</p>
        </div>
        <div className="action-group">
          <button className="btn-outline" onClick={refreshAssets}>
            <RefreshCw className={isRefreshing ? 'animate-spin' : ''} size={16} /> Refresh Telemetry
          </button>
          <button className="btn-primary" onClick={() => addNotification('Opening new asset registration...', 'success')}>
            Add New Asset
          </button>
        </div>
      </header>

      <div className="stats-row">
        {[
          { icon: Database, label: 'Total Assets', value: '452', color: 'blue' },
          { icon: Wifi, label: 'Active Sensors', value: '389', color: 'emerald' },
          { icon: AlertTriangle, label: 'Critical Alerts', value: '3', color: 'rose' }
        ].map((stat, i) => (
          <div key={i} className="card stat-mini">
            <div className={`icon ${stat.color}`}><stat.icon size={18} /></div>
            <div className="text">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="asset-list card border-blue">
        <div className="table-container">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Asset Identity</th>
                <th>Physical Location</th>
                <th>Telemetry Status</th>
                <th>Power Level</th>
                <th>Node Health</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id}>
                  <td>
                    <div className="asset-id">
                      <strong>{asset.name}</strong>
                      <span>{asset.id}</span>
                    </div>
                  </td>
                  <td>
                    <div className="location">
                      <MapPin size={12} /> {asset.location}
                    </div>
                  </td>
                  <td>
                    <div className={`status-pill ${asset.status.toLowerCase()}`}>
                      {asset.status === 'Online' ? <Activity size={12} /> : <AlertTriangle size={12} />}
                      {asset.status}
                    </div>
                  </td>
                  <td>
                    <div className="power-meter">
                      <div className="bar"><div className={`fill ${asset.battery < 20 ? 'low' : ''}`} style={{ width: `${asset.battery}%` }}></div></div>
                      <span>{asset.battery}%</span>
                    </div>
                  </td>
                  <td>
                    <div className={`health-badge ${asset.health < 50 ? 'critical' : ''}`}>
                      {asset.health}%
                    </div>
                  </td>
                  <td>
                    <div className="action-row">
                      <button className="btn-icon" onClick={() => addNotification(`Opening diagnostic report for ${asset.id}`)}><Info size={14} /></button>
                      <button className="btn-icon" onClick={() => addNotification(`Opening asset configuration...`)}><Settings size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SmartAssetTracker;
