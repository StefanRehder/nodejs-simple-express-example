import { Hero } from "../models/hero";

// In memory data used for this example
// It could be replaced by a database or a file
export class HeroCollection
{
    private static heroesMap : Map<string, Hero> = new Map<string, Hero>();

    constructor()
    {
        // Always start with one Hero
        const hero: Hero = ({
            name: 'Super Woman',
            strength: 7
        })
        HeroCollection.addHero(hero);
    }

    public static addHero(hero: Hero)
    {
        HeroCollection.heroesMap.set(hero.name, hero);
    }

    public static getHero(name: string): Hero
    {
        return HeroCollection.heroesMap.get(name);
    }

    public static putHero(hero: Hero)
    {
        if (HeroCollection.heroesMap.has(hero.name))
        {
            this.deleteHero(hero.name);
        }
        this.addHero(hero);
    }

    public static deleteHero(name: string)
    {
        HeroCollection.heroesMap.delete(name);
    }

    public static getHeroes(): Hero[]
    {
        return Array.from(HeroCollection.heroesMap.values());
    }
}
