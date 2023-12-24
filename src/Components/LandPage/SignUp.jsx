import { useState } from 'react';
import { Stepper, Button, Group, Grid, Center, Stack, Title } from '@mantine/core';
import SignUpForm from './SignUpForm';
import { useMediaQuery } from '@mantine/hooks';

function SignUp() {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const isMobile = useMediaQuery(`(max-width: 1200px)`);

    return (
        <>
            <Grid mt={100}>
                <Grid.Col span={isMobile ? 12 :3}></Grid.Col>
                <Grid.Col span={isMobile ? 12 :6}>
                    <Stepper active={active} size={isMobile ? "xs" : "lg"}>
                        <Stepper.Step label="First step" description="Patient Information" si>
                            <Stack>
                                <SignUpForm label1="First Name" placeholder1="First Name..."
                                    label2="Last Name" placeholder2="Last Name..."
                                />
                                <SignUpForm label1="Email" placeholder1="Email..."
                                    label2="Emirates ID" placeholder2="Emirates ID..."
                                />
                                <SignUpForm label1="Contacr Number" placeholder1="Contacr Number..."
                                    label2="Emergency Contact" placeholder2="Emergency Contact..."
                                />
                                <SignUpForm label1="Date of birth" placeholder1="Date of birth..."
                                    label2="Gender" placeholder2="Gender..."
                                />
                            </Stack>
                        </Stepper.Step>
                        <Stepper.Step label="Second step" description="Create Password">
                            <SignUpForm label1="Password" placeholder1="Password"
                                label2="Confirm Password" placeholder2="Confirm Password..."
                            />
                        </Stepper.Step>
                        <Stepper.Step label="Final step" description="Health Information">
                            <SignUpForm label1="Insurance type:" placeholder1="Insurance type.."
                                label2="Blood Type:" placeholder2="Blood type.."
                            />
                            <SignUpForm label1="Allergies:" placeholder1="Allergies.."
                                label2="Additional Note:" placeholder2="Additional Note:..."
                            />
                        </Stepper.Step>
                        <Stepper.Completed>
                            <Center>
                                <Title order={isMobile ? 4 :2}>Completed, account has been created successfully!</Title>
                            </Center>

                        </Stepper.Completed>
                    </Stepper>

                    <Group justify="center" mt="xl">
                        <Button variant="default" onClick={prevStep}>Back</Button>
                        <Button onClick={nextStep}>Next step</Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </>
    );
}
export default SignUp;
