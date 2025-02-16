import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-col md:flex-row">
          <SidebarInset className="w-full md:w-auto">
            <AppSidebar />
          </SidebarInset>
          <div className="flex-1 p-4 md:p-6">
            {/* Konten tambahan */}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}