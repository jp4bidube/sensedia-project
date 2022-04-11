import { createTheme } from '@material-ui/core/styles'

export const fontFamily = `"Roboto Bold", "Roboto Regular", Roboto, sans-serif`

const baseTheme = createTheme({
  typography: {
    fontFamily
  },
  palette: {
    primary: { main: '#5c21aa' },
    success: { main: '#168821' },
    warning: { main: '#FFA62B' },
    text: { primary: '#6a767e' , hint:'#1111'}
  }
})

const theme = createTheme(
  {
    props: {
      MuiButton: {
        variant: 'contained',
        color: 'primary'
      }
    },
    overrides: {
      MuiInputBase: {
        root: {
          marginTop: '0px !important'
        }
      },
      MuiCardContent:{
        root: {
          lineHeight: '1.3rem',
          height: '12rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }
      },
      MuiButton: {
        root: {
          textTransform: 'none'
        },
        contained: {
          borderRadius: '25px'
        },
        outlined: {
          borderRadius: '25px'
        }
      },
      MuiLinearProgress:{
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: '1rem',
          },
        }
      },
      MuiTableContainer: {
        root: {
          width: '100%',
          overflowX: 'auto',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }
      },
      MuiTable: {
        root: {
          width: '100%',
          borderCollapse: 'collapse',
          tableLayout: 'fixed',
          minWidth: 650
        }
      },
      MuiTableCell: {
        head: {
          textAlign: 'left',
          paddingLeft: '8px !important',
          color: baseTheme.palette.text.primary,
          fontSize: '14px',
          fontWeight: 'bold',
          textTransform: 'capitalize'
        },
        body: {
          wordBreak: 'break-word'
        },
        root: {
          textAlign: 'left',
          paddingLeft: '8px !important',
          paddingRight: '8px !important',
          color: baseTheme.palette.text.primary,
          fontSize: '14px',
          width: '50%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      },
      MuiMenuItem: {
        root: {
          color: '#6a767e'
        }
      },
      MuiTextField: {
        root: {
          color: 'primary'
        }
      }
    }
  },
  baseTheme
)

const computedTheme = createTheme(baseTheme, theme)

export default computedTheme
