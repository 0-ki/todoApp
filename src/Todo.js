import React, { useState } from "react";
import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    ListItemSecondaryAction,
    IconButton,
} from "@material-ui/core";

import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const Todo = (props) => {
    const [item, setItem] = useState(props.item)
    const [readOnly, setReadOnly] = useState(true);
    const deleteItem = props.deleteItem;

    const deleteEventHandler = () => {
        deleteItem(item);
    };

    const offReadOnlyMode = () => {
        setReadOnly(false);
    };

    const enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            setReadOnly(true);
        }
    };

    const editEventHandler = (e) => {
        const thisItem = item;
        thisItem.title = e.target.value;
        setItem(thisItem);
    };

    const checkboxEventHandler = (e) => {
        const thisItem = item;
        thisItem.done = !thisItem.done;
        setItem(thisItem);
    };

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                        readOnly: readOnly,
                    }}
                    type="text"
                    id={''+item.id}
                    name={''+item.id}
                    value={''+item.title}
                    fullWidth={true}
                    onClick={offReadOnlyMode}
                    onChange={editEventHandler}
                    onKeyPress={enterKeyEventHandler}
                />
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;
/*
import React, { useState } from "react";
import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText, TextareaAutosize} from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

function Todo(props) {

    let [item, setItem] = useState(props.item);
    let [text, setText] = useState(item.title);
    let [readOnly, setReadOnly] = useState(true);

    function deleteEventHandler () {
        props.deleteItem(item);
    }

    function offReadOnly () {
        setReadOnly(false);
        // console.log("off Readonly", readOnly);
    }

    function enterKeyEventHandler(e) {
        if(e.key === "Enter") setReadOnly(true);
        // console.log("Enter Todo Item", readOnly);
    }

    const editEventHandler = (e) => {
        setText(e.target.value);
        const thisItem = item;
        thisItem.title = text;
        console.log("Edit", text);
        setItem(thisItem)
    }

    function checkEventHandler(e) {
        const thisItem = item;
        thisItem.done = !thisItem.done;
        setItem(thisItem);
        console.log(item.done);
    }

    return (
        <ListItem>
            <Checkbox checked={item.done} onClick={(e)=>{checkEventHandler(e)}}/>
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label":"naked",
                        readOnly: readOnly,
                }}
                onClick={(e)=>{offReadOnly(e)}}
                onKeyDown={(e)=>{enterKeyEventHandler(e)}}
                onChange={(e)=>{editEventHandler(e)}}
                        type="text"
                        id={''+item.id}
                        name={''+item.id}
                        value={text}
                        multiline={true}
                        fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={(e)=>{deleteEventHandler(e)}} title={''+item.id}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
// }

export default Todo;
*/