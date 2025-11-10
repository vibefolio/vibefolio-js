import { Skeleton } from "../ui";
import { ChartNoAxesColumnIncreasing, Heart } from "lucide-react";

function SkeletonImageCard() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="w-full aspect-square" />
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="w-7 h-7 rounded-full" />
          <Skeleton className="w-12 h-4" />
        </div>
        <div className="flex items-center gap-3">
          {/* 조회수 */}
          <div className="flex items-center gap-1">
            <ChartNoAxesColumnIncreasing
              size={18}
              className="text-neutral-400"
            />
            <Skeleton className="w-8 h-4" />
          </div>
          {/* 좋아요 */}
          <div className="flex items-center gap-1">
            <Heart size={18} className="text-neutral-400" />
            <Skeleton className="w-8 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { SkeletonImageCard };
