export const showAlert = (message, type = 'success') => {
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
      existingAlert.remove();
    }
  
    const alertElement = document.createElement('div');
    alertElement.className = `alert alert-${type}`;
    
    alertElement.innerHTML = `
      <div class="alert-content">
        <span>${message}</span>
      </div>
    `;
    
    Object.assign(alertElement.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '15px 20px',
      borderRadius: '4px',
      backgroundColor: type === 'success' ? '#4CAF50' : '#f44336',
      color: 'white',
      fontWeight: 'bold',
      zIndex: '1000',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      animation: 'slideIn 0.5s ease-out'
    });
  
    if (!document.getElementById('alertStyles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'alertStyles';
      styleSheet.textContent = `
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  
    document.body.appendChild(alertElement);
    
    setTimeout(() => {
      alertElement.style.animation = 'slideOut 0.5s ease-out';
      setTimeout(() => {
        alertElement.remove();
      }, 500);
    }, 5000);
  };