"use client";
import React, { useState } from 'react';
import { MantineProvider, Container, Paper, TextInput, PasswordInput, Button, Title, Text, Group, Stack, PinInput, Anchor, Center } from '@mantine/core';

const RegisterPage = ({ onNavigate }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register:', { username, email, password });
    alert('Registration submitted!');
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" style={{ fontWeight: 900 }}>
        Create Account
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component="button" onClick={() => onNavigate('login')}>
          Sign in
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Username"
              placeholder="Your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button fullWidth mt="xl" type="submit">
              Sign up
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterPage;