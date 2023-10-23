import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import './DraggableComponent.css';  // Import the CSS file

const DashItemDrag = (props) => {
  const [zIndex, setZIndex] = useState(0);
  const [size, setSize] = useState(300);
  const [isEditing, setIsEditing] = useState(false);
  const containerRef = useRef(null);

  const handleStart = () => {
    setZIndex(zIndex + 1);
  };

  const incrementSize = () => {
    setSize(prevSize => prevSize + 10);  // Increment size by 10, adjust as needed
  };

  const decrementSize = () => {
    setSize(prevSize => Math.max(prevSize - 10, 100));  // Decrement size by 10, but not below 100
  };

  const toggleEditing = () => {
    setIsEditing(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsEditing(false);
    }
  };

  const bringToFront = () => {
    setZIndex(1000);  // Arbitrary high value to bring element to front
  };

  const sendToBack = () => {
    setZIndex(0);  // Set to zero to send element to back
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Draggable onStart={handleStart}>
      <div 
        ref={containerRef}
        style={{ width: `${size}px`, zIndex }} 
        className={`draggable-container ${isEditing ? 'is-editing' : ''}`}
      >
        <div style={{ padding: '0px', background: 'transparent', cursor: 'move', width: '100%', height: `${size}px` }}>
          {props.children}
        </div>
        <button className="edit-button" onClick={toggleEditing}>
          Edit
        </button>
        {isEditing && (
          <div style={{ position: 'absolute', top: '0', left: '0', display: 'flex' }}>
            <button onClick={decrementSize}>-</button>
            <button onClick={incrementSize}>+</button>
            <button onClick={bringToFront}>Front</button>
            <button onClick={sendToBack}>Back</button>   
          </div>
        )}
      </div>
    </Draggable>
  );

};

DashItemDrag.defaultProps = {};

DashItemDrag.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  setProps: PropTypes.func,
};

export default DashItemDrag;
