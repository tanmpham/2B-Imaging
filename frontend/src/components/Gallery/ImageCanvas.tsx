import React, { useState } from 'react';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { GoShare } from 'react-icons/go';
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2';
import { RxText } from 'react-icons/rx';
import { SlPencil } from 'react-icons/sl';
import { VscSettings } from 'react-icons/vsc';
import Img from '../shared/Img';
import DrawCanvas from './DrawingCanvas';
import TextTool from './TextTool';
import { useGlobalContext } from '@/context/global-context'; // Import the useGlobalContext hook

const style = {
  icon: `hover:scale-[1.1] hover:text-green_1 cursor-pointer active:translate-y-[.2rem] transition-all ease-linear`,
};

const ImageCanvas = () => {
  // Use the useGlobalContext hook to access the global context
  const { previewMedia } = useGlobalContext();
  const { src } = previewMedia;

  const [isDrawing, setIsDrawing] = useState(false);
  const [textToolVisible, setTextToolVisible] = useState(false);

  const toggleDrawing = () => {
    setIsDrawing(!isDrawing);
    setTextToolVisible(false);
  };

  const handleTextSubmit = (text: string, position: { x: number, y: number }) => {
    // Handle the submitted text properties, e.g., draw text on a canvas
    console.log(`Submitted text: ${text}, Position: ${position.x}, ${position.y}`);
  };

  const handleToggleTextTool = () => {
    setTextToolVisible(!textToolVisible);
  };

  return (
    <div className={`flex h-fit relative`}>
      <div className={`ml-[1rem] w-[1040px] relative`}>
        {isDrawing ? (
          <DrawCanvas imgSrc={src} />
          {/* Display the TextTool component when textToolVisible is true */}
        ) : (
          <Img src={src} className="!object-contain rounded-[10px]" />
        )}

        {textToolVisible && (
          <TextTool onTextSubmit={handleTextSubmit} />
        )}

      </div>

      <div className="grow flex flex-col items-center justify-between mt-[1rem] mb-[.4rem]">
        <div className={`flex flex-col items-center gap-y-[1.4rem]`}>
          <HiMagnifyingGlassPlus className={`${style.icon} text-[40px]`} />
          <HiMagnifyingGlassMinus className={`${style.icon} text-[40px]`} />
          <SlPencil
            className={`${style.icon} text-[34px]`}
            onClick={toggleDrawing}
          />
          <RxText
            className={`${style.icon} text-[34px]`}
            onClick={handleToggleTextTool} // Toggle TextTool visibility
          />
          <VscSettings className={`${style.icon} text-[34px]`} />
          <GoShare className={`${style.icon} text-[34px]`} />
        </div>
        <AiOutlineExpandAlt className={`${style.icon} text-[40px]`} />
      </div>
    </div>
  );
};

export default ImageCanvas;
