import { IconSidebar } from "@/components/icon-sidebar";
import { SiteHeader } from "@/components/site-header";

export default function IconsLayout({ children }: LayoutProps<"/icons">) {
  return (
    <div className="min-h-screen bg-[#141615] text-[#f0f1ed]">
      <SiteHeader />
      <div className="mx-auto grid max-w-7xl px-5 sm:px-8 lg:h-[calc(100vh-4rem)] lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 lg:overflow-hidden">
        <IconSidebar />
        <main className="scrollbar-hidden min-w-0 py-12 lg:overflow-y-auto lg:py-16">
          {children}
        </main>
      </div>
    </div>
  );
}
