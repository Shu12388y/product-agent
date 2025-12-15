import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/_components/app-sidebar";
import { AuthProvider } from "@/context/auth.context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <AuthProvider>{children}</AuthProvider>
      </main>
    </SidebarProvider>
  );
}
