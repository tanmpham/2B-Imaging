import React, { useState, useRef, useEffect } from 'react';

interface TextToolProps {
  onTextSubmit: (text: string, position: { x: number, y: number }) => void;
}

const TextTool: React.FC<TextToolProps> = ({ onTextSubmit }) => {
  const [text, setText] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const textInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Focus on the text input when the component mounts
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleSubmit = () => {
    // Validate input and submit text properties
    if (text.trim() !== '') {
      onTextSubmit(text, position);
      // Clear input field after submission
      setText('');
    }
  };

  return (
    <div>
      <label>
        Text:
        <input
          ref={textInputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onMouseDown={handleMouseDown} // Allow clicking to set the text position
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit Text</button>
    </div>
  );
};

export default TextTool;
