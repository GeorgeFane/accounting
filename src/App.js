import React from "react";

import { TextField, Box, Grid, Toolbar, Tooltip, Typography, Button } from '@mui/material';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

import Header from './Header';
import BasicGrid from './BasicGrid';

var colors = 'darkGreen darkGreen green goldenRod darkGoldenRod indianRed fireBrick fireBrick fireBrick fireBrick fireBrick'.split(' ');
const useStyles = theme => {
    var root = { padding: theme.spacing(3) };
    colors.forEach(color => {
        root['& .' + color] = { backgroundColor: color };
    })
    return { root: root };
};

function getKeys(key, value) {
    // console.log(key, value);
    if (!Object.keys(value).length) {
        return key;
    }
    return Object.entries(value).map(([key1, value1]) => (
        getKeys(key1, value1)
    ));
}

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            forms: [],
            accounts: {
                Assets: {
                    Cash: {},
                    Inventory: {},
                    PPE: {},
                },
                Liabilities: {
                    AccountsPayable: {},
                },
                Equity: {
                    ContributedCapital: {},
                    RetainedEarnings: {
                        Revenue: {},
                        Expense: {},
                        Dividend: {},
                    },
                },
            },
        }
    }
    
    // hooks

    handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.elements);
    }

    // components

    render() {
        const { classes } = this.props;
        var { accounts, count } = this.state;

        const keys = getKeys('accounts', accounts);
        const flat = keys.flat(3);
        const forms = new Array(count).fill(0).map(() => (
            <BasicGrid
                flat={flat}
            />
        ));

        return (
            <div>
                <Header />
                <Toolbar />

                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                        count++;
                        this.setState({ count });
                    }}
                >
                    Add Journal Entry
                </Button>
                
                <form onSubmit={this.handleSubmit}>
                    {forms}
                    <Button
                        type='submit'
                        variant='contained'
                        color='success'
                    >
                        Submit
                    </Button>
                </form>

                <Typography
                    component='pre'
                >
                    {JSON.stringify(accounts, null, 4)}
                </Typography>

            </div>
        );
    }
} // end CommentForm component

export default withStyles(useStyles)(CommentForm);