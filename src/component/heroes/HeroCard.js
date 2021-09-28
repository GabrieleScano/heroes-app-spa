import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card ms-3">
            <div className="row no-glutters">
                <div className="col-md-4">
                    <img 
                    className="card-img"
                    alt={superhero}
                    src={`./assets/heroes/${id}.jpg`} 
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {superhero}
                        </h5>
                        <p className="card-text">
                            {alter_ego}
                        </p>
                        {
                            (alter_ego !== characters) && <p>{characters}</p>
                        }
                        <p className="text-muted">{first_appearance}</p>
                        <Link to={`./hero/${id}`}>Más...</Link>
                    </div>

                </div>

            </div>
        </div>
    )
}
