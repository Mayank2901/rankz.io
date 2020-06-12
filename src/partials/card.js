import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TableCell = withStyles({
  root: {
    borderBottom: "none",
    paddingBottom: 0,
    paddingTop: 0,
  }
})(MuiTableCell);

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: '2%',
    boxShadow: '0 0 0 0 white',
  },
  title: {
    fontSize: '16px',
    fontWeight: '500',
    display: 'inline',
    marginRight: '2%',
    color: '#1a181e',
    lineHeight: '24px'
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '22px',
    display: 'inline',
    color: '#808080',
  },
  subhead: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '22px',
    display: 'inline',
    color: '#4d4d4d',
  },
  inline: {
    display: 'inline',
  },
  inlineRight: {
    display: 'inline',
    float: 'right',
  },
  alignRight: {
    textAlign: 'right',
  },
  hr: {
    boxShadow: '0 2px 6px 0 rgba(26, 24, 30, 0.04)',
    backgroundColor: '#ffffff'
  },
  table: {
    boxShadow: '0 0 0 0 white',
    border: '1px solid white',
    borderCollapse: 'collapse'
  },
  th: {
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#808080',
    border: 'none',
  },
  tablehead: {
    fontSize: '24px',
    fontWeight: '500',
    border: 'none',
  },
  tablesubhead: {
    marginLeft: '2%',
    fontSize: '16px',
    fontWeight: '500',
    color: '#17b31b',
  },
  tablesmall: {
    fontSize: '12px',
    fontWeight: 'normal'
  },
  grey: {
    color: '#989898',
  },
  black: {
    color: '#1a181e',
  },
  green: {
    color: '#17b31b',
  },
  red: {
    color: '#e50b20',
  },
  country: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1a181e',
    lineHeight: '1.57',
  },
});

export default function SimpleCard(props) {
  const styles = useStyles();
  const { data } = props
  return (
    <Card className={styles.root}>
      <CardContent>
        <div class={styles.inline}>
          <Typography className={styles.title} color="textSecondary">
            {data.title}
          </Typography>
          <Typography className={styles.subtitle}>
            {data.subtitle}
          </Typography>
        </div>
        <div className={styles.inlineRight}>
          <Typography className={styles.subtitle}>
            Last Updated: 
          </Typography>
          <Typography className={styles.subhead}>
             1 hour ago
          </Typography>
        </div>
        <hr className={styles.hr}/>
        <TableContainer component={Paper} className={styles.table}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Average Position <img alt="help icon" src="/icons/help-white.svg"/></TableCell>
                <TableCell className={styles.th}>Keywords <img alt="help icon" src="/icons/help-white.svg"/></TableCell>
                <TableCell className={styles.th}>SERP <img alt="help icon" src="/icons/help-white.svg"/></TableCell>
                <TableCell className={styles.th}>Positions <img alt="help icon" src="/icons/help-white.svg"/></TableCell>
                <TableCell className={styles.tablesmall}>
                  <span className={styles.grey}>#1-10</span>
                  <span className={styles.black}> 11</span>
                  <span className={styles.black}> 0</span>
                </TableCell>
                <TableCell className={styles.th}>Location <img alt="help icon" src="/icons/help-white.svg"/></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
              <TableCell scope="row">
                <span className={styles.tablehead}>22.9</span>
                <span className={styles.tablesubhead}>+0.3</span>
              </TableCell>
              <TableCell className={styles.tablehead}>270</TableCell>
              <TableCell className={styles.tablehead}>5</TableCell>
              <TableCell className={styles.tablehead}>
                <img src="/icons/up-green.svg" alt="green upward arrow" />62  <img src="/icons/down-red.svg" alt="red downward arrow" />12
              </TableCell>
              <TableCell classname={styles.tablesmall}>
                <span className={styles.grey}>#1-10</span>
                <span className={styles.black}> 11</span>
                <span className={styles.green}> 0</span>
                <br/>
                <span className={styles.grey}>#1-10</span>
                <span className={styles.black}> 11</span>
                <span className={styles.red}> 0</span>
              </TableCell>
              <TableCell className={styles.country}>United Stated</TableCell>
            </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}