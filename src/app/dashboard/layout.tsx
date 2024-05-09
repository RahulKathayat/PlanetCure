import SideNavbar from "~/components/SideBar";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="min-h-screen w-full flex">
            <SideNavbar />
            <div className="p-8 w-full">
                {children}
            </div>
        </div>
    );
  }
  