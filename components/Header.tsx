import { Button, Flex, HStack, Image, Link, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import ThemeToggle from "./ThemeToggle";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <HStack maxW="1200px" m="1rem 4rem" spacing="2rem">
      <Link href="/">
        <Image maxW="10rem" maxH="5rem" src="/logo.png" alt="Goat Club Logo" />
      </Link>
      <Spacer />
      <Button variant="link" onClick={() => router.push("/#buyGoat")}>
        Buy a Goat
      </Button>
      <Button variant="link" onClick={() => router.push("/#roadmap")}>
        Roadmap
      </Button>
      <Button variant="link" onClick={() => router.push("/gallery")}>
        Gallery
      </Button>
      <Button variant="link" onClick={() => router.push("/#team")}>
        Team
      </Button>
      <Button variant="link" onClick={() => router.push("/#FAQ")}>
        FAQ
      </Button>
      <ThemeToggle />
    </HStack>
  );
};

export default Header;
