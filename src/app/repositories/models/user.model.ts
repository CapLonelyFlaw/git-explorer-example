export class User {
    name: string = '';
    avatarUrl: string = '';
    htmlUrl: string = '';

    constructor(data: any = {name: '', avatarUrl: '', htmlUrl: ''}) {
        this.name = data.login || data.name;
        this.avatarUrl = data.avatar_url || data.avatarUrl;
        this.htmlUrl = data.html_url || data.htmlUrl;
    }
}
