import styles from './AboutAvatarFrame.module.scss';

export default function AboutAvatarFrame() {
	return (
		<div className={styles.about_avatar_frame}>
            <div className={styles.matrix_blur}></div>
            <img className={styles.avatar_img} src="img/AvatarM.jpg" alt="avatar developer in matriz style"/>
		</div>
	)
}