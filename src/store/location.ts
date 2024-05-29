import { create } from 'zustand'

type LocaleState = {
  city: string
  rooms?: number
  setLocation: (locale: Partial<LocaleState>) => void
}

export const useLocation = create<LocaleState>((set) => ({
  city: '',
  state: '',
  setLocation: (locale: Partial<LocaleState>) =>
    set((state: LocaleState) => ({
      ...state,
      ...locale,
    })),
}))
