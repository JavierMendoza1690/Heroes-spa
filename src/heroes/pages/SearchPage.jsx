import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroesbyName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = queryString.parse(location.search);
  const { q = "" } = query;

  const heroes = getHeroesbyName(q);

  const showSearch = q.length === 0;
  const showError = heroes.length === 0 && q.length !== 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText.toLowerCase().trim()}`);
    /*
      toLowerCase() en minusculas
      trim() elimina espacios al principio y final
    */
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {showSearch && (
            <div className="alert alert-primary img-thumbnail animate__animated animate__fadeIn">
              Search a hero
            </div>
          )}

          {showError && (
            <div className="alert alert-danger img-thumbnail animate__animated animate__fadeIn">
              No hero with <b>{q}</b>
            </div>
          )}

          {/* <div
            className="alert alert-primary img-thumbnail animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger img-thumbnail animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div> */}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
