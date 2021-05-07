class Github {
    constructor(){
        this.clientId = '0ef67de1d9162fc4926c';
        this.clientSecret = 'ac5a436b57d09f7a44aaa40b2e815dd7fc903280';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }
    async getUser(user){
        const repoResponse = await fetch(`https://api.github.com/users/${user}
        /repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}
        &client_secret=${this.clientSecret}`);

        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}