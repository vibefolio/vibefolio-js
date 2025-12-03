import { ChevronDown, Menu, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Input,
  Separator,
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FOOTER_CONTETNS } from "../../constants";
import { NavLink } from "react-router";

const menu = [
  {
    label: "발견",
    newest: false,
    dropdown: false,
    underline: true,
    path: "/",
  },
  {
    label: "채용",
    newest: true,
    dropdown: false,
    underline: false,
    path: "/recruit",
  },
  {
    label: "워크숍/커뮤니티",
    newest: false,
    dropdown: true,
    underline: false,
    path: "/",
  },
  {
    label: "포폴 피드백",
    newest: true,
    dropdown: false,
    underline: false,
    path: "/",
  },
  {
    label: "에이전시",
    newest: false,
    dropdown: false,
    underline: false,
    path: "/recruit",
  },
];

function AppHeader({ onSetCategory }) {
  return (
    <>
      {/* 모바일 헤더 */}
      <header className="sticky top-0 z-10 w-full flex flex-col items-center justify-between pt-3 px-4 border-b bg-white xl:hidden">
        <div className="w-full h-full flex items-center justify-between">
          <div className="w-full flex items-center gap-4">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col px-8 pb-8 gap-8 overflow-y-scroll"
              >
                <div className="flex flex-col gap-6 mt-16">
                  <img src="/logo.svg" alt="Notefolio Logo" className="w-24" />
                  <div className="flex flex-col">
                    <p className="text-sm">
                      회원가입 또는 로그인을 통해 13만개
                    </p>
                    <p className="text-sm">
                      이상의 크리에이티브를 발견하고 수집해보세요.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-[#4ACAD4] hover:bg-[#41a3aa]">
                      회원가입
                    </Button>
                    <Button variant={"outline"}>로그인</Button>
                  </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-6">
                  {menu.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`h-full flex items-center gap-1 font-medium`}
                      >
                        <p
                          className={`text-[15px] ${
                            item.underline && "mt-0.5"
                          }`}
                        >
                          {item.label}
                        </p>
                        {item.dropdown && <ChevronDown size={16} />}
                        {item.newest && (
                          <p className="text-xs text-[#05BCC6] font-medium">
                            NEW
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                <Separator />
                <div className="flex flex-col gap-6">
                  <a href="" className="text-neutral-500 text-sm">
                    서비스 소개
                  </a>
                  <a href="" className="text-neutral-500 text-sm">
                    공지사항
                  </a>
                  <a href="" className="text-neutral-500 text-sm">
                    운영정책
                  </a>
                  <a href="" className="text-neutral-500 text-sm">
                    개인정보처리방침
                  </a>
                  <a href="" className="text-neutral-500 text-sm">
                    자주묻는 질문
                  </a>
                  <a href="" className="text-neutral-500 text-sm">
                    광고상품
                  </a>
                  <a href="" className="text-neutral-500 text-sm">
                    문의하기
                  </a>
                </div>
                <Separator />
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <p>패밀리 사이트</p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                        <img
                          src="src/assets/logo.svg"
                          alt=""
                          className="w-22"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-xs font-semibold">노트폴리오</p>
                          <p className="text-xs">국내 최대 포트폴리오 플랫폼</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <img
                          src="src/assets/logo.svg"
                          alt=""
                          className="w-22"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-xs font-semibold">노트폴리오</p>
                          <p className="text-xs">국내 최대 포트폴리오 플랫폼</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <img
                          src="src/assets/logo.svg"
                          alt=""
                          className="w-22"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-xs font-semibold">노트폴리오</p>
                          <p className="text-xs">국내 최대 포트폴리오 플랫폼</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Separator />
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    {FOOTER_CONTETNS.map((item) => {
                      return (
                        <div className="flex items-center gap-4">
                          <FontAwesomeIcon icon={item.icon} />
                          <p className="text-sm">{item.label}</p>
                        </div>
                      );
                    })}
                  </div>
                  <Separator />
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold mb-3">
                      (주)스터닝 사업자 정보
                    </p>
                    <p className="text-xs text-neutral-500">
                      사업자 등록번호 : 120-87-69298
                    </p>
                    <p className="text-xs text-neutral-500">
                      직업정보제공: J1200020190003
                    </p>
                    <p className="text-xs text-neutral-500">
                      대표자명 : 김승환
                    </p>
                    <p className="text-xs text-neutral-500">
                      전화번호:070-8733-5858
                    </p>
                    <p className="text-xs text-neutral-500">
                      주소 : 서울특별시 강남구 봉은사로112길 6 2F
                    </p>
                    <p className="text-xs font-semibold mt-3">
                      ⓒ 2020 STUNNING INC.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            {/* 로고 */}
            <img src="src/assets/logo.svg" alt="@LOGO" className="w-30" />
          </div>
          <div className="flex items-center gap-4">
            {/* 로그인 */}
            <Button variant={"outline"}>로그인</Button>
            {/* 검색 */}
            <Drawer>
              <DrawerTrigger>
                <Search size={20} />
              </DrawerTrigger>
              <DrawerContent className="h-full flex flex-col gap-6 px-6">
                <div className="flex items-center border px-3 rounded-full bg-neutral-50">
                  <Search size={18} className="text-neutral-400" />
                  <Input
                    placeholder="230,000개 이상의 크리에이티브 검색"
                    onChange={(event) => onSetSearchValue(event.target.value)}
                    className="w-full placeholder:text-neutral-400 outline-0 border-none focus-visible:ring-0"
                  />
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-neutral-500 font-semibold">
                    노트폴리오 추천 검색어
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button variant={"outline"} className="rounded-full">
                      포스터
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      로고
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      브랜딩
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      리플렛
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      포트폴리오
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      상세페이지
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-neutral-500 font-semibold">
                    노트폴리오 추천 콘텐츠
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button variant={"outline"} className="rounded-full">
                      콘텐츠 01
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      콘텐츠 02
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      콘텐츠 03
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      콘텐츠 04
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      콘텐츠 05
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      콘텐츠 06
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <nav className="w-full h-14 flex items-center gap-4">
          {menu.map((item, index) => {
            return (
              <div
                key={index}
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
      </header>
      {/* 데스크탑 헤더 */}
      <header className="sticky top-0 z-10 w-full h-14 hidden xl:flex items-center justify-between px-8 border-b bg-white">
        <div className="h-full flex items-center gap-10">
          {/* 로고 */}
          <img src="src/assets/logo.svg" alt="@LOGO" className="w-30" />
          <nav className="h-full flex items-center gap-4">
            {menu.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  className={`h-full flex items-center gap-1 font-medium ${
                    item.underline &&
                    "h-[calc(100%-2px)] border-b-2 border-black"
                  }`}
                >
                  <p className={`text-[15px] ${item.underline && "mt-0.5"}`}>
                    {item.label}
                  </p>
                  {item.dropdown && <ChevronDown size={16} />}
                  {item.newest && (
                    <p className="text-xs text-[#05BCC6] font-medium">NEW</p>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center border px-3 rounded-full bg-neutral-50">
            <Search size={18} className="text-neutral-400" />
            <Input
              placeholder="230,000개 이상의 크리에이티브 검색"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSetCategory(e.target.value.replace(/\s+/g, ""));
                }
              }}
              className="w-60 placeholder:text-neutral-400 outline-0 border-none focus-visible:ring-0"
            />
          </div>
          {/* 로그인 */}
          <Button variant="link">로그인</Button>
          {/* 회원가입 */}
          <Button>회원가입</Button>
        </div>
      </header>
    </>
  );
}

export { AppHeader };
