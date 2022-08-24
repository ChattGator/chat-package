import React, { FC } from "react";

interface Props {
	className?: string;
}

const ChatSendDate: FC<Props> = ({ className = "" }) => {
	return (
		<>
			<div className="text-slate-600 font-light text-xs">12:00 PM</div>
		</>
	);
};

export default ChatSendDate;
