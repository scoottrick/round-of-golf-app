import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../model/routes';

const RoundNotFound = () => {
  const goTo = useNavigate();
  useEffect(() => {
    const timeId = setTimeout(() => {
      goTo(AppRoutes.home);
    }, 1500);
    return () => clearTimeout(timeId);
  });

  return <div className="py-12 px-4 text-center text-3xl">Round Not Found</div>;
};

export default RoundNotFound;
