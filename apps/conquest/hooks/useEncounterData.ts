import useSWR from 'swr';
import { Encounter } from '../types/types';
import { fetchEncounterData } from '../utils/mockEncounterApi';

export const useEncounterData = (): {
  data: Encounter | undefined;
  isLoading: boolean;
  error: any;
} => {
  const { data, error } = useSWR<Encounter>(
    'encounterData',
    fetchEncounterData
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
