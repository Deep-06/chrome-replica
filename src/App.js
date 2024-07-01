import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from './redux/action';
import { setupNetworkInterceptor } from './api/fetch';
import { Grid, Box,GridItem ,Container,Heading, Flex, VStack} from '@chakra-ui/react';
import { Filter } from './components/Filter';
import { NetworkRequestList } from './components/NetworkRequestList';
import { RequestDetails } from './components/RequestDetails';
import SearchBar from './components/SearchBar';

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.url);


  useEffect(() => {
    setupNetworkInterceptor((request) => {
      dispatch(addRequest(request));
    });
  }, [dispatch]);

  return (
      <Container className="App" maxW="container.xl" p={4}>
          <Heading as="h1" mb={4}>Network Request Monitor</Heading>
          <Flex>
           <VStack>
           <SearchBar />
          {url && (
            <Box mt={4} border="1px" borderRadius="md" borderColor="gray.200" height="600px">
              <iframe
                src={url}
                width="100%"
                height="100%"
                title="Website Preview"
                onLoad={() => console.log('Iframe loaded')}
                style={{ border: 'none' }}
              />
            </Box>
          )}
           </VStack>
          
          <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={4} width={'60%'}>
            <GridItem colSpan={2}>
              <Filter />
              <NetworkRequestList />
            </GridItem>
            <GridItem colSpan={3}>
              <RequestDetails />
            </GridItem>
          </Grid>
          </Flex>
        </Container>
  );
}

export default App;
