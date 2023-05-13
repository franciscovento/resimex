import { useEffect, useState } from 'react';
import { ApplicationResponse } from '../interfaces/application/applicationResponse';
import { getApplication } from '../services/application.service';

const useApplication = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(undefined);
  const [application, setApplication] = useState<ApplicationResponse>();
  useEffect(() => {
    getApplication()
      .then((resp) => {
        setApplication(resp.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(e);
        setIsLoading(false);
      });
  }, []);

  return {
    data: application,
    isLoading,
    error,
  };
};

export { useApplication };
