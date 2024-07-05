export class Movie {
    constructor(
        public id: number,
        public title: string,
        public empireDescription: string,
        public movieOverview: string,
        public releaseDate: string,
        public releaseYear: number,
        public genres: string[],
        public searchURL: string,
        public imageSource: string,
        public imageAlt: string
    ) {}
}