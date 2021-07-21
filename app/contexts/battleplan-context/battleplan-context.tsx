import React from 'react';
import { IBattleplan } from '../../models/battleplan';
import { getListOfBattleplans } from '../../services/battleplan-service';

interface IBattleplanContextProps {
  battleplans: IBattleplan[];
  refreshData: () => void;
  refreshing: boolean;
}

export const BattleplanContext = React.createContext(
  {} as IBattleplanContextProps
);

export const BattleplanProvider: React.FC = ({ children }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [battleplans, setBattleplans] = React.useState<IBattleplan[]>([]);

  const fetchData = React.useCallback(async () => {
    setRefreshing(true);
    const data = await getListOfBattleplans();
    if (data) {
      setBattleplans(data);
    }
    setRefreshing(false);
  }, [setBattleplans]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const values = {
    battleplans,
    refreshData: fetchData,
    refreshing,
  };

  return (
    <BattleplanContext.Provider value={values}>
      {children}
    </BattleplanContext.Provider>
  );
};
