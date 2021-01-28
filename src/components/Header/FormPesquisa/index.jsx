import { IconButton } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import FieldWrapper from './../../FieldWrapper';
import { useMyContext } from './../../Context/context';
import { yupResolver } from '@hookform/resolvers';
import { schemaHeader } from './../../../utils/yup/schema';
import Input from '@material-ui/core/Input';
import useStyles from './styles';

const FormPesquisa = () => {
    const [value, setValue] = useState();
    const styles = useStyles();

    const {
        handlePesquisaFilme,
        handlePesquisaSeries,
        handlePesquisaPessoa,
        context,
    } = useMyContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(schemaHeader),
    });

    const handleChange = (ev) => {
        setValue(ev.target.value);
    };

    const clear = () => {
        methods.setValue('pesquisa', '');
        methods.setValue('escolhas', '');
    };

    const { control, handleSubmit, errors } = methods;

    const handleEscolha = (data) => {
        let escolha = null;
        switch (data.escolhas) {
            case 'filme':
                escolha = handlePesquisaFilme(data);
                break;

            case 'serie':
                escolha = handlePesquisaSeries(data);
                break;

            case 'pessoa':
                escolha = handlePesquisaPessoa(data);
                break;

            default:
        }
        clear();
        return escolha;
    };

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleEscolha)}>
                    <FormControl component='fieldset' size='small'>
                        <FieldWrapper
                            required
                            as={RadioGroup}
                            aria-label='escolhas'
                            name='escolhas'
                            errors={errors}
                            control={control}
                            defaultValue={value}
                            row
                        >
                            <FormControlLabel
                                onChange={handleChange}
                                label='Filme'
                                name='filme'
                                value='filme'
                                errors={errors}
                                control={<Radio />}
                                disabled={context.loading}
                            />
                            <FormControlLabel
                                onChange={handleChange}
                                label='Série'
                                name='serie'
                                value='serie'
                                errors={errors}
                                control={<Radio />}
                                disabled={context.loading}
                            />
                            <FormControlLabel
                                onChange={handleChange}
                                label='Pessoa'
                                name='pessoa'
                                errors={errors}
                                control={<Radio />}
                                value='pessoa'
                                disabled={context.loading}
                            />
                        </FieldWrapper>
                    </FormControl>
                    <Controller as={Input} name='pesquisa' defaultValue='' />
                    <IconButton
                        type='submit'
                        control={control}
                        disabled={context.loading}
                    >
                        <SearchIcon className={styles.icnPesquisa} />
                    </IconButton>
                    <br />
                    {errors.pesquisa?.message}
                </form>
            </FormProvider>
        </>
    );
};

export default FormPesquisa;
