import { Input, Button, Grid, PasswordInput, Title, Space, Group, Card } from '@mantine/core';
import { useState } from 'react';
import {useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginDoctor, setloginDoctor] = useState(false);
    const [loginAdmin, setloginAdmin] = useState(false);
    const navigate = useNavigate();
    
    function handleLogin() {
        if(email === "doctor" && password === "doctor")
            setloginDoctor(true);
        else if (email === "admin" && password === "admin")
            setloginAdmin(true);
    }

    return (
        <>
        
            <Grid mt={200}>
                <Grid.Col span={4.5}></Grid.Col>
                <Grid.Col span={3}>
                    <Card shadow="sm" withBorder radius="md">
                        <Title order={2}>Login</Title>
                        <Space h="xl" />
                        <Input.Wrapper label="Email" withAsterisk >
                            <Input
                                size="lg" 
                                placeholder="Email..."
                                onChange={(event) =>
                                setEmail(event.currentTarget.value)
                                }
                            />
                        </Input.Wrapper>
                        <Space h="lg" />
                        <Input.Wrapper label="Password" withAsterisk >
                            <PasswordInput
                                size="lg" 
                                placeholder="Password..."
                                onChange={(event) =>
                                setPassword(event.currentTarget.value)
                                }
                                />
                        </Input.Wrapper>
                        <Space h="xl" />
                        <Group gap="lg" justify="space-between">
                            <Button onClick={handleLogin}>Login</Button>
                            <Button variant="subtle">FORGET PASSWORD?</Button>
                        </Group>
                    </Card>
                </Grid.Col>
            </Grid>

            

            {loginDoctor && navigate('/doctorDashboard')}
            {loginAdmin && navigate('/adminDashboard')}
        </>
    );
}

export default Login;