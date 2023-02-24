import { heroes } from "../data/heroes"

export const getHeroByHeroid = ( heroid ) => {
    return heroes.find( (hero) => hero.id === heroid);
}
