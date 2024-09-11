import { useAdvertisementsStore } from '@/stores/useAdvertisementsStore';
import { Search } from '../ui/Search';
import { FC } from 'react';

const AdvertisementsSearch: FC = () => {
  const search = useAdvertisementsStore(({ search }) => search);
  const setSearch = useAdvertisementsStore(({ setSearch }) => setSearch);

  return <Search defaultValue={search} onChange={(search) => setSearch(search)} />;
}

export default AdvertisementsSearch