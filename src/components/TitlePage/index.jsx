import styles from "./TitlePage.module.scss";

const TitlePage = ({children}) =>{

    return(
        <h2 className={`${styles.titlePage}`}>{children}</h2>
    )
}

export default TitlePage;