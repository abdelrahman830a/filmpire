import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  posterContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      marginBottom: '30px',
    },
  },

  poster: {
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
    width: '80%',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '50%',
      marginBottom: '30px',
      // height: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
      height: '350px',
      marginBottom: '30px',
    },
  },

  genresContainer: {
    margin: '10px 0 !important',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  genreImage: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
    marginRight: '10px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    aligntItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 1 rem',
    },
  },
  castImage: {
    width: '100%',
    maxWidth: '7em',
    height: '8em',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  character: {
    overflow: 'hidden',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',

    },
  },
  modalBox: {
    display: 'flex',

  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0,0,0,0.5)',
  },
  video: {
    width: '50%',
    height: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '90%',
    },
  },
  notTrailer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '470px',
    height: '250px',
    background: 'rgba(0,0,0, 0.76)',
  },
}));
