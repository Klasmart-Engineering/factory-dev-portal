
import { SubscriptionState } from '@kl-engineering/factory-subscriptions-api-client/dist/api/subscription';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

enum ButtonAction {
    ACTIVATE = `Activate`,
    DEACTIVATE = `Deactivate`,
}

interface Props {
    state: SubscriptionState;
    onChangeState: () => void;
}

export default function SubscriptionContentState (props: Props) {
    const { state, onChangeState } = props;
    const buttonAction = state === SubscriptionState.DISABLED ? ButtonAction.ACTIVATE : ButtonAction.DEACTIVATE;

    return (
        <Box sx={{
            display: `flex`,
            paddingTop: 2,
            alignItems: `center`,
            justifyContent: `space-between`,
        }}
        >
            <Typography
                variant="body1"
                color="text.secondary"
            >
                <strong>State: </strong>
                {state}
            </Typography>
            <Button
                variant="contained"
                onClick={()=>onChangeState()}
            >
                {buttonAction}
            </Button>
        </Box>
    );
}
