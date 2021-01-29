import React, { useMemo } from 'react';
import { useMyContext } from './../Context/context';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { concatenar } from './../../utils/functions/function-utils';
import useStyles from './styles';
import IMAGES from './../../utils/constants/images';

const CardUI = ({ children, obj }) => {
    const styles = useStyles();
    const {
        detalharFilme,
        modalFilmeRef,
        clickExcluir,
        clickFavorito,
        favorito,
    } = useMyContext();

    const clickSaibaMais = () => {
        modalFilmeRef.current && modalFilmeRef.current.show();
        detalharFilme(obj);
    };

    const bloquearFavorito = (obj) => {
        const filtro = favorito.some((movie) => movie.id === Number(obj.id));
        if (filtro) return true;
        return false;
    };

    const checarImagem = useMemo(() => {
        const imageCheck = obj.poster_path || obj.profile_path;
        return imageCheck ? concatenar(imageCheck) : IMAGES.NOT_FOUND;
    }, [obj]);

    return (
        <div className={styles.cards}>
            <Card>
                <CardMedia
                    className={styles.cardImage}
                    component='img'
                    image={checarImagem}
                />
                <CardContent className={styles.cardContent}>
                    {children}
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => clickSaibaMais()}
                        size='small'
                        color='primary'
                    >
                        Saiba Mais
                    </Button>

                    <Button
                        onClick={() => clickFavorito(obj)}
                        size='small'
                        color='primary'
                        disabled={bloquearFavorito(obj)}
                    >
                        Favoritar
                    </Button>

                    <Button
                        onClick={() => clickExcluir(obj)}
                        size='small'
                        color='primary'
                    >
                        Excluir
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default CardUI;
