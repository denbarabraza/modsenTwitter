import {
  appSlice,
  ModalStatusEnum,
  setAlert,
  setTheme,
} from '../../src/store/slice/appSlice';
import { IAppInitialState } from '../../src/store/slice/interfaces';
import { ThemeEnum } from '../../src/theme/types';

describe('appSlice', () => {
  test('setTheme should update the theme state', () => {
    const initialState: IAppInitialState = {
      theme: ThemeEnum.Light,
      isLoading: false,
      alert: { isVisible: false, message: '' },
      modalStatus: ModalStatusEnum.Closed,
    };
    const expectedState: IAppInitialState = {
      theme: ThemeEnum.Dark,
      isLoading: false,
      alert: { isVisible: false, message: '' },
      modalStatus: ModalStatusEnum.Closed,
    };
    const action = setTheme(ThemeEnum.Dark);

    const newState = appSlice.reducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  test('setAlert should update the alert state', () => {
    const initialState: IAppInitialState = {
      theme: ThemeEnum.Light,
      isLoading: false,
      alert: { isVisible: false, message: '' },
      modalStatus: ModalStatusEnum.Closed,
    };
    const expectedState: IAppInitialState = {
      theme: ThemeEnum.Light,
      isLoading: false,
      alert: { isVisible: true, message: 'Alert message' },
      modalStatus: ModalStatusEnum.Closed,
    };
    const action = setAlert({ isVisible: true, message: 'Alert message' });

    const newState = appSlice.reducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});
