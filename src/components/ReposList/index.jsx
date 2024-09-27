import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Usuário ${nomeUsuario} não encontrado`);
            }
            return res.json();
        })
        .then(resJson => {
            setTimeout(() => {
                setLoading(false)
                setRepos(resJson)
            }, 3000);
        })
        .catch(e => {
            setLoading(false);
            setError(true);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {loading ? (
                <h1>Carregando...</h1>
            ) : error ? (
                <h2>O usuário {nomeUsuario} não foi encontrado.</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b>
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Ver no GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList