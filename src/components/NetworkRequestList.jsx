import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRequest } from '../redux/action.js';
import { List, ListItem, Text } from '@chakra-ui/react';

export const NetworkRequestList = () => {
    const dispatch = useDispatch();
    const requests = useSelector((state) => state.requests);
    const filter = useSelector((state) => state.filter);

    const filteredRequests = requests.filter((request) => filter === 'all' || request.type === filter);

    return (
        <List spacing={3} textAlign={'left'}>
            {filteredRequests.map((request, index) => (
                <ListItem key={index}
                    cursor="pointer"
                    onClick={() => dispatch(setSelectedRequest(request))}
                    p={2}
                    borderRadius="md"
                    _hover={{ bg: 'blue.200' }}
                    px={'5%'} py='5px'
                    boxShadow='md' >
                    <Text fontWeight="bold">{request.url}</Text>
                    <Text fontWeight="bold" >{`${request.method} - ${request.status}`}</Text>        
                </ListItem>
            ))}
        </List>
    );
};





