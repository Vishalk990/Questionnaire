export const AngryFace = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#FF6B6B" />
    <path
      d="M7 14.5C7 14.5 9 16.5 12 16.5C15 16.5 17 14.5 17 14.5"
      stroke="black"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="8.5" cy="9" r="1.5" fill="black" />
    <circle cx="15.5" cy="9" r="1.5" fill="black" />
  </svg>
);

export const SadFace = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#FFD93D" />
    <path
      d="M8 16C8 16 10 14 12 14C14 14 16 16 16 16"
      stroke="black"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="8.5" cy="9" r="1.5" fill="black" />
    <circle cx="15.5" cy="9" r="1.5" fill="black" />
  </svg>
);

export const NeutralFace = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#FFD93D" />
    <line x1="8" y1="15" x2="16" y2="15" stroke="black" strokeWidth="1.5" />
    <circle cx="8.5" cy="9" r="1.5" fill="black" />
    <circle cx="15.5" cy="9" r="1.5" fill="black" />
  </svg>
);

export const HappyFace = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#FFD93D" />
    <path
      d="M7 14C7 14 9 17 12 17C15 17 17 14 17 14"
      stroke="black"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="8.5" cy="9" r="1.5" fill="black" />
    <circle cx="15.5" cy="9" r="1.5" fill="black" />
  </svg>
);

export const ExcitedFace = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#FFD93D" />
    <path
      d="M7 13C7 13 9 18 12 18C15 18 17 13 17 13"
      stroke="black"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="8.5" cy="9" r="1.5" fill="black" />
    <circle cx="15.5" cy="9" r="1.5" fill="black" />
  </svg>
);
