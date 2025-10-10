import { ReactNode } from 'react';
import styles from './QuizQuestionOption.module.scss';

type Props = {
    children: ReactNode;
    customClass?: string;
    onSelect: () => void;
}   

export default function QuizQuestionOption({children, customClass="", onSelect}:Props){

    return(
        <div className={`${styles.option} ${customClass}`} onClick={onSelect}>
            <div className={styles.frames}></div>
            <div className={styles.text}>{children}</div>
        </div>
    )
}