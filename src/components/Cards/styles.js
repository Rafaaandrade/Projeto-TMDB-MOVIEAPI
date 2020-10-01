import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(() => ({
    cardFilme: {
      height: '300px',
      width: '300px',
    },
  }));

  return styles();
};

export default useStyles;
