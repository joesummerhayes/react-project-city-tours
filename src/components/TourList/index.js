import React from 'react';
import Tour from '../Tour';
import './tourlist.scss';
import { tourData } from '../../tourData';

export default class TourList extends React.Component {
    state = {
        tours: tourData
    }

    removeTour = (id) => {
        const { tours } = this.state;
        const sortedTours = tours.filter((tour) => tour.id !== id);
        this.setState({ tours: sortedTours });
    }

    render() {
        const { tours } = this.state
        return (
            <section className="tourlist">
                {
                    tours.map((item) => {
                        return (
                            <Tour
                                key={item.id}
                                img={item.img}
                                name={item.name}
                                info={item.info}
                                city={item.city}
                                tour={item}
                                removeTour={this.removeTour}
                            />
                        )
                    })
                }
            </section>
        )
    }
}

