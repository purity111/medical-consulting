import React from "react";
import { SimpleGrid, Card, Text, Button, Group, Avatar, Stack } from "@mantine/core";
import patientsData from "../../mockdata/patientsData.json"; // Import the JSON file

function PatientsGallery(props) {
  const searchWord = props.searchWord;
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={{ base: 10, sm: "lg" }}
      verticalSpacing={{ base: "md", sm: "lg" }}
    >
      {patientsData
        .filter((item) => {
          return searchWord === ""
            ? item
            : item.name.toLowerCase().includes(searchWord);
        })
        .map((patient) => (
          <Card key={patient.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="center">
              <Card.Section>
                <Avatar size={70} src={patient.src} />
              </Card.Section>
            </Group>
            <Group justify="center" mt="md" mb="xs">
              <Text size="lg">{patient.name}</Text>
            </Group>
            <Group mt="md" mb="xs">
              <Stack align="flex-start" justify="flex-start" gap="xs">
                <Text size="sm">
                  <b>ID</b>: {patient.id}
                </Text>
                <Text size="sm">
                  <b>DOB</b>: {patient.dob}
                </Text>
                <Text size="sm">
                  <b>Age</b>: {patient.age}
                </Text>
                <Text size="sm">
                  <b>Gender</b>: {patient.gender}
                </Text>
                <Text size="sm">
                  <b>Nationality</b>: {patient.nationality}
                </Text>
              </Stack>
            </Group>
            <Button
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              component="a"
              href="/Patients"
            >
              View Patient
            </Button>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export default PatientsGallery;
