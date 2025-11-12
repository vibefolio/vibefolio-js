import { Calendar, Grid2X2X, Heart, TextInitial } from "lucide-react";
import { AppImageCard } from ".";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui";
import dayjs from "dayjs";
import { addCommas } from "../../lib/format/comma";

function AppImageDialog({ props }) {
  console.log(props);
  return (
    <Dialog>
      <DialogTrigger>
        <AppImageCard props={props} />
      </DialogTrigger>
      <DialogContent>
        <div className="absolute top-0 -right-22 flex flex-col gap-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex flex-col items-center justify-center gap-1">
                <Button size={"icon"} className="rounded-full">
                  <Heart />
                </Button>
                <p className="text-white">프로필</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>프로필</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex flex-col items-center justify-center gap-1">
                <Button size={"icon"} className="rounded-full">
                  <Heart />
                </Button>
                <p className="text-white">제안하기</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>제안하기</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex flex-col items-center justify-center gap-1">
                <Button size={"icon"} className="rounded-full">
                  <Heart />
                </Button>
                <p className="text-white">좋아요</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>좋아요</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex flex-col items-center justify-center gap-1">
                <Button size={"icon"} className="rounded-full">
                  <Heart />
                </Button>
                <p className="text-white">좋아요 04</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>좋아요 04</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>
            {props.description || "등록된 설명이 없습니다."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <img
            src={props.urls.full}
            alt="@IMAGE"
            className="w-full aspect-square object-cover rounded-md"
          />
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={props.user.profile_image.small}
                alt="@PROFILE_IMAGE"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-sm">{props.user.username}</p>
            </div>
            <div className="flex items-center gap-3">
              {/* 좋아요 */}
              <div className="flex items-center gap-1">
                <Heart size={16} className="text-red-400" fill="#f87171" />
                <p className="text-sm">{addCommas(props.likes)}</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <TextInitial
                size={16}
                className="min-w-4 mt-1.5 text-neutral-500"
              />
              <p className="text-neutral-500 line-clamp-3">
                {props.alt_description || "등록된 설명이 없습니다."}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-neutral-500" />
              <p className="text-neutral-500">
                {dayjs(props.created_at).format("YYYY. MM. DD")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Grid2X2X size={16} className="text-neutral-500" />
              <p className="text-neutral-500">
                {props.width} X {props.height} size
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { AppImageDialog };
