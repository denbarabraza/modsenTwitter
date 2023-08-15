import { FC, memo, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalContent, ModalItem } from '@/components/Modal/styled.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getModalStatusSelector } from '@/store/selectors/appSelectors.ts';
import { ModalStatusEnum, setModalStatus } from '@/store/slice/appSlice.ts';

export interface IModal {
  children: ReactNode;
}

export const Modal: FC<IModal> = memo(({ children }) => {
  const dispatch = useAppDispatch();
  const modalStatus = useAppSelector(getModalStatusSelector);

  const isOpenModal = modalStatus !== ModalStatusEnum.Closed;

  const handleCloseModal = () => {
    dispatch(setModalStatus(ModalStatusEnum.Closed));
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalStatus]);

  return createPortal(
    <ModalItem open={isOpenModal} onClick={handleCloseModal}>
      <ModalContent open={isOpenModal} onClick={event => event.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalItem>,
    document.body,
  );
});
