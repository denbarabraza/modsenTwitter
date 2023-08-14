import { FC, memo, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalContent, ModalItem } from '@/components/Modal/styled.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getModalStatusSelector } from '@/store/selectors/appSelectors.ts';
import { setModalStatus } from '@/store/slice/appSlice.ts';

export interface IModal {
  children: ReactNode;
}

export const Modal: FC<IModal> = memo(({ children }) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(getModalStatusSelector);

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return createPortal(
    <ModalItem open={isModalOpen} onClick={handleCloseModal}>
      <ModalContent open={isModalOpen} onClick={event => event.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalItem>,
    document.body,
  );
});
