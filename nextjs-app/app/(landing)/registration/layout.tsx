const RegistrationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-screen h-fit relative flex place-items-center
     flex items-center justify-center flex justify center items-center h-screen w-full"
    >
      {children}
    </div>
  );
};

export default RegistrationLayout;
