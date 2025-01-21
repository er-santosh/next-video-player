'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

const MountedProvider = ({ children }: PropsWithChildren) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );

  return <>{children}</>;
};

export default MountedProvider;
