import { Button, Typography } from '@mui/material';
import { ElementType, FC, useState } from 'react'

type ReadMoreTextProps = {
  children?: string;
  component: ElementType;
};

const MAX_LENGTH = 80;

const ReadMoreText: FC<ReadMoreTextProps> = ({ children, ...props }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  if (!children) return;

  const isButtonShow = children.length > MAX_LENGTH;
  const text = isReadMore && isButtonShow ? `${children.slice(0, MAX_LENGTH)}...` : children;

  return (
    <>
      <Typography {...props}>
        {text}
      </Typography >
      {isButtonShow && (<Button onClick={() => setIsReadMore(!isReadMore)}>
        {isReadMore ? 'Читать больше' : 'Читать меньше'}
      </Button>)
      }
    </>
  )
}

export default ReadMoreText