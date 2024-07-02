import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Table, Thead, Tr, Th, Tbody, Td, Text, Flex } from '@chakra-ui/react';
import { Filter } from './components/Filter';
import SearchBar from './components/SearchBar';

function App() {
  const networkData = useSelector((state) => {
    if (state.filter === 'all') {
      return state.data;
    } else {
      return state.data.filter((item) => item.type === state.filter);
    }
  });
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);


  return (
    <Box p={5} className='App'>
    <SearchBar /> 
    <Flex gap='20px' p={4}>
     <Text fontSize='2xl' fontWeight={600}>Elements</Text>
     <Text fontSize='2xl' fontWeight={600}>Console</Text>
     <Text fontSize='2xl' fontWeight={600} color={'blue.200'}>Network</Text>
     <Text fontSize='2xl' fontWeight={600}>Sources</Text>
     <Text fontSize='2xl' fontWeight={600}>Performance</Text>
     <Text fontSize='2xl' fontWeight={600}>Memory</Text>
     <Text fontSize='2xl' fontWeight={600}>Application</Text>
    </Flex>
    <Filter />
    {status === 'loading' && <Text>Loading...</Text>}
    {status === 'failed' && <Text>Error: {error}</Text>}
    {networkData.length > 0 && (
      <Table variant="simple">
        <Thead>
          <Tr>
          <Th>Name</Th>
            <Th>Method</Th>
            <Th>Status</Th>
            <Th>Time</Th>
            <Th>Type</Th>
            <Th>Headers</Th>
            <Th>Payload</Th>
            <Th>Response</Th>
          </Tr>
        </Thead>
        <Tbody>
          {networkData.map((request, index) => (
            <Tr key={index}>
            <Td>{request.url}</Td>
              <Td>{request.method}</Td>
              <Td>{request.status}</Td>
              <Td>{request.time} ms</Td>
              <Td>{request.type}</Td>
              <Td>
                <Text whiteSpace="pre-wrap">{JSON.stringify(request.headers, null, 2)}</Text>
              </Td>
              <Td>
                <Text whiteSpace="pre-wrap">{request.payload}</Text>
              </Td>
              <Td>
                <Text whiteSpace="pre-wrap">{JSON.stringify(request.response, null, 2)}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    )}
  </Box>
          
  );
}

export default App;
