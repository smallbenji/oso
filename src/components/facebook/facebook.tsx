import styles from './facebook.module.scss';

export interface FacebookProps {
    className?: string;
}

export const Facebook = ({ className }: FacebookProps) => {
    return <div className={`${styles.root} ${className}`}>Facebook</div>;
};
