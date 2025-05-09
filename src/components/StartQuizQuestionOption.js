import styles from './StartQuizQuestionOption.module.scss';

function StartQuizQuestionOption({children}){
    return(
        <div className={`${styles.option}`}>
            <div className={styles.frames}></div>
            {children}
        </div>
    )
}

export default StartQuizQuestionOption;