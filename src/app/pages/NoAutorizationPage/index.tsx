import * as React from 'react';
import NullState from 'app/components/NullState/NullState';

export function NoAuthorizationPage({path:string}) {
  return (
    <>
      <NullState message="You are not authorized to access this page." />
    </>
  );
}
