import { Flex, Stack, Image } from "@chakra-ui/react";
import React from "react";
import MeetTheTeam from "../components/pageComponents/MeetTheTeam";
import BuyGoat from "../components/pageComponents/BuyGoat";
import RoadMap from "../components/pageComponents/RoadMap";
import FAQ from "../components/pageComponents/FAQ";

export default function Home() {
  return (
    <Flex justify="center" alignItems="center" w="full" p="1rem 4rem">
      <Stack maxW="1200px">
        <Image src="/nft_bull.jpg" alt="Goat Club Banner" />
        <BuyGoat />
        <RoadMap />
        <MeetTheTeam />
        <FAQ />
      </Stack>
    </Flex>
  );
}
