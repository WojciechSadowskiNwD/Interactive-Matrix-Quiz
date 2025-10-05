import { useAppSelector } from "../store/redux";
import { motion } from "framer-motion";
import styles from "./InputUserName.module.scss";
import { FC } from "react";

type InputUserNameProps = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled: boolean;
};

export const InputUserName: FC<InputUserNameProps> = ({
	onChange,
	disabled,
}) => {
	const { userName } = useAppSelector((store) => store.user);

	return (
		<>
			<motion.div
				className={styles.inputName_box}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<input
					className={styles.inputName}
					type="text"
					placeholder="your nick..."
					value={typeof userName === "string" ? userName : ""}
					onChange={onChange}
					disabled={disabled}
				/>
			</motion.div>
		</>
	);
};