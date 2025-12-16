"use client";
import React, { useState } from 'react';
import { MantineProvider, Container, Paper, TextInput, PasswordInput, Button, Title, Text, Group, Stack, PinInput, Anchor, Center } from '@mantine/core';

const ForgotPasswordPage = ({ onNavigate }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Reset password:', { password });
    onNavigate('otp');
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" style={{ fontWeight: 900 }}>
        Reset Password
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Enter your new password below
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <Stack>
            <PasswordInput
              label="New Password"
              placeholder="Your new password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button fullWidth mt="xl" type="submit">
              Reset Password
            </Button>
            <Center>
              <Anchor
                component="button"
                type="button"
                c="dimmed"
                onClick={() => onNavigate('login')}
                size="sm"
              >
                Back to login
              </Anchor>
            </Center>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default ForgotPasswordPage;
