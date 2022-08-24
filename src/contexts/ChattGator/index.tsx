import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { connect, Socket } from "socket.io-client";
import { UserResponse as UserResponseService } from "../../utils";

const socket: Socket = connect("https://chatgator-backend.herokuapp.com");

interface UserResponse {
	projectId: string;
	name: string;
	userId: string;
	avatar: string;
	userName: string;
	bio: string;
	_id: string;
	createdAt: string;
}

interface ProjectConfig {
	projectId: string;
	projectSecret: string;
}

interface User {
	projectId: ProjectConfig["projectId"];
	name: string;
	userId: string;
	avatar: string;
	userName: string;
	bio: string;
}

interface ChattGatorContextProps {
	socket: Socket;
	projectConfig: ProjectConfig;
	user: UserResponse | null;
	chatId: string;
	setChatId: Dispatch<SetStateAction<string>>;
	profileDetails: ProfileType | null;
	setProfileDetails: Dispatch<SetStateAction<ProfileType | null>>;
	isLoading: boolean;
}

interface InitialValue {
	projectConfig: ProjectConfig;
	user: User;
}

interface ChattGatorProviderProps {
	value: InitialValue;
	children: ReactNode;
}

interface ProfileType {
	id: string;
	isGroup: boolean;
}

const ChattGatorContext = createContext<ChattGatorContextProps | undefined>(undefined);

export const ChattGatorProvider: FC<ChattGatorProviderProps> = ({ value, children }) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [user, setUser] = useState<UserResponse | null>(null);
	const [chatId, setChatId] = useState<string>("6303d8c73c0028aeb8e79473");
	const [profileDetails, setProfileDetails] = useState<ProfileType | null>({
		id: "6303d8c73c0028aeb8e79473",
		isGroup: true,
	});

	useEffect(() => {
		const getData = async () => {
			const userResponseService = new UserResponseService();
			const data = await userResponseService.getUserByUserId(value.user.userId);
			setUser(data[0]);
			setIsLoading(false);
		};
		getData();
	}, [value.user.userId]);

	return (
		<ChattGatorContext.Provider
			value={{
				projectConfig: value.projectConfig,
				user,
				socket,
				chatId,
				setChatId,
				profileDetails,
				setProfileDetails,
				isLoading,
			}}
		>
			{children}
		</ChattGatorContext.Provider>
	);
};

export const useChattGator: () => ChattGatorContextProps = () => {
	const context = useContext(ChattGatorContext);
	if (context === undefined) throw new Error("useChattGator must be used within a ChattGatorProvider");
	return context;
};
