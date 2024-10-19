import React, { useState } from 'react';

const UpdateMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleUpdate = () => {
    // Your update logic here
    console.log("Update action performed");
    setIsOpen(false); // Close the menu after update
  };

  return (
    <div>
      <button onClick={toggleMenu}>Update</button>

      {isOpen && (
        <div className="popup-menu">
          <h3>Update Options</h3>
          <button onClick={handleUpdate}>Confirm Update</button>
          <button onClick={toggleMenu}>Cancel</button>
        </div>
      )}

      <style jsx>{`
        .popup-menu {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          padding: 10px;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default UpdateMenu;
