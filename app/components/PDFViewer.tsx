import React from 'react';
import { Document, Page } from '@react-pdf/renderer';

interface PDFViewerProps {
  url: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
      <Document>
        <Page size="A2" style={{ minWidth: '100%', minHeight: '100vh' }}>
          <iframe
            src={url}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </Page>
      </Document>
    </div>
  );
};

export default PDFViewer;
