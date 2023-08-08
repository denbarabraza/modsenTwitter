import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getAlertSelector } from '@/store/selectors/appSelectors.ts';
import { setAlert } from '@/store/slice/appSlice.ts';

import { Message } from './styles';

export const Alert = () => {
  const dispatch = useAppDispatch();

  const deafaultAlertValue = {
    isVisible: false,
    message: '',
  };

  const { isVisible, message } = useAppSelector(getAlertSelector);
  const visibilityAlertTime = 5000;

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(
      () => dispatch(setAlert(deafaultAlertValue)),
      visibilityAlertTime,
    );

    return () => clearTimeout(timer);
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return <Message>{message}</Message>;
};
