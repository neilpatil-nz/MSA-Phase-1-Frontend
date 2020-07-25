import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    links: any[];
    data: any[];
}
interface IMediaGridProps {
    SearchQuery: (string | null);

}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ links: [], data: [] }]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=fa2f08693f7614ef9efb033dc32bc48e&query='+ props.SearchQuery)
            .then(data => data.json())
            .then(data => {
                setItemArray(data.results)
                console.log(data)
                console.log(data.results)
                console.log(data.results[1].title)
            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SearchQuery]);

    console.log(ItemArray[2]);

    var Cards: JSX.Element[] = [];
    /*ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el.links || !el.data) {
            return;
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard ImageUrl={el[][0]['href']} Description={el[][0]['description']} />
            </Grid>)
    })
    */

    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid