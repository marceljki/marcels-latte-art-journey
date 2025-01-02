import {json, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {Flex, Box, Heading, Icon, Image, Text, VStack} from "@chakra-ui/react";
import path from "path";
import fs from "fs";
import {SiCoffeescript} from "react-icons/si";

export const meta: MetaFunction = () => {
    return [
        {title: "Latte Art Progress"},
        {name: "description", content: "Track my latte art progress over time."},
    ];
};

export const loader = async () => {
    const photosDir = path.join(process.cwd(), "public", "photos");
    const files = fs.readdirSync(photosDir);
    const photos = files.map((file) => `/photos/${file}`);
    return json(photos);
};

export default function Index() {
    const photos: string[] = useLoaderData();

    return (
        <Box maxW="600px" mx="auto" p={5} overflowY="auto" height="100vh" css={{
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {display: "none"}, // Chrome, Safari
        }}>
            <Heading as="h1" mb={6} textAlign="center" fontSize="2xl" color="teal.500">
                <Flex align="center">
                    <SiCoffeescript style={{ marginRight: "8px"}}/>
                    <Text>Marcels Latte Art Journey</Text>
                </Flex>
            </Heading>
            <VStack spacing={6}>
                {photos.map((photo, index) => (
                    <Box
                        key={index}
                        boxShadow="md"
                        borderRadius="lg"
                        overflow="hidden"
                        bg="white"
                        p={3}
                    >
                        <Image
                            src={photo}
                            alt={`Latte Art ${index + 1}`}
                            objectFit="cover"
                            width="100%"
                            borderRadius="md"
                        />
                        <Text mt={3} fontSize="sm" color="gray.500" textAlign="center">
                            Latte Art #{index + 1}
                        </Text>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
}
