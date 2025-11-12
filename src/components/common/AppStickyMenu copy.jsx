import { Separator } from "../ui";
import {
  ArrowUpDown,
  Brush,
  Camera,
  ChevronRight,
  CirclePlay,
  Gem,
  IdCard,
  Layers,
  MousePointerClick,
  Package,
  Palette,
  Panda,
  PenTool,
  Sparkles,
  Type,
} from "lucide-react";

function AppStickyMenu() {
  const categories = [
    {
      icon: Layers,
      label: "전체",
      isActive: true, // 라벨 색상 통제를 위한 속성
    },
    {
      icon: CirclePlay,
      label: "영상/모션그래픽",
      isActive: false,
    },
    {
      icon: Palette,
      label: "그래픽 디자인",
      isActive: false,
    },
    {
      icon: IdCard,
      label: "브랜딩/편집",
      isActive: false,
    },
    {
      icon: MousePointerClick,
      label: "UI/UX",
      isActive: false,
    },
    {
      icon: PenTool,
      label: "일러스트레이션",
      isActive: false,
    },
    {
      icon: Camera,
      label: "디지털 아트",
      isActive: false,
    },
    {
      icon: Sparkles,
      label: "AI",
      isActive: false,
    },
    {
      icon: Panda,
      label: "캐릭터 디자인",
      isActive: false,
    },
    {
      icon: Package,
      label: "제품/패키지 디자인",
      isActive: false,
    },
    {
      icon: Camera,
      label: "포토그래피",
      isActive: false,
    },
    {
      icon: Type,
      label: "타이포그래피",
      isActive: false,
    },
    {
      icon: Gem,
      label: "공예",
      isActive: false,
    },
    {
      icon: Brush,
      label: "파인아트",
      isActive: false,
    },
  ];

  return (
    <section className="sticky top-14 z-10 w-full flex items-center justify-center py-2 gap-10 mt-20 bg-white">
      <div className="hidden 2xl:flex flex-col gap-2 shrink-0 p-5 ">
        {/* 아이콘 */}
        <ArrowUpDown className="text-neutral-700" />
        {/* 아이콘 라벨 */}
        <p className="text-sm ">정렬</p>
      </div>
      <Separator orientation="vertical" className="h-10!" />

      <div className="flex items-center gap-12 overflow-x-scroll flex-gorw pr-[200px]">
        {categories.map((category) => {
          const IconComponent = category.icon;

          return (
            <div className="flex flex-col items-center gap-2">
              <IconComponent className="text-neutral-700" />
              <p className="text-sm whitespace-nowrap">{category.label}</p>
            </div>
          );
        })}
        <div className="absolute right-0 top-0 h-full flex items-center gap-2 bg-white pl-8 ">
          <div className="h-full bg-linear-to-l from-white to-white/0 w-20 absolute left-0"></div>
          <div className="flex items-center gap-5 z-20 pr-4 shrink-0">
            <div className="text-neutral-500 p-2 rounded-full bg-neutral-100 hover:bg-neutral-300">
              <ChevronRight />
            </div>
            <Separator orientation="vertical" className="h-10!" />
            <div className="flex flex-col items-center gap-0 p-4">
              <img src="./src/assets/img-gyeonngi-do.png" className="w-10" />
              <p className="text-sm whitespace-nowrap">경기도 AI 콘텐츠</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AppStickyMenu };
