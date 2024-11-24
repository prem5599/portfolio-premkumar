import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Using the exact filename as shown in your image
    const resumePath = '/premkumar_portfolio.pdf';
    
    fetch(resumePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('File not found');
        }
        return response.blob();
      })
      .then(blob => {
        // Create blob URL
        const blobUrl = window.URL.createObjectURL(blob);
        
        // Create temporary link
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'premkumar_portfolio.pdf';
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Download failed:', error);
        alert('Could not download the resume. Please try again.');
      });
  };

  return (
    <button onClick={handleDownload} className='navbutton'>
      Download Resume
    </button>
  );
};

export default DownloadButton;