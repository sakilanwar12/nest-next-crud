"use client";
import React, { useState } from 'react';
import { MantineProvider, Container, Paper, TextInput, PasswordInput, Button, Title, Text, Group, Stack, PinInput, Anchor, Center } from '@mantine/core';
const ChangePasswordPage = ({ onNavigate }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Please fill in all fields!');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    if (currentPassword === newPassword) {
      alert('New password must be different from current password!');
      return;
    }
    console.log('Change password:', { currentPassword, newPassword });
    alert('Password changed successfully!');
    onNavigate('login');
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" style={{ fontWeight: 900 }}>
        Change Password
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Enter your current password and choose a new one
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack>
          <PasswordInput
            label="Current Password"
            placeholder="Your current password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <PasswordInput
            label="New Password"
            placeholder="Your new password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <PasswordInput
            label="Confirm New Password"
            placeholder="Confirm your new password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button fullWidth mt="xl" onClick={handleSubmit}>
            Change Password
          </Button>
          <Center>
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => onNavigate('login')}
              size="sm"
            >
              Cancel
            </Anchor>
          </Center>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ChangePasswordPage;