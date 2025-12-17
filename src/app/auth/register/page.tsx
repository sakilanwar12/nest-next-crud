"use client";
import {
  Container,
  Paper,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import AuthWrapper from "@/components/AuthWrapper";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {


  return (
    <AuthWrapper>
      <Container size={420} my={40}>
        <Title ta="center" style={{ fontWeight: 900 }}>
          Create Account
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Already have an account?{" "}
          <Anchor size="sm" href="/">
            Sign in
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <RegisterForm />
        </Paper>
      </Container>
    </AuthWrapper>
  );
};

export default RegisterPage;
