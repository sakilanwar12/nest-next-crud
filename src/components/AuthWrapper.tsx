function AuthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="sm:min-w-[420px] w-full">{children}</div>
    </div>
  );
}

export default AuthWrapper;
