import { useEffect, useState } from "react";
import axios from "axios";
// UI
import {
  AppFooter,
  AppHeader,
  AppImageDialog,
  AppStickyMenu,
} from "./components/common";
import { SkeletonImageCard } from "./components/skeleton";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  Separator,
  Skeleton,
} from "./components/ui";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Crosshair,
  WandSparkles,
} from "lucide-react";
// CONSTANTS TEST DATA
import { MENTORS, RECRUITMENTS } from "./constants";

function App() {
  const gallery = ["", "", "", "", "", "", ""];

  const [data, setData] = useState(null); // Unsplash API에서 받은 데이터 전부
  const [images, setImages] = useState([]); // Unsplash API에서 받은 데이터 전부 중 실제로 필요한 Image 데이터

  // Unsplash API 이미지 조회 함수
  const fetchApi = async () => {
    const API_KEY = "WiGPtaTl7v_Z_CMmuqp6qaLhBFOqfg8SIX_6DpWmi8k";
    const API_URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`;

    const res = await axios.get(`${API_URL}&page=1&query=korea`);
    console.log("res: ", res);

    // const 실제로필요한데이터전체 = res.data;
    setData(res.data);
    // const 스켈레톤이미지컴포넌트에서쓰일데이터 = res.data.results;
    setImages(res.data.results);
  };

  useEffect(() => {
    // 이미지 조회 함수 실행
    fetchApi();
  }, []);

  return (
    <div className="w-full">
      {/* 배너 */}
      <div className="w-full h-15 flex items-center justify-center bg-[#4EABFF] text-xl font-semibold">
        <p className="text-white">
          레퍼런스로 시작하는 스몰 브랜드 브랜딩 워크숍
        </p>
      </div>

      {/* 헤더 */}
      <AppHeader />
      <main className="w-full flex flex-col items-center py-6">
        {/* 메인 홍보 갤러리 */}
        <section className="w-full flex items-center gap-6 overflow-x-scroll">
          {gallery.map((_, index) => (
            <Skeleton key={index} className="min-w-[520px] w-[520px] h-80" />
          ))}
        </section>
        {/* STIKCY MENU */}
        <AppStickyMenu />
        {/* IMAGE LIST */}
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 mt-6 px-6 xl:px-20">
          {images.map((image, index) => (
            <AppImageDialog props={image} />
          ))}
        </section>
        {/* 포트폴리오 피드백부터 커리어 상담까지! */}
        <section className="w-full flex flex-col gap-6 py-12 px-6 lg:px-20 mt-12 bg-black">
          <h3 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">
            포트폴리오 피드백부터 커리어 상담까지!
          </h3>
          <div className="flex 2xl:hidden items-center gap-6 overflow-x-scroll">
            {/* 멘토 카드 */}
            {MENTORS.map((mentor) => {
              return (
                <Card className="min-w-[271px] w-full p-0 gap-0">
                  <div className="relative w-full">
                    <Skeleton className="w-full h-52 rounded-t-lg rounded-b-none" />
                    {mentor.job === "마케터" && (
                      <Badge className="absolute bottom-4 right-4 py-1 rounded-sm bg-blue-600">
                        <Crosshair />
                        {mentor.job}
                      </Badge>
                    )}
                    {mentor.job === "디자이너" && (
                      <Badge className="absolute bottom-4 right-4 py-1 rounded-sm bg-green-600">
                        <WandSparkles />
                        {mentor.job}
                      </Badge>
                    )}
                  </div>
                  {/* 멘토 정보 */}
                  <div className="flex flex-col gap-2 p-4">
                    <p className="text-lg font-semibold">{mentor.name} 멘토</p>
                    <Separator className="mb-1" />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <BadgeCheck
                          size={18}
                          fill="#dc2626"
                          className="text-white"
                        />
                        <p className="text-sm">{mentor.career}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {mentor.job === "마케터" && (
                          <BriefcaseBusiness
                            size={18}
                            fill="#2563eb"
                            className="text-white"
                          />
                        )}
                        {mentor.job === "디자이너" && (
                          <BriefcaseBusiness
                            size={18}
                            fill="#16a34a"
                            className="text-white"
                          />
                        )}
                        <p className="text-sm line-clamp-1">{mentor.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="hidden 2xl:grid grid-cols-6 gap-6">
            {/* 멘토 카드 */}
            {MENTORS.map((mentor) => {
              return (
                <Card className="w-full p-0 gap-0">
                  <div className="relative w-full">
                    <Skeleton className="w-full h-52 rounded-t-lg rounded-b-none" />
                    {mentor.job === "마케터" && (
                      <Badge className="absolute bottom-4 right-4 py-1 rounded-sm bg-blue-600">
                        <Crosshair />
                        {mentor.job}
                      </Badge>
                    )}
                    {mentor.job === "디자이너" && (
                      <Badge className="absolute bottom-4 right-4 py-1 rounded-sm bg-green-600">
                        <WandSparkles />
                        {mentor.job}
                      </Badge>
                    )}
                  </div>
                  {/* 멘토 정보 */}
                  <div className="flex flex-col gap-2 p-4">
                    <p className="text-lg font-semibold">{mentor.name} 멘토</p>
                    <Separator className="mb-1" />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <BadgeCheck
                          size={18}
                          fill="#dc2626"
                          className="text-white"
                        />
                        <p className="text-sm">{mentor.career}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {mentor.job === "마케터" && (
                          <BriefcaseBusiness
                            size={18}
                            fill="#2563eb"
                            className="text-white"
                          />
                        )}
                        {mentor.job === "디자이너" && (
                          <BriefcaseBusiness
                            size={18}
                            fill="#16a34a"
                            className="text-white"
                          />
                        )}
                        <p className="text-sm line-clamp-1">{mentor.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
        {/* 디자이너 채용 정보는 노트폴리오에서! */}
        <section className="w-full flex flex-col gap-6 py-12 px-20 bg-neutral-100">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            디자이너 채용 정보는 노트폴리오에서!
          </h3>
          <div className="grid grid-cols-6 gap-6">
            {RECRUITMENTS.map((recruitment) => {
              return (
                <Card className="w-full h-fit p-0 gap-3 border-none shadow-none bg-transparent">
                  <Skeleton className="w-full h-52 rounded-lg bg-neutral-200" />
                  <div className="flex gap-2">
                    {/* 로고 */}
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      {/* 타이틀 */}
                      <p className="text-[15px] font-semibold line-clamp-1">
                        {recruitment.title}
                      </p>
                      {/* 회사명 */}
                      <p className="text-sm text-neutral-700">
                        {recruitment.company}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
        {/* IMAGE LIST */}
        <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 mt-6 px-6 xl:px-20">
          <SkeletonImageCard />
          <SkeletonImageCard />
          <SkeletonImageCard />
          <SkeletonImageCard />
          <SkeletonImageCard />
          <SkeletonImageCard />
          <SkeletonImageCard />
          <SkeletonImageCard />
          <SkeletonImageCard />
          <SkeletonImageCard />
          <SkeletonImageCard />
          <SkeletonImageCard />
        </section>
      </main>
      <div className="h-[114px] flex flex-col items-center gap-6 my-20">
        {/* 회원가입 및 로그인 유도 문구 */}
        <div className="flex md:hidden flex-col items-center gap-1">
          <div className="flex items-center">
            <a href="" className="underline">
              회원가입
            </a>
            <p className="mx-1">또는</p>
            <a href="" className="underline">
              로그인
            </a>
            <p>을 통해</p>
          </div>
          <p>19만개 이상의 크리에이티브를 발견하고 수집해보세요.</p>
        </div>
        <div className="hidden md:flex items-center">
          <a href="" className="underline">
            회원가입
          </a>
          <p className="mx-1">또는</p>
          <a href="" className="underline">
            로그인
          </a>
          <p>을 통해 19만개 이상의 크리에이티브를 발견하고 수집해보세요.</p>
        </div>
        {/* 회원가입 또는 로그인 버튼 UI */}
        <div className="flex items-center gap-4">
          <Button>회원가입</Button>
          <p className="text-sm">또는</p>
          <Button variant={"outline"}>로그인</Button>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
