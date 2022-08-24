import { DotsVerticalIcon, SearchIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import ChatWindow from "../ChatWindow";
import Input from "../../Misc/Input";

interface Props {
	className?: string;
}

const GroupTab: FC<Props> = ({ className = "" }) => {
	return (
		<>
			<div
				className={`flex items-center justify-between  z-20 bg-blue-600 text-white py-2 px-2  sticky top-0 left-0 right-0 ${className}`}
			>
				<div className="flex items-center space-x-2 cursor-pointer">
					<UserCircleIcon className="w-12 h-12 hover:fill-blue-50" />
					<div>
						<div className="font-bold text-lg">John Doe</div>
						<div className="text-sm">Online</div>
					</div>
				</div>
				<div className="flex items-center pr-2 space-x-4">
					<div>
						<SearchIcon className="w-6 h-6 cursor-pointer hover:stroke-blue-100" />
					</div>
					<div>
						<DotsVerticalIcon className="w-6 h-6 cursor-pointer hover:stroke-blue-100" />
					</div>
				</div>
			</div>
		</>
	);
};

export default GroupTab;
