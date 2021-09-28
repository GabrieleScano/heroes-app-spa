import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ({history}) => {

  const location = useLocation()
  const { q = ''} = queryString.parse(location.search)
 
  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  })
  const { searchText } = formValues
  const heroesFiltered = useMemo(() => getHeroByName(q),[q])

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${searchText}`)
  }

 

  return (
    <div>
      <div className="row">
        <div className="col-5">
          <h1>Search</h1>
          <hr />  
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Find your hero"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
            <h4 className="mt-2">Results</h4>
            <hr />
            {
                (q ==='') &&
                <div className="alert alert-info">
                  Search a hero
                </div>
            }
            {
                (q !=='' && heroesFiltered.length === 0 ) &&
                <div className="alert alert-danger">
                  There is no hero named {q}
                </div>
            }
                {
                    heroesFiltered.map(hero => (
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }

            
        </div>
      </div>
    </div>
  );
};
