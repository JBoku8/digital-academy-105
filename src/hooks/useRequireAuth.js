import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthProvider } from '../providers/AuthProvider';
import { REGISTER_PATH } from '../utils/routePaths';

export const useRequireAuth = (redirectUrl = REGISTER_PATH) => {
  const { user } = useAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(redirectUrl);
    }
  }, [user, navigate, redirectUrl]);

  return user;
};
