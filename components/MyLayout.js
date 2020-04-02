import Header from './Header'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { Paper, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  }
}));

export default function Layout(props) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Paper >
          <Box m={1} p={2}>
            {props.children}
          </Box>
        </Paper>
      </Container>
    </>
  )
}
