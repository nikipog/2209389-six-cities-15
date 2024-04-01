import type { ActionCreatorsMapObject } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import { useDispatch, useSelector, useStore } from 'react-redux';

import type { store } from '../store';
import type { AppDispatch, RootState } from '../types/store';

const useAppDispatch = useDispatch<AppDispatch>;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppStore: () => typeof store = useStore;

const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

export { useActionCreators, useAppDispatch, useAppSelector, useAppStore };


