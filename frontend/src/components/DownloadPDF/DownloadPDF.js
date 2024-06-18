import React from 'react';
import { jsPDF } from 'jspdf';
import './DownloadPDF.css';

const DownloadPDF = ({ tasks }) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Task List', 10, 10);

    tasks.forEach((task, index) => {
      const taskDescription = task.description;
      const taskStatus = task.completed ? 'Completed' : 'Pending';
      doc.text(`${index + 1}. ${taskDescription} - ${taskStatus}`, 10, 20 + (index * 10));
    });

    doc.save('tasks.pdf');
  };

  return (
    <div className="download-pdf-container">
      <button className="download-pdf-button" onClick={handleDownload}>
        Download Tasks as PDF
      </button>
    </div>
  );
};

export default DownloadPDF;
