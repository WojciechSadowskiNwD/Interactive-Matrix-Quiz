import styles from './StartQuizQuestionOption.module.scss';

function StartQuizQuestionOption({children, className="", onClick}){

    return(
        <div className={`${styles.option} ${className}`} onClick={onClick}>
            <div className={styles.frames}></div>
            <p className={styles.text}>{children}</p>
        </div>
    )
}

export default StartQuizQuestionOption;