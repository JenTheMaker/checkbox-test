import { IconButton, Checkbox, ListItem, ListItemSecondaryAction } from "@material-ui/core";
import React from "react";

const CheckboxComponent = (props: any) => (
    <>
        <ListItem>
            <Checkbox
                data-testid="checkbox"
                onClick={() => { props.onClick(props.checkboxItem) }}
                checked={props.checkboxItem.done}
                disableRipple
                inputProps={{ 'aria-label': 'checkbox' }}
            />
            {props.checkboxItem.id}
            {String(props.checkboxItem.done)}
            <ListItemSecondaryAction>
                <IconButton
                    data-testid="button"
                    onClick={() => {
                        props.onClick(props.checkboxItem);
                    }}>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </>
);

export default CheckboxComponent;