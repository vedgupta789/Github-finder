const github = new Github;
const ui = new UI;
const authorName = document.querySelector('#author');
authorName.addEventListener('click', e => {
    displayProfile('vedgupta789');
});
const searchText = document.querySelector('#usertext');
searchText.addEventListener('keyup', e => {
    const userText = e.target.value;
    displayProfile(userText);
});
function displayProfile(userText){
    if (userText!=''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    ui.showAlert('User Not Found.','alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        ui.clearProfile();
    }
} 