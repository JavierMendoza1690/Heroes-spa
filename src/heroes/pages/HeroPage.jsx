import { useMemo} from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroByHeroid } from "../helpers";


export const HeroPage = () => {

  const { heroid } = useParams();
  const navigate = useNavigate();
 

  const hero = useMemo( ()=>(
    getHeroByHeroid(heroid))
    ,[heroid]); 

  const onNavigateBack = ()=>{
     navigate(-1);
  }


  if(!hero){
    return <Navigate to={"/marvel"} />
  }
 
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={`./heroes/${heroid}.jpg`}
        alt={hero.superhero}
        className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"> <b>First first appearance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <button 
        className="btn btn-outline-success"
        onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
   
  )
}
