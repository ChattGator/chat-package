import { XIcon } from "@heroicons/react/solid";
import React, { FC } from "react";

interface Props {
	isGroup?: boolean;
}

const BioHeader: FC<Props> = ({ isGroup }) => {
	return (
		<>
			<div className="flex p-5 border-b-2 border-slate-200">
				<XIcon className="text-blue-600 hover:bg-blue-100 hover:rounded-lg cursor-pointer h-8 w-8 mr-2 my-auto" />
				<div className="text-blue-600 text-2xl font-semibold">
					{!isGroup ? "Contact Information" : "Group Information"}
				</div>
			</div>
		</>
	);
};

export default BioHeader;
