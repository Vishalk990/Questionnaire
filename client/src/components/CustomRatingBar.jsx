import {
  AngryFace,
  ExcitedFace,
  HappyFace,
  NeutralFace,
  SadFace,
} from "./EmotionIcons";

const RatingFace = ({ emotion, filled }) => {
  const emotions = {
    1: AngryFace,
    2: SadFace,
    3: NeutralFace,
    4: HappyFace,
    5: ExcitedFace,
  };

  const EmotionIcon = emotions[emotion];

  return (
    <EmotionIcon
      className={`w-8 h-8 ${filled ? "opacity-100" : "opacity-30"}`}
    />
  );
};

export const CustomRatingBar = ({
  value,
  onChange,
  onMouseEnter,
  onMouseLeave,
  register,
  name,
  error,
}) => {
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
  ];

  return (
    <div className="w-full bg-white ">
      <div className="flex justify-between mb-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <RatingFace key={rating} emotion={rating} filled={value >= rating} />
        ))}
      </div>
      <div
        className="relative h-4 bg-gray-200 rounded-full"
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`absolute left-0 h-full rounded-full transition-all duration-300 ${
            colors[value - 1] || ""
          }`}
          style={{ width: `${(value / 5) * 100}%` }}
        ></div>
        {[1, 2, 3, 4, 5].map((rating) => (
          <label
            key={rating}
            className="absolute top-0 w-1/5 h-full cursor-pointer"
            style={{ left: `${((rating - 1) / 5) * 100}%` }}
            onMouseEnter={() => onMouseEnter(rating)}
            onClick={() => onChange(rating)}
          >
            <input
              type="radio"
              {...register(name, { required: "This rating is required" })}
              value={rating}
              className="sr-only"
            />
          </label>
        ))}
      </div>
      {error && (
        <p className="text-red-500 text-xs italic mt-1">{error.message}</p>
      )}
    </div>
  );
};
