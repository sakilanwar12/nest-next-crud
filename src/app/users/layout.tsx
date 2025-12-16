
import AppHeader from '@/components/AppHeader';

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default UsersLayout;