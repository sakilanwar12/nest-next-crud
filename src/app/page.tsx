import {
  Anchor,
  Container,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import AuthLoginForm from "./auth/AuthLoginForm";

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="sm:min-w-[420px] w-full">
        <Container size={420} my={40}>
          <Title ta="center">Welcome back!</Title>

          <Text ta="center">
            Do not have an account yet? <Anchor>Create account</Anchor>
          </Text>

          <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
            <AuthLoginForm />
          </Paper>
        </Container>
      </div>
    </div>
  );
}
export default Home;
