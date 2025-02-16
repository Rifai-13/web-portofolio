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

        {/* Konten utama yang sejajar dengan sidebar pada perangkat besar */}
        <div className="flex flex-col md:flex-row p-4 md:p-20 md:flex-1">
          {/* Konten tambahan */}
          <div className="md:full">
            <p className="text-lg mt-4 md:mt-8 text-gray-600">
              I am an Informatics Engineering student who focuses on developing
              skills in mobile and web application development. Since starting
              university, I have been interested in creating digital solutions
              that can make people&apos;s lives easier. I actively work on various
              mobile and web application development projects, which allows me to
              deepen my understanding of the latest technologies and frameworks
              used in application development. Translated with DeepL.com (free
              version)
            </p>
            <br />
            <p className="text-lg text-gray-600">
              As a developer, I always strive to deliver apps that are responsive,
              user-friendly, and efficient. My main focus is on developing mobile
              and web applications that provide the best user experience. With a
              passion for continuous learning and adapting to technological
              developments, I hope to contribute in creating useful digital
              solutions in the future.
            </p>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
