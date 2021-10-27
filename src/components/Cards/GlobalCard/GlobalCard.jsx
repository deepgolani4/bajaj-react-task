import styles from './GlobalCard.module.scss';
const GlobalCard = ({ className, children }) => {
    return <div className={`${styles.gCard} ${className}`}>{children}</div>;
};

export default GlobalCard;
