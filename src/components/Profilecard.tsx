import React from "react";

type ProfileCardProps = {
  image: string;
  name: string;
  title: string;
  description: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, title, description }) => {
  return (
    <div className="flex flex-col bg-blue-300 text-black p-8 rounded-2xl">
      <div className="w-full flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="rounded-full w-72 h-auto aspect-square object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold pt-4 uppercase">{name}</h3>
      <hr className="border-1 mb-2"/>
      <h4 className="font-semibold pb-4 uppercase">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;
