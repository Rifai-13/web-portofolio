"use client"; // Pastikan ini ada di atas jika menggunakan Next.js App Router

import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/lib/firebase"; // Import analytics dari konfigurasi Firebase
// import { LayoutDashboard } from "lucide-react";
import Dashboard from "./dashboard/page";

export default function Home() {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "Home",
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <>
      <Dashboard />
    </>
  );
}
