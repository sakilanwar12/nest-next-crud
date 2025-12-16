"use client"
import React, { useState } from 'react';
import { MantineProvider, Container, Paper, TextInput, Button, Title, Table, Modal, Group, Stack, Select, Badge, ActionIcon, Text } from '@mantine/core';
import { Edit, Trash2, Plus } from 'lucide-react';

const UserModule = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', city: 'New York', phone: '+1234567890', status: 'active', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'Los Angeles', phone: '+1987654321', status: 'blocked', role: 'User' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', city: 'Chicago', phone: '+1122334455', status: 'active', role: 'User' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', city: 'Houston', phone: '+1555666777', status: 'active', role: 'Manager' },
  ]);

  const [modalOpened, setModalOpened] = useState(false);
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    status: 'active',
    role: 'User'
  });

  const handleOpenModal = (user = null) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        name: user.name,
        email: user.email,
        city: user.city,
        phone: user.phone,
        status: user.status,
        role: user.role
      });
    } else {
      setEditingUser(null);
      setFormData({
        name: '',
        email: '',
        city: '',
        phone: '',
        status: 'active',
        role: 'User'
      });
    }
    setModalOpened(true);
  };

  const handleCloseModal = () => {
    setModalOpened(false);
    setEditingUser(null);
    setFormData({
      name: '',
      email: '',
      city: '',
      phone: '',
      status: 'active',
      role: 'User'
    });
  };

  const handleSubmit = () => {
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...formData } : u));
      alert('User updated successfully!');
    } else {
      const newUser = {
        id: users.length + 1,
        ...formData
      };
      setUsers([...users, newUser]);
      alert('User created successfully!');
    }
    handleCloseModal();
  };

  const handleOpenDeleteModal = (user) => {
    setDeletingUser(user);
    setDeleteModalOpened(true);
  };

  const handleDelete = () => {
    setUsers(users.filter(u => u.id !== deletingUser.id));
    alert('User deleted successfully!');
    setDeleteModalOpened(false);
    setDeletingUser(null);
  };

  const rows = users.map((user) => (
    <Table.Tr key={user.id}>
      <Table.Td>{user.id}</Table.Td>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{user.city}</Table.Td>
      <Table.Td>{user.phone}</Table.Td>
      <Table.Td>{user.role}</Table.Td>
      <Table.Td>
        <Badge color={user.status === 'active' ? 'green' : 'red'}>
          {user.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon color="blue" variant="light" onClick={() => handleOpenModal(user)}>
            <Edit size={16} />
          </ActionIcon>
          <ActionIcon color="red" variant="light" onClick={() => handleOpenDeleteModal(user)}>
            <Trash2 size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="xl" my={40}>
      <Paper withBorder shadow="md" p={30} radius="md">
        <Group justify="space-between" mb="xl">
          <Title order={2}>User Management</Title>
          <Button leftSection={<Plus size={16} />} onClick={() => handleOpenModal()}>
            Add User
          </Button>
        </Group>

        <Table striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>City</Table.Th>
              <Table.Th>Phone</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Paper>

      {/* Create/Update User Modal */}
      <Modal
        opened={modalOpened}
        onClose={handleCloseModal}
        title={editingUser ? 'Edit User' : 'Create New User'}
        size="md"
      >
        <Stack>
          <TextInput
            label="Name"
            placeholder="Enter name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextInput
            label="Email"
            placeholder="Enter email"
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextInput
            label="City"
            placeholder="Enter city"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <TextInput
            label="Phone"
            placeholder="Enter phone number"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <Select
            label="Role"
            placeholder="Select role"
            required
            value={formData.role}
            onChange={(value) => setFormData({ ...formData, role: value })}
            data={[
              { value: 'Admin', label: 'Admin' },
              { value: 'Manager', label: 'Manager' },
              { value: 'User', label: 'User' }
            ]}
          />
          <Select
            label="Status"
            placeholder="Select status"
            required
            value={formData.status}
            onChange={(value) => setFormData({ ...formData, status: value })}
            data={[
              { value: 'active', label: 'Active' },
              { value: 'blocked', label: 'Blocked' }
            ]}
          />
          <Group justify="flex-end" mt="md">
            <Button variant="default" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {editingUser ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        opened={deleteModalOpened}
        onClose={() => setDeleteModalOpened(false)}
        title="Delete User"
        size="sm"
      >
        <Stack>
          <Text>
            Are you sure you want to delete user <strong>{deletingUser?.name}</strong>? This action cannot be undone.
          </Text>
          <Group justify="flex-end" mt="md">
            <Button variant="default" onClick={() => setDeleteModalOpened(false)}>
              Cancel
            </Button>
            <Button color="red" onClick={handleDelete}>
              Delete
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Container>
  );
};
export default UserModule;