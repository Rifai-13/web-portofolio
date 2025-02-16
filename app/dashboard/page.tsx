import { AppSidebar } from "@/components/app-sidebar";
// import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col md:flex-row w-full">
        {/* Sidebar yang tetap tampil di perangkat kecil */}
        <SidebarInset className="w-full md:w-1/2 flex flex-col md:flex-row">
          <AppSidebar />
        </SidebarInset>

        {/* Konten utama yang berada di bawah sidebar pada perangkat kecil dan di samping pada perangkat besar */}
        <div className="flex-1 p-4 md:p-6 mt-4 md:mt-0">
          {/* Konten tambahan */}
          <div className="h-[calc(100svh-theme(spacing.4))]">Konten Tambahan</div>
          <h1>Dashboard</h1>
        </div>
      </SidebarProvider>
    </div>
  );
}

