import React from 'react'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// [TODO] Move this to QuizStartTimer.css
const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#ffffff',
    margin: '15px',
    minHeight: '200px',
    backgroundColor: '#2f0338',
  },
});

class QuizStartTimer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <div className="row" style={{ padding: '20px', paddingTop: '10%' }}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h4" component="h3" style={{ color: '#ffffff', paddingTop: '15%' }}>
                Starts in <br /> {this.props.startTime}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h4" component="h3" style={{ color: '#ffffff', paddingTop: '15%' }}>
                {this.props.usersJoined} Users have joined so far !!
                  </Typography>
            </Paper>
          </Grid>
        </div>
      </div>
    )
  }
}


QuizStartTimer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuizStartTimer);
