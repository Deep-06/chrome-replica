import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNetworkData } from '../redux/action';
import { Input, Button, Flex } from '@chakra-ui/react';
//import axios from 'axios';

const SearchBar = () => {
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchNetworkData(url));
  };


  //   try {
  //     const response = await axios.get(`/api/fetch-network-data?url=${encodeURIComponent(url)}`);
  //     console.log('Network data received:', response.data);
  //     setNetworkData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching network data:', error);
  //   }
  // };

  return (
    <Flex mb={4}>
          <Input
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            mr={2}
          />
          <Button onClick={handleSearch}>Search</Button>
        </Flex>

  );
};

export default SearchBar;
