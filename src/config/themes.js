import cyan from '@material-ui/core/colors/cyan'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'

const themes = [
  {
    id: 'default',
    color: cyan[500],
    source: {
      palette: {
        primary: cyan,
        secondary: cyan,
        error: cyan,
      },
    }, 
  },
  {
    id: 'Rojo',
    color: red[500],
    source: {
      palette: {
        primary: red,
        secondary: pink,
        error: red,
      },
    },
  },
  {
    id: 'Verde',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red,
      },
    },
  },
]

export default themes
