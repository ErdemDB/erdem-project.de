import { useState } from 'react';
import { MailControllerApi, SendMailRequest, MailDTO } from '../../../api-client';

function useMailSender() {
  const [error, setError] = useState<Error | null>(null);

  const sendMail = async (mailDTO: MailDTO) => {
    try {
      const api = new MailControllerApi();
      const requestParameters: SendMailRequest = { mailDTO };
      await api.sendMail(requestParameters);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    }
  };

  return { sendMail, error };
}

export default useMailSender;