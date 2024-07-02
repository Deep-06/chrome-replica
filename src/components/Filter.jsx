import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNetworkFilter } from '../redux/action.js';
import { ButtonGroup, Button, Flex, Box } from '@chakra-ui/react';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);

    const handleFilterChange = (type) => {
        dispatch(setNetworkFilter(type));
    };

    return (
        <Box spacing='3'>
            {/* <Button color={'white'} p='8px' px='25px' bgColor={'black'}>Filter</Button> */}
            <Flex p={2} gap={6}>
                <Flex gap={6}>
                    <Box bgColor={'blue.100'} p={1} px={12} borderRadius={'20px'} color={'black'} textAlign={'left'}>Filter</Box>
                    <Flex alignItems={'center'} gap={2}>
                        <input type='checkbox' />
                        <label>Invert</label>
                    </Flex>
                </Flex>
                <Flex gap={6}>
                    <Flex alignItems={'center'} gap={2}>
                        <input type='checkbox' />
                        <label>Hide data URLs</label>
                    </Flex>
                    <Flex alignItems={'center'} gap={2}>
                        <input type='checkbox' />
                        <label>Hide extension URLs</label>
                    </Flex>
                </Flex>
            </Flex>
            <Box textAlign={'left'}>
            <ButtonGroup variant="outline" spacing="3" >
                {['All', 'Fetch/XHR', 'Doc', 'CSS', 'JS', 'html', 'Font', 'Img', 'Media', 'Manifest', 'WS', 'Wasm', 'Other'].map((type) => (
                    <Button
                        key={type}
                        colorScheme={filter === type ? 'blue' : 'white'}
                        onClick={() => handleFilterChange(type)}

                    >
                        {type}
                    </Button>
                ))}
            </ButtonGroup>
            </Box>
            <Flex gap={12} p={2}>
                <Flex alignItems={'center'} gap={2}>
                    <input type='checkbox' />
                    <label>Blocked response cookies</label>
                </Flex>
                <Flex alignItems={'center'} gap={2}>
                    <input type='checkbox' />
                    <label>Blocked requests</label>
                </Flex>
                <Flex alignItems={'center'} gap={2}>
                    <input type='checkbox' />
                    <label>3rd-party requests</label>
                </Flex>
            </Flex>
        </Box>

    );
};


