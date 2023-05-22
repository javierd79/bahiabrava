import { useEffect, useRef } from 'react';

const PDFViewer = () => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializePDFViewer = async () => {
      if (viewerRef.current) {
        const { default: WebViewer } = await import('@pdftron/webviewer');

        WebViewer(
          {
            path: '/webviewer/lib',
            initialDoc: '/files/bahia-brava-menu.pdf',
          },
          viewerRef.current
        ).then((instance) => {
          instance.UI.setTheme('dark');
        });
      }
    };

    initializePDFViewer();
  }, []);

  return (
    <div className="h-screen w-full px-5" ref={viewerRef}>
      
    </div>
  );
};

export default PDFViewer;
