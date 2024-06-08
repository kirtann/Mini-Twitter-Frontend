const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <WrappedComponent />
      </div>
    );
  };
};

export default AppLayout;
