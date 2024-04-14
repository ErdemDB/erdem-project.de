import { useState } from 'react';
import { FileControllerApi } from '../../../api-client';

function useDownloadPdf() {
  const [error, setError] = useState<Error | null>(null);

  const downloadPdf = async () => {
    try {
      const api = new FileControllerApi();
      const blob = await api.downloadPdf();
      setError(null);
    
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = url;
      link.setAttribute('download', 'Lebenslauf_Erdem_Bedel.pdf');
      document.body.appendChild(link);
      link.click();
      
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    }
  };

  return { downloadPdf, error };
}

export default useDownloadPdf;
