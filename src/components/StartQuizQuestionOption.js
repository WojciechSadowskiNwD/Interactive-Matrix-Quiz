import styles from './StartQuizQuestionOption.module.scss';

function StartQuizQuestionOption({children, className="", onClick}){

    return(
        <div className={`${styles.option} ${className}`} onClick={onClick}>
            <div className={styles.frames}></div>
            <div className={styles.text}>{children}</div>
        </div>
    )
}

export default StartQuizQuestionOption;