import React, {Fragment, ReactNode} from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  title?: string;
}

const Tab = (props: Props) => {
  const {children} = props;

  return <Fragment>{children}</Fragment>;
};

export default Tab;
