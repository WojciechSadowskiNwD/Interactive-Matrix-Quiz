import styles from './StartQuizQuestionOption.module.scss';

type Props = {
    children: string;
    customClass?: string;
    onSelect: () => void;
}   

function StartQuizQuestionOption({children, customClass="", onSelect}:Props){

    return(
        <div className={`${styles.option} ${customClass}`} onClick={onSelect}>
            <div className={styles.frames}></div>
            <div className={styles.text}>{children}</div>
        </div>
    )
}

export default StartQuizQuestionOption;