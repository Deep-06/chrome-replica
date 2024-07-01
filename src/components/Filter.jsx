import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/action.js';
import { ButtonGroup, Button } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <ButtonGroup variant="outline" spacing="3">
      {['all', 'fetch', 'xhr', 'css', 'js', 'doc', 'font', 'media', 'img'].map((type) => (
        <Button
          key={type}
          colorScheme={filter === type ? 'blue' : 'gray'}
          onClick={() => handleFilterChange(type)}
        >
          {type.toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  );
};


