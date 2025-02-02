import { useEffect, useState } from "react";
import styles from "./BlackBoard.module.css";
import { motion } from "framer-motion";


function BlackBoard() {
	const [visible, setVisible] = useState(false);

    useEffect(()=> {
        const timer = setTimeout(()=>{
            setVisible(true);
        }, 5000);

        return ()=> clearTimeout(timer);
    },[]);


	return (
		<>
			{visible && (
				<motion.div
					className={styles.BlackBoard}
					initial={{ opacity: 0 }}
					animate={{ opacity: .85 }}
					transition={{ duration: 3.1, ease: "easeInOut" }}
				>
					<h1>THE MATRIX</h1>
				</motion.div>
			)}
		</>
	);
}

export default BlackBoard;
