import AppHeader from "./components/common/AppHeader";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/button";

function App() {
  return (
    <div className="w-full h-screen">
      {/* 배너 */}
      <div className="w-full h-15 flex items-center justify-center font-xl font-semibold bg-[#4eabff]">
        <p className="text-white">
          레퍼런스로 시작하는 스몰 브랜드 브랜딩 워크숍
        </p>
      </div>
      {/* 자회사 링크 */}
      <div className="w-full h-[34px] flex items-center px-6 gap-3">
        <p className="font-bold text-sm"> notefolio</p>
        <Separator orientation="vertical" className="h-4!" />
        <p className="font-bold text-sm text-neutral-400">LOUD</p>
      </div>
      {/* 헤더 */}
      <AppHeader />
      {/* 메인 */}
      <main className="py-6">
        {/* 메인 홍보 갤러리 */}
        <section className="flex items-center gap-6 overflow-auto">
          <Skeleton className="w-[520px] h-80" />
          <Skeleton className="w-[520px] h-80" />
          <Skeleton className="w-[520px] h-80" />
          <Skeleton className="w-[520px] h-80" />
          <Skeleton className="w-[520px] h-80" />
        </section>
      </main>
    </div>
  );
}

export default App;
