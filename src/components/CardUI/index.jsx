import React from 'react';
import { useMyContext } from './../Context/context';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { concatenar } from './../../utils/functions/function-utils';
import useStyles from './styles';

const CardUI = ({ children, img, obj }) => {
    const styles = useStyles();
    const { detalharFilme, modalFilmeRef } = useMyContext();

    const clickSaibaMais = () => {
        console.log('clickSaibaMais', obj);
        modalFilmeRef.current && modalFilmeRef.current.show();
        detalharFilme(obj);
    };

    return (
        <div className={styles.cards}>
            <Card>
                <CardMedia component='img' image={concatenar(img)} />
                <CardContent className={styles.cardFilme}>
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
                    <Button size='small' color='primary'>
                        Excluir
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default CardUI;
