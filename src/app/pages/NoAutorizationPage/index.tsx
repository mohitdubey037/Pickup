import * as React from 'react';
import styled from 'styled-components';
import { P } from './P';
// import { Link } from 'app/components/Link';
import { NavBar } from 'app/components/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import NullState from 'app/components/NullState/NullState';

export function NoAuthorizationPage({path:string}) {
  return (
    <>
      <NullState message="You are not authorized to access this page." />
    </>
  );
}
