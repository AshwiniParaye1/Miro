interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="text-xs bg-red-500 p-1 text-white">
        I am a reusable navbar
      </nav>
      {children}
    </div>
  );
};

export default Layout;
