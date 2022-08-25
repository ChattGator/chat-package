import React, { FC, useState } from "react";
import ChatSendDate from "../ChatSendDate";
import ProfileCard from "../ProfileCard";

interface Props {
	className?: string;
	sender?: boolean;
	name: string;
	message: string;
	time: Date;
}

const SingleChatContainer: FC<Props> = ({ className = "", sender = true, name, message, time }) => {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<>
			<div className={`flex ${sender ? "self-end" : ""}`}>
				<div
					className={`rounded-lg max-w-md my-4 mx-4 px-2 pl-4 py-2 pb-3 leading-5 tracking-wide ${
						sender ? "bg-blue-600 text-white" : "bg-blue-50 text-slate-600"
					} ${className}`}
				>
					{!sender && (
						<div
							onMouseOver={handleMouseOver}
							onMouseOut={handleMouseOut}
							className="font-semibold hover:underline text-white-600 py-2 cursor-pointer"
						>
							{name}
						</div>
					)}
					{message}
					<div className={`flex items-center py-1 justify-end ${sender ? "text-white" : "text-slate-400"}`}>
						<div className=" text-xs">
							{time.toLocaleTimeString("en-US", {
								hour: "numeric",
								minute: "numeric",
							})}
						</div>
					</div>
				</div>
				{isHovering && !sender && (
					<div>
						<ProfileCard
							imageLink="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
							displayName="John Doe"
							username="active"
							desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam enim quia odio dolor rerum distinctio incidunt atque itaque officiis ut, repudiandae repellat, impedit ducimus. Dolores earum eos architecto obcaecati natus."
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default SingleChatContainer;
