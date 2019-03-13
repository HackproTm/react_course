import React, { Component} from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  loading: {
    padding: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
};

class Loading extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }
}

export default withStyles(styles)(Loading);
