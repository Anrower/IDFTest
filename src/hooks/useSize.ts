import { useMemo } from 'react';

export const useBtnSize = (screenInnerWidth: number): 'small' | 'large' => {
  return useMemo(() => {
    return screenInnerWidth < 480 ? 'small' : 'large';
  }, [screenInnerWidth])
}

export const useFieldSize = (screenInnerWidth: number): 'small' | 'medium' => {
  return useMemo(() => {
    return screenInnerWidth < 480 ? 'small' : 'medium';
  }, [screenInnerWidth])
}

export const useInputLabelSize = (screenInnerWidth: number): 'small' | 'normal' => {
  return useMemo(() => {
    return screenInnerWidth < 480 ? 'small' : 'normal';
  }, [screenInnerWidth])
}


