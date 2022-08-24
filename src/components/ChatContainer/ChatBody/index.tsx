// @ts-nocheck

import React, { FC, useEffect, useState } from "react";
import { useChattGator } from "../../../contexts";
import Input from "../../Misc/Input";
import ChatWindow from "../ChatWindow";
import GroupTab from "../GroupTab";

interface Props {
	className?: string;
}

const ChatBody: FC<Props> = ({ className = "" }) => {
	const { socket, user, chatId } = useChattGator();
	const [messages, setMessage] = useState<any[]>([]);

	useEffect(() => {
		socket.emit("joinRoom", { user, groupId: chatId });
	}, [chatId]);

	const sendMessage = (message: string) => {
		const messageObj = {
			user,
			groupId: chatId,
			messageType: "Text",
			message,
		};

		console.log(messageObj);
		socket.emit("chatMessage", messageObj);
	};

	useEffect(() => {
		socket.on("message", ({ user, message }) => {
			setMessage((messageList) => [...messageList, { user, message, groupId: chatId }]);
		});
	}, [socket]);

	return (
		<section
			className={`bg-blue-50 lg:col-span-4 h-screen flex flex-col  justify-between relative overflow-y-auto ${className}`}
		>
			<GroupTab />
			<div></div>
			<>
				<ChatWindow messages={messages} />
				<Input sendMessage={sendMessage} />
			</>
		</section>
	);
};

export default ChatBody;
