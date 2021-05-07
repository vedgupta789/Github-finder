class UI {
    constructor(){
        this.profile = document.querySelector('#profile');
    }
    showProfile(user){
        const biox = user.bio===null?'No bio found.':user.bio;
        const namex = user.name===null?'No name found.':user.name;
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row" id='beforealert'>
                <div class="col-sm-3">
                    <img class="img-fluid mb-2" src=${user.avatar_url} alt="">
                    <a href=${user.html_url} target='$_blank' class="btn btn-primary btn-block mb-4">View profile</a>
                </div>
                <div class="col-sm-9">
                    <span class='badge badge-secondary'>Public Respos : ${user.public_repos}</span>
                    <span class='badge badge-primary'>Public Gists : ${user.public_gists}</span>
                    <span class='badge badge-success'>Followers : ${user.followers}</span>
                    <span class='badge badge-info'>Following : ${user.following}</span>
                    <h2 class='mt-3'>${namex}</h2>
                    <p class='mt-3' style='color:grey;'>${biox}</p>
                    <ul class='list-group mt-3'>
                        <li class='list-group-item'>Company : ${user.company}</li>
                        <li class='list-group-item'>Website/Blog : ${user.log}</li>
                        <li class='list-group-item'>Location : ${user.location}</li>
                        <li class='list-group-item'>Since : ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class='page-heading mb-3'>Latest Repos</h3>
        <div id='repos'></div>
        `;
    }

    showAlert(mssg, className){
        this.clearAlert();
        const alert = document.createElement('div');
        alert.className = className;
        alert.appendChild(document.createTextNode(mssg));
        const col1 = document.querySelector('#beforealert');
        let div = document.querySelector('.card');
        div.insertBefore(alert,col1);
        setTimeout(()=>{
            this.clearAlert();
        },3000);
    }
    showRepos (repos) {
        function isEmpty(obj) {
            for(var prop in obj) {
                if(obj.hasOwnProperty(prop))
                    return false;
            }
        
            return true;
        }
        if(isEmpty(repos)){
            
            document.getElementById('repos').innerHTML = '<div style="color:grey;font-size:12px;">No repos Found !</div>';
            
        } else {
            let output ='';
            repos.forEach(function(repo){
                output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-sm-6">
                            <a href="${repo.html_url}" class='repo-link' target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-sm-6">
                        <span class='badge badge-primary'>Stars : ${repo.stargazers_count}</span>
                        <span class='badge badge-success'>Watchers : ${repo.watchers_count}</span>
                        <span class='badge badge-info'>Forks : ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
                `;
                
            });
            document.getElementById('repos').innerHTML = output;
        }
        
    }
    clearAlert(){
        const element = document.querySelector('.alert');
        if (element){
            element.remove();
        }
        
    }
    clearProfile(){
        this.profile.innerHTML='';
    }
}