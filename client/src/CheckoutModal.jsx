import React from 'react';

function CheckoutModal({ items, totalBill, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Checkout</h2>
        <div>
          {items.map(item => (
            <div key={item._id}>
              <p>{item.DressName}: Rs.{item.Prize}</p>
            </div>
          ))}
        </div>
        <p>Total Bill: Rs.{totalBill}</p>
      </div>
    </div>
  );
}

export default CheckoutModal;
