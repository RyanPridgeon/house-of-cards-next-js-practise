import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import TypoGraphy from '@material-ui/core/Typography'
import { Toolbar, Grow } from '@material-ui/core'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <TypoGraphy variant="h6">House of Cards</TypoGraphy>
        <Link href="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/about">
          <Button color="inherit">About</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
