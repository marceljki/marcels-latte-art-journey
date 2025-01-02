import fs from 'fs';
import path from 'path';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Box, Grid, Heading, Image } from '@chakra-ui/react';

export const loader = async () => {
    const photosDir = path.join(process.cwd(), 'public', 'photos');
    const files = fs.readdirSync(photosDir);
    const photos = files.map((file) => `/photos/${file}`);
    return json(photos);
};

export default function Photos() {
    const photos: string[] = useLoaderData();

    return (
        <Box maxW="1200px" mx="auto" p={5}>
            <Heading as="h1" mb={6} textAlign="center" fontSize="2xl" color="teal.500">
                Photo Gallery
            </Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
                {photos.map((photo, index) => (
                    <Box
                        key={index}
                        boxShadow="lg"
                        borderRadius="md"
                        overflow="hidden"
                        width="200px"
                        height="200px"
                    >
                        <Image
                            boxSize="200px"
                            src={photo}
                            alt={`Photo ${index + 1}`}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                ))}
            </Grid>
        </Box>
    );
}
