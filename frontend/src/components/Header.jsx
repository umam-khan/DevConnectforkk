import {
    Container,
    Box,
    Avatar,
    Button,
    HStack,
    VStack,
    Image,
    Input,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Link,
    MenuDivider,
    useColorModeValue
    } from "@chakra-ui/react"
    
    const IconButton = ({ children }) => {
    return (
    <Button
    padding="0.4rem"
    width="auto"
    height="auto"
    borderRadius="100%"
    bg="transparent"
    _hover={{ bg: "#f6f6f6" }}
    >
    {children}
    </Button>
    )
    }
    
    const Header = () => {
    return (
    <Box
    py="2"
    boxShadow="sm"
    border="0 solid #e5e7eb"
    position="fixed"
    top="0"
    bg={useColorModeValue("gray.100", "gray.700")}
    width="100%"
    zIndex="1"
    >
    <Container maxW="1280px" px={4} mx="auto">
    <HStack spacing={4}>
    <Image
    alt="dev logo"
    w={"auto"}
    h={12}
    src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
    />
    <Input
    maxW="26rem"
    placeholder="Search..."
    borderColor={useColorModeValue("gray.300", "white")}
    borderRadius="5px"
    d={{ base: "none", md: "block" }}
    />
    <Spacer />
    <HStack spacing={3}>
    <Button
    color="#fff"
    rounded="md"
    bg="#3b49df"
    _hover={{ bg: "#323ebe" }}
    >
    Create a post
    </Button>
    <IconButton>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    role="img"
    aria-labelledby="ap1tc5wqdskeg9i5jtulggx2n8axe0vz"
    >
    <title id="ap1tc5wqdskeg9i5jtulggx2n8axe0vz">
    Notifications
    </title>
    <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
    </svg>
    </IconButton>
    <Menu isLazy>
    <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
    <Avatar
    size="sm"
    src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
    />
    </MenuButton>
    <MenuList
    zIndex={5}
    border="2px solid"
    borderColor={useColorModeValue("gray.700", "gray.100")}
    boxShadow="4px 4px 0"
    >
    <Link
    href="https://dev.to/m_ahmad"
    _hover={{ textDecoration: "none" }}
    isExternal
    >
    <MenuItem>
    <VStack justify="start" alignItems="left">
    <Text fontWeight="500">Umam</Text>
    <Text size="sm" color="gray.500" mt="0 !important">
    @u_khan
    </Text>
    </VStack>
    </MenuItem>
    </Link>
    <MenuDivider />
    <MenuItem>
    <Text fontWeight="500">My Dashboard</Text>
    </MenuItem>
    <MenuItem>
    <Text fontWeight="500">Create Post</Text>
    </MenuItem>
    <MenuItem>
    <Text fontWeight="500">Update Profile</Text>
    </MenuItem>
    <MenuItem>
    <Text fontWeight="500">Settings</Text>
    </MenuItem>
    <MenuDivider />
    <MenuItem>
    <Text fontWeight="500">Sign Out</Text>
    </MenuItem>
    </MenuList>
    </Menu>
    </HStack>
    </HStack>
    </Container>
    </Box>
    )
    }
    
    export default Header
// import {
//     Box,
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     Stack,
//     Collapse,
//     Icon,
//     Link,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useBreakpointValue,
//     useDisclosure
//   } from "@chakra-ui/react"
//   import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon
//   } from "@chakra-ui/icons" 
  
//   export default function Header() {
//     const { isOpen, onToggle } = useDisclosure()
  
//     return (
//       <Box>
//         <Flex
//           bg={useColorModeValue("white", "gray.800")}
//           color={useColorModeValue("gray.600", "white")}
//           minH={"60px"}
//           py={{ base: 2 }}
//           px={{ base: 4 }}
//           borderBottom={1}
//           borderStyle={"solid"}
//           borderColor={useColorModeValue("gray.200", "gray.900")}
//           align={"center"}
//         >
//           <Flex
//             flex={{ base: 1, md: "auto" }}
//             ml={{ base: -2 }}
//             display={{ base: "flex", md: "none" }}
//           >
//             <IconButton
//               onClick={onToggle}
//               icon={
//                 isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//               }
//               variant={"ghost"}
//               aria-label={"Toggle Navigation"}
//             />
//           </Flex>
//           <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
//             <Text
//               textAlign={useBreakpointValue({ base: "center", md: "left" })}
//               fontFamily={"heading"}
//               color={useColorModeValue("gray.800", "white")}
//             >
//               Logo
//             </Text>
  
//             <Flex display={{ base: "none", md: "flex" }} ml={10}>
//               <DesktopNav />
//             </Flex>
//           </Flex>
  
//           <Stack
//             flex={{ base: 1, md: 0 }}
//             justify={"flex-end"}
//             direction={"row"}
//             spacing={6}
//           >
//             <Button
//               as={"a"}
//               fontSize={"sm"}
//               fontWeight={400}
//               variant={"link"}
//               href={"#"}
//             >
//               Sign In
//             </Button>
//             <Button
//               as={"a"}
//               display={{ base: "none", md: "inline-flex" }}
//               fontSize={"sm"}
//               fontWeight={600}
//               color={"white"}
//               bg={"pink.400"}
//               href={"#"}
//               _hover={{
//                 bg: "pink.300"
//               }}
//             >
//               Sign Up
//             </Button>
//           </Stack>
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity>
//           <MobileNav />
//         </Collapse>
//       </Box>
//     )
//   }
  
//   const DesktopNav = () => {
//     const linkColor = useColorModeValue("gray.600", "gray.200")
//     const linkHoverColor = useColorModeValue("gray.800", "white")
//     const popoverContentBgColor = useColorModeValue("white", "gray.800")
  
//     return (
//       <Stack direction={"row"} spacing={4}>
//         {NAV_ITEMS.map(navItem => (
//           <Box key={navItem.label}>
//             <Popover trigger={"hover"} placement={"bottom-start"}>
//               <PopoverTrigger>
//                 <Link
//                   p={2}
//                   href={navItem.href ?? "#"}
//                   fontSize={"sm"}
//                   fontWeight={500}
//                   color={linkColor}
//                   _hover={{
//                     textDecoration: "none",
//                     color: linkHoverColor
//                   }}
//                 >
//                   {navItem.label}
//                 </Link>
//               </PopoverTrigger>
  
//               {navItem.children && (
//                 <PopoverContent
//                   border={0}
//                   boxShadow={"xl"}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={"xl"}
//                   minW={"sm"}
//                 >
//                   <Stack>
//                     {navItem.children.map(child => (
//                       <DesktopSubNav key={child.label} {...child} />
//                     ))}
//                   </Stack>
//                 </PopoverContent>
//               )}
//             </Popover>
//           </Box>
//         ))}
//       </Stack>
//     )
//   }
  
//   const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//       <Link
//         href={href}
//         role={"group"}
//         display={"block"}
//         p={2}
//         rounded={"md"}
//         _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//       >
//         <Stack direction={"row"} align={"center"}>
//           <Box>
//             <Text
//               transition={"all .3s ease"}
//               _groupHover={{ color: "pink.400" }}
//               fontWeight={500}
//             >
//               {label}
//             </Text>
//             <Text fontSize={"sm"}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={"all .3s ease"}
//             transform={"translateX(-10px)"}
//             opacity={0}
//             _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//             justify={"flex-end"}
//             align={"center"}
//             flex={1}
//           >
//             <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Link>
//     )
//   }
  
//   const MobileNav = () => {
//     return (
//       <Stack
//         bg={useColorModeValue("white", "gray.800")}
//         p={4}
//         display={{ md: "none" }}
//       >
//         {NAV_ITEMS.map(navItem => (
//           <MobileNavItem key={navItem.label} {...navItem} />
//         ))}
//       </Stack>
//     )
//   }
  
//   const MobileNavItem = ({ label, children, href }) => {
//     const { isOpen, onToggle } = useDisclosure()
  
//     return (
//       <Stack spacing={4} onClick={children && onToggle}>
//         <Flex
//           py={2}
//           as={Link}
//           href={href ?? "#"}
//           justify={"space-between"}
//           align={"center"}
//           _hover={{
//             textDecoration: "none"
//           }}
//         >
//           <Text
//             fontWeight={600}
//             color={useColorModeValue("gray.600", "gray.200")}
//           >
//             {label}
//           </Text>
//           {children && (
//             <Icon
//               as={ChevronDownIcon}
//               transition={"all .25s ease-in-out"}
//               transform={isOpen ? "rotate(180deg)" : ""}
//               w={6}
//               h={6}
//             />
//           )}
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//           <Stack
//             mt={2}
//             pl={4}
//             borderLeft={1}
//             borderStyle={"solid"}
//             borderColor={useColorModeValue("gray.200", "gray.700")}
//             align={"start"}
//           >
//             {children &&
//               children.map(child => (
//                 <Link key={child.label} py={2} href={child.href}>
//                   {child.label}
//                 </Link>
//               ))}
//           </Stack>
//         </Collapse>
//       </Stack>
//     )
//   }
  
//   const NAV_ITEMS = [
//     {
//       label: "Inspiration",
//       children: [
//         {
//           label: "Explore Design Work",
//           subLabel: "Trending Design to inspire you",
//           href: "#"
//         },
//         {
//           label: "New & Noteworthy",
//           subLabel: "Up-and-coming Designers",
//           href: "#"
//         }
//       ]
//     },
//     {
//       label: "Find Work",
//       children: [
//         {
//           label: "Job Board",
//           subLabel: "Find your dream design job",
//           href: "#"
//         },
//         {
//           label: "Freelance Projects",
//           subLabel: "An exclusive list for contract work",
//           href: "#"
//         }
//       ]
//     },
//     {
//       label: "Learn Design",
//       href: "#"
//     },
//     {
//       label: "Hire Designers",
//       href: "#"
//     }
//   ]
  