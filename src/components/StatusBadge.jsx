import './components.css';

const StatusBadge = ({ status }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'low':
      case 'normal':
      case 'active':
        return 'status-low';
      case 'medium':
      case 'elevated':
      case 'pending':
        return 'status-medium';
      case 'high':
      case 'critical':
      case 'inactive':
        return 'status-high';
      default:
        return 'status-low';
    }
  };

  return (
    <span className={`status-badge ${getStatusClass(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
