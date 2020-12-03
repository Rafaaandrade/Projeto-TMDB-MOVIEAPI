import * as yup from 'yup';

export const schemaHeader = yup.object().shape({
  pesquisa: yup
    .string()
    .max(30, 'Máximo de 30 carácteres')
    .required('O campo precisa ser preenchido'),
});

export const schemaForms = yup.object().shape({
  usuario: yup
    .string()
    .required('O campo NOME deve ser preenchido')
    .max(40, 'O máximo de 40 carácteres foi excedido.'),
  email: yup
    .string()
    .required('O campo E-MAIL deve ser preenchido')
    .max(60, 'O máximo de 60 carácteres foi excedido.'),
  senha: yup
    .string()
    .required('O campo SENHA deve ser preenchido')
    .max(30, 'O máximo de 30 carácteres foi excedido.'),
});
