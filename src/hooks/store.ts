import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../types/store';
import { useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
