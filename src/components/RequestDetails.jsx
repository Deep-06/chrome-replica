
import React from 'react';
import { useSelector } from 'react-redux';
import { Text, Container } from '@chakra-ui/react';

export const RequestDetails = () => {
  const request = useSelector((state) => state.selectedRequest);

  if (!request) return <Container mt='60px'>Select a request to see details</Container>;

  return (
    <div>
    <Container padding='15px' mt='60px' textAlign={'left'} border={'1px solid black'} backgroundColor={'blue.100'} >
      <Text fontSize='3xl' fontWeight="bold">Request Details</Text>
      <Text fontSize='medium'><strong>URL:</strong> {request.url}</Text>
      <Text fontSize='medium'><strong>Method:</strong> {request.method}</Text>
      <Text fontSize='medium'><strong>Status:</strong> {request.status}</Text>
      <Text fontSize='medium'><strong>Headers:</strong> {JSON.stringify(request.headers)}</Text>
      <Text fontSize='medium'><strong>Payload:</strong> {JSON.stringify(request.payload)}</Text>
      <Text fontSize='medium'><strong>Response:</strong> {JSON.stringify(request.response)}</Text>
      <Text fontSize='medium'><strong>Timing:</strong> {request.timing}</Text>
    </Container>
    </div>
  );
};




