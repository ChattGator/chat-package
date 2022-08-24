import React, { FC } from "react";
import { PlusIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import Image from "../../Misc/Image";
import AddChat from "../AddChat";

interface Props {
	className?: string;
}

const ProfileAndNewChat: FC<Props> = ({ className = "" }) => {
	const [Visible, setVisible] = React.useState(false);

	return (
		<>
			<AddChat
				visible={Visible}
				setVisible={setVisible}
			/>
			<div
				className={`flex items-center justify-between border-b-2 border-slate-200 space-x-2 px-4 lg:px-8 pb-2 lg:pb-4 ${className}`}
			>
				<Image
					src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
					alt="Cat"
				/>
				<div className="space-x-2 lg:space-x-4">
					<button
						onClick={() => setVisible(true)}
						className="p-0.5 rounded-full hover:bg-blue-100 transition-colors"
					>
						<PlusIcon className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600 active:text-blue-700 transition-colors " />
					</button>
					<button className="p-0.5 rounded-full hover:bg-blue-100 transition-colors">
						<DotsVerticalIcon className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600 active:text-blue-700 transition-colors" />
					</button>
				</div>
			</div>
		</>
	);
};

export default ProfileAndNewChat;
