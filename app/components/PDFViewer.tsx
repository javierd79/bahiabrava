import { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

const PDFViewer = () => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewerRef.current) {
      WebViewer(
        {
          path: '/webviewer/lib',
          initialDoc: '/files/bahia-brava-menu.pdf',
        },
        viewerRef.current
      ).then((instance) => {
        instance.UI.setTheme('dark');
        instance.UI.FitMode.FitWidth = '100%';
      });
    }
  }, []);

  return (
    <div className="h-screen w-full px-5" ref={viewerRef}>
      
    </div>
  );
};

export default PDFViewer;
