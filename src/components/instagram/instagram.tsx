import styles from './instagram.module.scss';

export interface InstagramProps {
    className?: string;
}

export const Instagram = ({ className }: InstagramProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <div className={`${styles['App-Header']} ${styles.App}`}>
                <div className={styles.AppHeader}>
                    <h1 className={styles['Header-Text']}>OSO Projekt</h1>
                    <h1 className={styles.ContentType}>Instagram</h1>
                </div>
                <div className={styles.MainFrame}>
                    <div className={styles.FacebookContent}>
                        <div className={styles.ContentContent}>
                            <img
                                src="https://scontent.faar2-1.fna.fbcdn.net/v/t39.30808-1/295953218_813917942931676_6635388301262178942_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SAjzButiGUYAX9s-uwI&_nc_ht=scontent.faar2-1.fna&oh=00_AfBfzwhVdNEZDyY74opkcj2R4ao7iwGID-K1Bm6uflOvPQ&oe=63953A8C"
                                className={styles.pfp}
                            />
                            <div className={styles.name}>
                                <h1 className={styles.ContentText}>
                                    Benjamin Falch
                                </h1>
                                <p className={styles.spongebobText}></p>
                            </div>
                        </div>
                        <img
                            src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.ContentImage}
                        />
                    </div>
                    <div className={styles.FacebookContent}>
                        <div className={styles.ContentContent}>
                            <img
                                src="https://scontent.faar2-1.fna.fbcdn.net/v/t39.30808-1/295953218_813917942931676_6635388301262178942_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SAjzButiGUYAX9s-uwI&_nc_ht=scontent.faar2-1.fna&oh=00_AfBfzwhVdNEZDyY74opkcj2R4ao7iwGID-K1Bm6uflOvPQ&oe=63953A8C"
                                className={styles.pfp}
                            />
                            <div className={styles.name}>
                                <h1 className={styles.ContentText}>
                                    Benjamin Falch
                                </h1>
                                <p className={styles.spongebobText}>

                                </p>
                            </div>
                        </div>
                        <img
                            src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.ContentImage}
                        />
                    </div>
                    <div className={styles.FacebookContent}>
                        <div className={styles.ContentContent}>
                            <img
                                src="https://scontent.faar2-1.fna.fbcdn.net/v/t39.30808-1/295953218_813917942931676_6635388301262178942_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SAjzButiGUYAX9s-uwI&_nc_ht=scontent.faar2-1.fna&oh=00_AfBfzwhVdNEZDyY74opkcj2R4ao7iwGID-K1Bm6uflOvPQ&oe=63953A8C"
                                className={styles.pfp}
                            />
                            <div className={styles.name}>
                                <h1 className={styles.ContentText}>
                                    Benjamin Falch
                                </h1>
                                <p className={styles.spongebobText}>
                                    Sponsoreret
                                </p>
                            </div>
                        </div>
                        <img
                            src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.ContentImage}
                        />
                    </div>
                    <div className={styles.FacebookContent}>
                        <div className={styles.ContentContent}>
                            <img
                                src="https://scontent.faar2-1.fna.fbcdn.net/v/t39.30808-1/295953218_813917942931676_6635388301262178942_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SAjzButiGUYAX9s-uwI&_nc_ht=scontent.faar2-1.fna&oh=00_AfBfzwhVdNEZDyY74opkcj2R4ao7iwGID-K1Bm6uflOvPQ&oe=63953A8C"
                                className={styles.pfp}
                            />
                            <div className={styles.name}>
                                <h1 className={styles.ContentText}>
                                    Benjamin Falch
                                </h1>
                                <p className={styles.spongebobText}>Anbefalet til dig</p>
                            </div>
                        </div>
                        <img
                            src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.ContentImage}
                        />
                    </div>
                    <div className={styles.FacebookContent}>
                        <div className={styles.ContentContent}>
                            <img
                                src="https://scontent.faar2-1.fna.fbcdn.net/v/t39.30808-1/295953218_813917942931676_6635388301262178942_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SAjzButiGUYAX9s-uwI&_nc_ht=scontent.faar2-1.fna&oh=00_AfBfzwhVdNEZDyY74opkcj2R4ao7iwGID-K1Bm6uflOvPQ&oe=63953A8C"
                                className={styles.pfp}
                            />
                            <div className={styles.name}>
                                <h1 className={styles.ContentText}>
                                    Benjamin Falch
                                </h1>
                                <p className={styles.spongebobText}>Anbefalet til dig</p>
                            </div>
                        </div>
                        <img
                            src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.ContentImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
