import styles from './app.module.scss';

export interface AppProps {
    className?: string;
}

export const App = ({ className }: AppProps) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.App}>
            <div className={styles['App-Header']}>
                <h1 className={styles['Header-Text']}>OSO projekt</h1>
            </div>
            <div className={styles.MainFrame}>
                <button className={styles.Button} onClick={undefined}>Facebook</button>
                <button className={styles.Button} onClick={undefined}>Instagram</button>
                <button className={styles.Button} onClick={undefined}>indidansk.dk</button>
            </div></div>
    </div>;
};
