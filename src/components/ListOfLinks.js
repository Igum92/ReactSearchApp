import React from 'react';
import {List, ListItem} from 'material-ui/List';


const ListOfLinks = ({value}) => {
   let urlValue = encodeURIComponent(value);
    return (
        <div>
            <div>
                Search {value} with:
            </div>
            <div>
                <List>
                    <ListItem primaryText={<a href={"https://www.google.ru/search?q="+ urlValue} > Google </a>}/>
                    <ListItem primaryText={<a href={"https://yandex.ru/search/?text="+ urlValue}> Yandex </a>}/>
                    <ListItem primaryText={<a href={"https://nova.rambler.ru/search?&query="+ urlValue} > Rambler </a>}/>
                </List>
            </div>
        </div>
    );
};

export default ListOfLinks;