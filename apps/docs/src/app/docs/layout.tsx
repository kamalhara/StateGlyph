import { DocsSidebar } from "@/components/docs-sidebar";
import { SiteHeader } from "@/components/site-header";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#141615] text-[#f0f1ed]">
      <SiteHeader />
      <div className="mx-auto grid max-w-7xl px-5 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        <DocsSidebar />
        <main className="min-w-0 py-12 lg:py-16">{children}</main>
      </div>
    </div>
  );
}
