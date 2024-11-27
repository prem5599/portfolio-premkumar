import React from 'react';

const DownloadButton = () => {
  const handleDownload1 = () => {
    const resumePath = 'Prem_resume.pdf';
    
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Prem_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload1} className='navbutton' >
      Download Resume
    </button>
  );
};

export default DownloadButton;