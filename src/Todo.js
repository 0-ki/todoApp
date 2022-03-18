import React, { useState } from "react";
import { Checkbox, InputBase, ListItem, ListItemText} from "@material-ui/core";


function Todo(props) {
    let [item, setItem] = useState(props.item);
// class Todo extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {item: item}
//     }
    // render() {
        console.log(item.title);
    return (
        <ListItem>
            <Checkbox checked={item.done} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label":"naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    )
}
// }

export default Todo;