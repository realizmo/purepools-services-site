'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { t, type Lang } from './i18n';

interface SiteCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  dark: boolean;
  toggleDark: () => void;
  tr: (key: keyof typeof t.en) => string;
}

const SiteContext = createContext<SiteCtx>({
  lang: 'en',
  setLang: () => {},
  dark: false,
  toggleDark: () => {},
  tr: (k) => t.en[k],
});

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('pp_lang') as Lang | null;
    const savedDark = localStorage.getItem('pp_dark');
    if (savedLang === 'es') setLangState('es');
    if (savedDark === 'true') setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('pp_dark', String(dark));
  }, [dark]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('pp_lang', l);
  };

  const toggleDark = () => setDark((d) => !d);

  const tr = (key: keyof typeof t.en): string => t[lang][key] as string;

  return (
    <SiteContext.Provider value={{ lang, setLang, dark, toggleDark, tr }}>
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
