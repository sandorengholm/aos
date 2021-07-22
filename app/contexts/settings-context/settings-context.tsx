import React from 'react';
import useAsyncStorage from '../../hooks/use-async-storage';
import { initialSettings, ISettings } from '../../models/settings';

interface ISettingsContextProps {
  settings: ISettings;
  setSettings: (settings: ISettings) => void;
}

export const SettingsContext = React.createContext({} as ISettingsContextProps);

export const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useAsyncStorage<ISettings>(
    'settings',
    initialSettings
  );

  const values = {
    settings,
    setSettings,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};
