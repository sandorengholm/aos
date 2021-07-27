import React from 'react';
import { ISectionListData } from '../../models/shared';
import { IWarscroll } from '../../models/warscroll';
import { getListOfWarscrolls } from '../../services/warscroll-service';

interface IWarscrollContextProps {
  warscrollList: ISectionListData<IWarscroll>[];
  refreshData: () => void;
  refreshing: boolean;
}

export const WarscrollContext = React.createContext({} as IWarscrollContextProps);

export const WarscrollProvider: React.FC = ({ children }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [warscrollList, setWarscrollList] = React.useState<ISectionListData<IWarscroll>[]>([]);

  const fetchData = React.useCallback(async () => {
    setRefreshing(true);
    const data = await getListOfWarscrolls();
    if (data) {
      setWarscrollList(data);
    }
    setRefreshing(false);
  }, [setWarscrollList]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const values = {
    warscrollList,
    refreshData: fetchData,
    refreshing,
  };

  return <WarscrollContext.Provider value={values}>{children}</WarscrollContext.Provider>;
};
