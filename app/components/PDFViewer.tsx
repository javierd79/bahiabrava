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
          instance.UI.hideFormFieldIndicators();
          instance.UI.disableElements(['downloadButton', 'viewControlsButton', 'searchButton', 'leftPanelButton', 'annotationCommentButton', 'toolsButton', 'menuButton', 'ribbons']);
        });
      }
    };

    initializePDFViewer();
  }, []);

  return (
    <div 
      ref={viewerRef} 
      className="w-full px-5 z-20" 
      style={{
        height: 'calc(90vh - 8rem)'
      }} 
    />
  );
};

export default PDFViewer;
