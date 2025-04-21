import styles from './BtnAccept.module.scss';

function BtnAccept() {

    return (
        <div className={styles.button_wrapper}>
            {/* <button className={styles.accept_btn}>Accept</button> */}
            <button className={styles.accept_btn}>Enter</button>
        </div>
    )
}

export default BtnAccept;