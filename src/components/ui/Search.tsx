import COLORS from '@/styles/colors';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FC, KeyboardEventHandler, useRef } from 'react';

type SearchProps = {
  defaultValue?: string;
  onChange: (query: string) => void;
};

export const Search: FC<SearchProps> = ({ defaultValue = '', onChange }) => {
  const ref = useRef<HTMLInputElement>(null);

  const onKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === 'Enter' && ref.current) {
      submit(ref.current?.value || '');
    }
  };
  
  const submit = (value: string): void => {
    onChange(value);
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '5px',
      backgroundColor: COLORS.white,
      width: '60%',
      padding: '.3rem 1rem',
      margin: '0 auto',
      height: '3.5rem',
    }}>
      <InputBase
        inputRef={ref}
        onKeyDown={onKeyDown}
        defaultValue={defaultValue}
        placeholder='Поиск по объявлениям'
        inputProps={{ 'aria-label': 'search' }}
        sx={{
          width: '100%'
        }}
      />
      <Box
        component={'button'}
        sx={{
          height: '100%',
          padding: '.3rem',
          '&:hover svg': {
            fill: COLORS.additional,
          }
        }}
        onClick={() => submit(ref.current?.value || '')}
      >
        <SearchIcon sx={{transition: 'fill .3s ease-in-out'}} />
      </Box>
    </Box>
  );
}