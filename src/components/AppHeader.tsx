"use client";
import {
  Container,
  Title,
  Group,
  ActionIcon,
  Text,
  Avatar,
  Menu,
  UnstyledButton,
} from "@mantine/core";
import {
  User,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

const AppHeader = () => {

  return (
    <div
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e9ecef",
        padding: "1rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container size="xl">
        <Group justify="space-between">
          <Group>
            <Title order={3} style={{ color: "#228be6" }}>
              MyApp
            </Title>
          </Group>

          <Group gap="lg">
            <ActionIcon variant="subtle" size="lg">
              <Bell size={20} />
            </ActionIcon>

            <Menu shadow="md" width={200}>
              <Menu.Target>
                <UnstyledButton>
                  <Group gap="sm">
                    <Avatar color="blue" radius="xl">
                      JD
                    </Avatar>
                    <div style={{ flex: 1 }}>
                      <Text size="sm" fw={500}>
                        John Doe
                      </Text>
                      <Text size="xs" c="dimmed">
                        john@example.com
                      </Text>
                    </div>
                  </Group>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Account</Menu.Label>
                <Menu.Item leftSection={<User size={14} />}>Profile</Menu.Item>
                <Menu.Item leftSection={<Settings size={14} />}>
                  Settings
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<LogOut size={14} />} color="red">
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </Container>
    </div>
  );
};

export default AppHeader;
