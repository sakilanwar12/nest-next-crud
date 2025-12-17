import { Anchor, Container, Paper, Text, Title } from "@mantine/core";
import AuthLoginForm from "./auth/AuthLoginForm";
import AuthWrapper from "@/components/AuthWrapper";

function Home() {
  return (
    <AuthWrapper>
      <Container size={420} my={40}>
        <Title ta="center">Welcome back!</Title>

        <Text ta="center">
          Do not have an account yet?{" "}
          <Anchor href="/auth/register">Create account</Anchor>
        </Text>

        <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
          <AuthLoginForm />
        </Paper>
      </Container>
    </AuthWrapper>
  );
}
export default Home;
