import { useNavigate } from 'react-router-dom';
import { useTimeout } from '../../hooks/useTimeout';
import { AppRoutes } from '../../model/routes';

const RoundNotFound = () => {
  const goTo = useNavigate();
  useTimeout(1500, () => goTo(AppRoutes.home));

  return <div className="py-12 px-4 text-center text-3xl">Round Not Found</div>;
};

export default RoundNotFound;
