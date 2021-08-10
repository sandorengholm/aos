import React from 'react';
import { IFaction } from '../../models/faction';
import { ISectionListData } from '../../models/shared';
import { getListOfFactions } from '../../services/faction-service';

interface IFactionContextProps {
  factionList: ISectionListData<IFaction>[];
  refreshData: () => void;
  refreshing: boolean;
}

export const FactionContext = React.createContext({} as IFactionContextProps);

export const FactionProvider: React.FC = ({ children }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [factionList, setFactionList] = React.useState<ISectionListData<IFaction>[]>([]);

  const fetchData = React.useCallback(async () => {
    setRefreshing(true);
    const data = await getListOfFactions();
    if (data) {
      setFactionList(data);
    }
    setRefreshing(false);
  }, [setFactionList]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const values = {
    factionList,
    refreshData: fetchData,
    refreshing,
  };

  return <FactionContext.Provider value={values}>{children}</FactionContext.Provider>;
};
