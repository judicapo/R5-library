import React from 'react';
import { LoadingContainer } from './styles/loading.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const LoadingComponent = () => (
  <LoadingContainer>
    <FontAwesomeIcon color='primary'
      icon={faSpinner} pulse size='5x' />
    Cargando ...
  </LoadingContainer>
);
