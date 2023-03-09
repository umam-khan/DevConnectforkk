import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Box
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiCoffee,
    FiInbox,
    FiSend
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './NavItem'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export default function Sidebar() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [navSize, changeNavSize] = useState(isTabletOrMobile?'small':'large')
    const navigate = useNavigate();
    const [active,setActive] = useState(0);
    return (
        <Flex
            pos="sticky"
            left="5"
            h="90vh"
            marginTop="0"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            bgColor={'#F5F7F7'}
            fontFamily='Poppins'

        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
            {!isTabletOrMobile && 
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
            }
                <Box w={'100%'} onClick={()=>{setActive(0); navigate('/home')}}>
                    <NavItem navSize={navSize} icon={FiHome} title="Home"  active={active==0?true:false}/>
                </Box>

                <Box w={'100%'} onClick={()=>{setActive(1);navigate('/home/')}}>
                <NavItem navSize={navSize} icon={FiCoffee} title="Filtered" active={active==1?true:false} />
                </Box>
                <Box w={'100%'} onClick={()=>{setActive(2);navigate('/home/explore')}}>
                <NavItem navSize={navSize} icon={FiUser} title="Explore" active={active==2?true:false}  />
                </Box>
                <Box w={'100%'} onClick={()=>setActive(3)}>
                <NavItem navSize={navSize} icon={FiInbox} title="My Threads" active={active==3?true:false} />
                </Box>
                <Box w={'100%'} onClick={()=>setActive(4)}>
                <NavItem navSize={navSize} icon={FiSend} title="Applications" active={active==4?true:false} />
                </Box>
            </Flex>

        </Flex>
    )
}