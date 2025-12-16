"use client";
import React, { useState } from 'react';
import { MantineProvider, Container, Paper, TextInput, PasswordInput, Button, Title, Text, Group, Stack, PinInput, Anchor, Center } from '@mantine/core';

const OTPVerificationPage = ({ onNavigate }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP:', otp);
    alert(`OTP ${otp} verified!`);
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" style={{ fontWeight: 900 }}>
        Verify OTP
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Enter the 6-digit code sent to your email
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <Stack>
            <Center>
              <PinInput
                length={6}
                size="lg"
                type="number"
                value={otp}
                onChange={setOtp}
                placeholder=""
              />
            </Center>
            <Button fullWidth mt="xl" type="submit" disabled={otp.length !== 6}>
              Verify OTP
            </Button>
            <Group justify="center" mt="md">
              <Text size="sm" c="dimmed">
                Didn't receive code?{' '}
                <Anchor size="sm" component="button" type="button">
                  Resend
                </Anchor>
              </Text>
            </Group>
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

export default OTPVerificationPage;
