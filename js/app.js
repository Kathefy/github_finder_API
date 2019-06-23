const searchUser = document.getElementById('searchUser');
const github = new GitHub();
const ui = new UI();

// Search user
searchUser.addEventListener('keyup', e => {
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // show profile and repos
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile container when input is empty
    ui.clearProfile();
  }
});
