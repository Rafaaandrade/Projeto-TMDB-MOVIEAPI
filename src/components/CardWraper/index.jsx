import React from 'react';
import CardUI from './../../components/CardUI';
import CardContentFilme from './CardContentFilme/index';
import CardContentPessoa from './CardContentPessoa/index';
import CardContentSerie from './CardContentSerie/index';
import useStyles from './styles';

const CardWrapper = ({ lista = [], resto }) => {
    const styles = useStyles();

    return (
        <div className={styles.cardsContainer}>
            {lista.map((l) => (
                <CardUI key={l.id} obj={l}>
                    {l.release_date && <CardContentFilme filme={l} />}
                    {l.first_air_date && <CardContentSerie serie={l} />}
                    {l.known_for_department && <CardContentPessoa pessoa={l} />}
                </CardUI>
            ))}
            {Array.apply(null, { length: 3 - resto }).map((r, index) => (
                <div key={index}></div>
            ))}
        </div>
    );
};

export default CardWrapper;
