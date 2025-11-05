interface IIconProps {
    color: string;
    stroke: string;
}

const UserIcon = ({ color, stroke }: IIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
        stroke= {stroke}
        strokeWidth="1.5"
      />
      <path
        d="M18.5337 16.6036L17.8719 15.4787C17.3329 14.5625 16.3493 14 15.2863 14H8.71764C7.65462 14 6.67098 14.5625 6.13195 15.4787L5.47018 16.6036C4.57592 18.1236 4.81821 19.9703 6.52569 20.4114C9.56381 21.1962 14.4401 21.1962 17.4782 20.4114C19.1857 19.9703 19.428 18.1236 18.5337 16.6036Z"
        stroke= {stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default UserIcon;
