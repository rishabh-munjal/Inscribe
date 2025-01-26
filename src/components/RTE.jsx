import React, { useEffect, useRef } from 'react';
import conf from '../conf/conf';

export default function ScribensTextArea() {
  const textareaRef = useRef(null); 

  useEffect(() => {
 
    const script = document.createElement('script');
    script.src = "https://scribens.com/API/scribens_api.js?lang=en"; 
    script.async = true;
    script.setAttribute("data-name", "scribens");

    document.head.appendChild(script);


    return () => {
      document.head.removeChild(script);
    };
  }, []);


  const handleScribensCheck = () => {
    const apiKey = conf.scribens ; 
    if (textareaRef.current) {

      window.scribens_check(textareaRef.current.id, apiKey);
    }
  };

  return (
    <div className="w-full">
      <label htmlFor="scribens-textarea" className="inline-block mb-1 pl-1">
        Content : 
      </label>

      <textarea
        id="scribens-textarea"
        ref={textareaRef}
        rows="10"
        cols="50"
        placeholder="Type your text here..."
        className="border p-2 w-full"
      ></textarea>

      <button
        type="button"
        onClick={handleScribensCheck}
        className="mt-2 p-2 bg-indigo-600 text-white rounded"
      >
        Sprinkle Some Magic ✨
      </button>
    </div>
  );
}
