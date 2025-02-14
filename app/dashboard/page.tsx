import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

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
            <section className="max-w-2xl mx-auto mt-4 md:mt-20 md:ml-20">
              <p className="text-sm md:text-base text-card-foreground leading-relaxed text-gray-600">
              Saya adalah seorang mahasiswa yang berfokus pada bidang rekayasa perangkat lunak (RPL), khususnya dalam frontend development. Sejak awal saya memasuki dunia pemrograman, saya menemukan ketertarikan besar dalam menciptakan antarmuka pengguna yang interaktif dan responsif. Saya menguasai berbagai framework modern seperti React.js, Next.js, dan Vue.js, yang memungkinkan saya untuk membangun aplikasi web yang efisien dan mudah dikelola.
              </p>
              <p className="text-sm md:text-base text-card-foreground leading-relaxed text-gray-600">
              Dengan React.js, saya mengembangkan aplikasi berbasis komponen yang dinamis, sementara Next.js membantu saya menciptakan aplikasi dengan server-side rendering (SSR) dan static site generation (SSG) untuk performa optimal. Vue.js juga menjadi pilihan saya untuk membangun aplikasi yang fleksibel dengan sintaks yang sederhana dan mudah dipahami. Ketiga framework ini saya gunakan untuk memberikan pengalaman pengguna yang mulus dan meningkatkan kecepatan serta SEO pada aplikasi yang saya kembangkan.
              </p>
              <p className="text-sm md:text-base text-card-foreground leading-relaxed text-gray-600">
              Selain fokus pada studi, saya juga terus mengasah keterampilan melalui proyek-proyek mandiri dan tantangan pengembangan perangkat lunak. Saya percaya bahwa eksplorasi mandiri dan eksperimen dengan teknologi baru adalah cara terbaik untuk berkembang dalam industri yang cepat berubah ini. Dengan dedikasi dan antusiasme tinggi, saya berkomitmen untuk terus menghadirkan solusi digital inovatif dan relevan di dunia frontend development.
              </p>
            </section>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}