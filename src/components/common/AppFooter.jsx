import { Separator, Tooltip, TooltipContent, TooltipTrigger } from "../ui";
import { BookText, MailOpen } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

function AppFooter() {
  return (
    <footer className="w-full h-9 flex items-center justify-between border-t px-8">
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
        <Tooltip>
          <TooltipTrigger asChild>
            <FontAwesomeIcon icon={faNewspaper} />
          </TooltipTrigger>
          <TooltipContent>
            <p>노트폴리오 매거진</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </TooltipTrigger>
          <TooltipContent>
            <p>노폴레터</p>
          </TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" className="h-3!" />
        <Tooltip>
          <TooltipTrigger asChild>
            <FontAwesomeIcon icon={faInstagram} />
          </TooltipTrigger>
          <TooltipContent>
            <p>노트폴리오 인스타그램</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <FontAwesomeIcon icon={faFacebook} />
          </TooltipTrigger>
          <TooltipContent>
            <p>노트폴리오 페이스북</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <FontAwesomeIcon icon={faYoutube} />
          </TooltipTrigger>
          <TooltipContent>
            <p>노트폴리오 유튜브</p>
          </TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" className="h-3!" />
        <Tooltip>
          <TooltipTrigger asChild>
            <FontAwesomeIcon icon={faAppStore} />
          </TooltipTrigger>
          <TooltipContent>
            <p>iOS App</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <FontAwesomeIcon icon={faGooglePlay} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Android App</p>
          </TooltipContent>
        </Tooltip>
        <img src="src/assets/logo.svg" alt="@LOGO" className="w-22 ml-8" />
      </div>
    </footer>
  );
}

export { AppFooter };
