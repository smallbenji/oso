import styles from './ind-i-dansk.module.scss';

export interface IndIDanskProps {
    className?: string;
}

export const IndIDansk = ({ className }: IndIDanskProps) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.App}>
            <div className={styles.AppHeader}>
                <h1 className={styles.HeaderText}>OSO projekt</h1>
                <h1 className={`${styles.HeaderText} ${styles.content}`}>indidansk.dk</h1>
            </div>
            <div className={styles.mainFrame}>
                <img src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg" />
            </div></div></div>;
};
