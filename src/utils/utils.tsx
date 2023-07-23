export function formatPokemonName(name: string): string {
    if (name.includes("♀")) {
        return name.replace("♀", "-f");
    } else if (name.includes("♂")) {
        return name.replace("♂", "-m");
    } else if (name.includes(". ")) {
        return name.replace(". ", "-");
    } else if (name.includes(" ")) {
        return name.replace("farfech'd", "farfetchd");
    } else {
        return name.toLowerCase(); // Convertir el nombre a minúsculas
    }
}


export function waitFor(time: number): Promise<void>{
    return new Promise((resolve) => setTimeout(resolve, time));
}