import React, { useMemo } from 'react';
import { useMyContext } from './../../Context/context';
import CardContentFilme from './CardContentFilme/index';
import CardUI from './../../components/CardUI';
import CardContentSerie from './CardContentSerie/index';
import CardContentPessoa from './CardContentPessoa/index';

const CardWrapper = ({ lista = [] }) => {
  return (
    <>
      {lista.map((l) => (
        <CardUI>
          {l.first_air_date ? (
            <CardContentSerie serie={l} />
          ) : l.known_for ? (
            <CardContentPessoa pessoa={l} />
          ) : (
            <CardContentFilme filme={l} />
          )}
        </CardUI>
      ))}
    </>
  );
};

export default CardWrapper;
