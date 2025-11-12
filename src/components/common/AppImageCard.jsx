import { Heart } from "lucide-react";
import { addCommas } from "../../lib/format/comma";

function AppImageCard({ props }) {
  if (!props) return null;

  return (
    <div className="w-full flex flex-col gap-2">
      <img
        src={props.urls.regular}
        alt="@THUMBNAIL"
        className="w-full aspect-square rounded-sm object-cover"
      />
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={props.user.profile_image.large}
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
    </div>
  );
}

export { AppImageCard };
