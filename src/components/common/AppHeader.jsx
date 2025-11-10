import { ChevronDown, Search } from "lucide-react";
import { Button, Input } from "../ui";

const menu = [
  {
    label: "발견",
    newest: false,
    dropdown: false,
    underline: true,
  },
  {
    label: "채용",
    newest: true,
    dropdown: false,
    underline: false,
  },
  {
    label: "워크숍/커뮤니티",
    newest: false,
    dropdown: true,
    underline: false,
  },
  {
    label: "포폴 피드백",
    newest: true,
    dropdown: false,
    underline: false,
  },
  {
    label: "에이전시",
    newest: false,
    dropdown: false,
    underline: false,
  },
];

function AppHeader() {
  return (
    <header className="sticky top-0 z-10 w-full h-14 flex items-center justify-between px-8 border-b bg-white">
      <div className="h-full flex items-center gap-10">
        {/* 로고 */}
        <img src="src/assets/logo.svg" alt="@LOGO" className="w-30" />
        <nav className="h-full flex items-center gap-4">
          {menu.map((item) => {
            return (
              <div
                className={`h-full flex items-center gap-1 font-medium ${
                  item.underline && "h-[calc(100%-2px)] border-b-2 border-black"
                }`}
              >
                <p className={`text-[15px] ${item.underline && "mt-0.5"}`}>
                  {item.label}
                </p>
                {item.dropdown && <ChevronDown size={16} />}
                {item.newest && (
                  <p className="text-xs text-[#05BCC6] font-medium">NEW</p>
                )}
              </div>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center border px-3 rounded-full bg-neutral-50">
          <Search size={18} className="text-neutral-400" />
          <Input
            placeholder="230,000개 이상의 크리에이티브 검색"
            className="w-60 placeholder:text-neutral-400 outline-0 border-none focus-visible:ring-0"
          />
        </div>
        {/* 로그인 */}
        <Button variant="link">로그인</Button>
        {/* 회원가입 */}
        <Button>회원가입</Button>
      </div>
    </header>
  );
}

export { AppHeader };
