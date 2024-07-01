import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUrl } from '../redux/action';
import { Input, Button, Flex } from '@chakra-ui/react';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputUrl, setInputUrl] = useState('');

//   const handleSearch = () => {
//     if (!inputUrl.startsWith('http')) {
//       setInputUrl('http://' + inputUrl);
//     }
//     dispatch(setUrl(inputUrl));
//   };

  const handleSearch = () => {
    const proxyUrl = `http://localhost:3001/proxy?target=${encodeURIComponent(inputUrl)}`;
    dispatch(setUrl(proxyUrl));
  };

  return (
    <Flex mb={4}>
      <Input
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        placeholder="Enter URL"
        mr={2}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Flex>
  );
};

export default SearchBar;
