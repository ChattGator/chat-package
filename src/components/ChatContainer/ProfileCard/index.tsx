import React, { FC } from "react";
import ChatSendDate from "../ChatSendDate";

interface Props {
	imageLink: string;
	displayName: string;
	username: string;
	desc: string;
}
//

const ProfileCard: FC<Props> = ({ imageLink, displayName, username, desc }) => {
	return (
		<>
			<div className="p-5 mt-5 bg-blue-50 max-w-xs rounded-lg border-blue-600 border-2">
				<div className="mb-2 flex">
					<img
						src={imageLink}
						alt="user-img"
						className="rounded-full h-10"
					/>
					<div className="text-sm ml-3">
						<p className="font-semibold text-slate-700">{displayName}</p>
						<p className="font-medium text-slate-500">{username}</p>
					</div>
				</div>
				<div className="text-xs line-clamp-1">
					<p>{desc}</p>
				</div>
			</div>
		</>
	);
};

export default ProfileCard;
