import { Flex, Image } from "@chakra-ui/react";
import { Image as NextImage } from "next/image";
import { AiFillHome, AiOutlineLock } from "react-icons/ai";
import { CgStack } from "react-icons/cg";
import { FaRegBuilding, FaRegHandshake } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Icon } from "@chakra-ui/react";

const Navbar = (props) => {
  return (
    <Flex
      as="nav"
      justify="space-between"
      flexDir="column"
      height="100%"
      align="center"
      {...props}
    >
      <Image
        marginTop="80%"
        borderRadius="full"
        boxSize="16"
        objectFit="cover"
        as={NextImage}
        src={
          "https://www.epicscotland.com/wp-content/uploads/2019/09/Business-Headshot-Women-006.jpg"
        }
        alt="Profile Picture"
      ></Image>
      <Icon as={AiFillHome} w={10} h={9} color="#323232" />
      <Icon as={CgStack} w={10} h={9} color="#323232" />
      <Icon as={FaRegBuilding} w={10} h={9} color="#323232" />
      <Icon as={FaRegHandshake} w={10} h={9} color="#323232" />
      <Icon as={AiOutlineLock} w={10} h={9} color="#323232" />

      <Flex marginTop="80%" marginBottom="110%">
        <Icon as={IoIosLogOut} w={10} h={9} color="#323232" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
