import React from 'react';
import "./tour.scss";

class Tour extends React.Component {
    state = {
        showInfo: false
    }

    toggleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo })
    }


    render() {
        const { name, img, city, info, id } = this.props.tour
        const { removeTour } = this.props;


        return (

            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="image of the tour" />
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{""}
                        <span onClick={this.toggleInfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>

            </article>
        )
    }
}

export default Tour