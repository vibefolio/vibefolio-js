import { Separator, Tooltip, TooltipContent, TooltipTrigger } from "../ui";
import { BookText, MailOpen } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FOOTER_CONTETNS } from "../../constants";

import {
  faAppStore,
  faFacebook,
  faGooglePlay,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faEnvelopeOpen,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { AppTooltip } from ".";

function AppFooter() {
  return (
    <footer className="fixed bottom-0 w-full h-9 flex items-center justify-between border-t px-8 bg-white">
      {/* 텍스트 묶음 영역 */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold">(주)스터닝</p>
          <p className="text-xs">사업자 정보</p>
        </div>
        <Separator orientation="vertical" className="h-3!" />
        <div className="flex items-center gap-3">
          <p className="text-xs">서비스 소개</p>
          <p className="text-xs">공지사항</p>
          <p className="text-xs">운영정책</p>
          <p className="text-xs">개인정보처리방침</p>
          <p className="text-xs">자주묻는 질문</p>
          <p className="text-xs">광고상품</p>
          <p className="text-xs">문의하기</p>
        </div>
      </div>
      {/* 아이콘 묶음 영역 */}
      <div className="flex items-center gap-3">
        {FOOTER_CONTETNS.map((item, index) => {
          return (
            <>
              <AppTooltip description={item.label}>
                <FontAwesomeIcon icon={item.icon} />
              </AppTooltip>
              {index === 1 && (
                <Separator orientation="vertical" className="h-3!" />
              )}
              {index === 4 && (
                <Separator orientation="vertical" className="h-3!" />
              )}
            </>
          );
        })}
        <img src="src/assets/logo.svg" alt="@LOGO" className="w-22 ml-8" />
      </div>
    </footer>
  );
}

export { AppFooter };
