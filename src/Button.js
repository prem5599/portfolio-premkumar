import React, { useState } from 'react';

const Button = ({ pdfURL, fileName = 'premkumar_portfolio.pdf' }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const downloadPDF = () => {
    if (!pdfURL) {
      console.error('PDF URL is required');
      return;
    }

    setIsLoading(true);
    
    fetch(pdfURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        
        document.body.appendChild(link);
        link.click();
        
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
        setIsLoading(false);
      });
  };

  return (
    <button 
      onClick={downloadPDF}
      disabled={isLoading}
      className={`
        px-4 py-2 rounded-lg
        ${isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}
        text-white transition-colors duration-300
      `}
    >
      {isLoading ? 'Downloading...' : 'Download PDF'}
    </button>
  );
};

export default Button;