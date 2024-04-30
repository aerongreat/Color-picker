import React, {useState} from 'react';
function ColorPicker(){
  
  const [color, setColor] = useState("#111");
  
  function handleColorChange(event) {
    setColor(event.target.value);
  }
  return(
    <div className="color-container">
      <h1>COLOR PICKER</h1>
      
      <div className="color-display" style={{backgroundColor: color}}>
        <h3>Displayed Color:{color}</h3>
      </div>
      <div className='label-div'>
      <label>Select color:
      <input type="color" value={color} onChange={handleColorChange} />
      </label>
      </div>
    </div>
  );
}
export default ColorPicker