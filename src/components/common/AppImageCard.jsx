import { Heart } from "lucide-react";

function addCommas(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function AppImageCard({ image }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <img
        src={image.urls.small}
        alt="@THUMBNAIL"
        className="w-full aspect-square rounded-sm object-cover"
      />
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={image.user.profile_image.small}
            alt="@PROFILE_IMAGE"
            className="w-7 h-7 rounded-full"
          />
          <p className="text-sm">{image.user.username}</p>
        </div>
        <div className="flex items-center gap-3">
          {/* 좋아요 */}
          <div className="flex items-center gap-1">
            <Heart size={16} className="text-red-400" fill="#f87171" />
            <p className="text-sm">{addCommas(image.likes)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AppImageCard };
