import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SelectField from './SelectField';
import NumberField from './NumberField';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid({ flat }) {
    const [type, setType] = React.useState();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Item>
                        <NumberField
                            label='Entry'
                        />
                    </Item>
                </Grid>
                <Grid item>
                    <Item>
                        <SelectField
                            label='Type'
                            items={'Debit Credit'.split(' ')}
                            onChange={event => setType(
                                event.target.value
                            )}
                        />
                    </Item>
                </Grid>
                <Grid item>
                    <Item>
                        <SelectField
                            label='Account'
                            items={flat}
                        />
                    </Item>
                </Grid>
                <Grid item>
                    <Item>
                        <NumberField
                            label='Amount'
                        />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
