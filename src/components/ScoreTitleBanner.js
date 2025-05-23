import styles from './ScoreTitleBanner.module.scss';

export default function ScoreTitleBanner({children, setMarginTop=""}) {
	return (
		<div className={styles.titleBanner} style={{ marginTop: `${setMarginTop}px`}}>
			<div className={styles.frames}></div>{children}
		</div>
	)
}