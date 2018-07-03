import { User } from './user.model';

export class Repository {

    id: number;
    owner: User = new User();
    htmlUrl: string;
    isFavorite: boolean;
    name: string;
    description: string;

    constructor(data: any) {
        this.owner = new User(data.owner);
        this.id = data.id;
        this.name = data.name;
        this.htmlUrl = data.html_url || data.htmlUrl;
        this.description = data.description;
        this.isFavorite = data.isFavorite;
    }
}
