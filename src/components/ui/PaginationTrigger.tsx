import { usePaginationObserver } from '@/hooks/usePaginationObserver'
import { Box } from '@mui/material';
import { FC, useRef } from 'react';

interface PaginationTriggerProps {
  isLoading: boolean;
  canLoad: boolean;
  onChange: () => void;
};

const PaginationTrigger: FC<PaginationTriggerProps> = ({
  isLoading,
  canLoad,
  onChange,
}) => {
  const triggerRef = useRef(null);

  usePaginationObserver(triggerRef, isLoading, canLoad, onChange);

  return <Box ref={triggerRef}></Box>;
}

export default PaginationTrigger
