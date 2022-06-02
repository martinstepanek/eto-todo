import { FC } from 'react';
import PageError from '../components/PageError';

const NotFound: FC = () => {
  return <PageError title="404 Error - page not found" />;
};

export default NotFound;
