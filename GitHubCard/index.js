const placement=document.querySelector('.cards');


axios.get("https://api.github.com/users/tetondan").then(resp=>{
  console.log('mygithub',resp.data);
});




/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = ["tetondan",
"dustinmyers",
"justsml",
"luishrd",
"bigknell"];


// axios.get(`https://api.github.com/users/${}`)
//   .then(resp=>{
//   console.log('mygithub',resp.data);
//   const personinformation={name: resp.data.name, login: resp.data.login, location:resp.data.location, html_url:resp.data.html_url, followers:resp.data.followers, following:resp.data.following, bio:resp.data.bio, avatar_url:resp.data.avatar_url}
//   const needtomakename =makeGit(personinformation)
//    placement.appendChild(needtomakename); 
// })  
//   .catch(err=>{
//     console.error(err);
//   })
//   .finally(()=>{
//     console.log('finally');
//   }
//   )

followersArray.forEach(follower=>{
  axios.get(`https://api.github.com/users/${follower}`)
  .then(resp=>{
  console.log('mygithub',resp.data);
  const personinformation={name: resp.data.name, login: resp.data.login, location:resp.data.location, html_url:resp.data.html_url, followers:resp.data.followers, following:resp.data.following, bio:resp.data.bio, avatar_url:resp.data.avatar_url}
  const needtomakename =makeGit(personinformation)
   placement.appendChild(needtomakename); 
})  
  .catch(err=>{
    console.error(err);
  })
  .finally(()=>{
    console.log('finally');
  }
  )
})







// working 
axios.get("https://api.github.com/users/pjaepole")
  .then(resp=>{
  console.log('mygithub',resp.data);
  const personinformation={name: resp.data.name, login: resp.data.login, location:resp.data.location, html_url:resp.data.html_url, followers:resp.data.followers, following:resp.data.following, bio:resp.data.bio, avatar_url:resp.data.avatar_url}
  const needtomakename =makeGit(personinformation)
   placement.appendChild(needtomakename); 
})  
  .catch(err=>{
    console.error(err);
  })
  .finally(()=>{
    console.log('finally');
  }
  )



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>

        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function makeGit({name,login,location,html_url,followers,following,bio,avatar_url}){
  // added element
  const card=document.createElement('div');
    const userImg=document.createElement('img');
    const cardInfo=document.createElement('div');
      const username=document.createElement('h3');
      const usernameP=document.createElement('p');
      const userlocation=document.createElement('p');
      const userprofile=document.createElement('p');
          const userprofileAtag=document.createElement('a');
      const follower=document.createElement('p');
      const followingg=document.createElement('p');
      const userBio=document.createElement('p');

  //setting structure
  card.appendChild(userImg);
  card.appendChild(cardInfo);
      cardInfo.appendChild(username);
      cardInfo.appendChild(usernameP);
      cardInfo.appendChild(userlocation);
      cardInfo.appendChild(userprofile);
            userprofile.appendChild(userprofileAtag);
      cardInfo.appendChild(follower);
      cardInfo.appendChild(followingg);
      cardInfo.appendChild(userBio);

  //adding class name
  card.classList.add('card');
  cardInfo.classList.add('card-info');
      username.classList.add('name');
      usernameP.classList.add('username')

                                  //adding text content neeed to update ${}
                                      username.textContent=`${name}` ;
                                      usernameP.textContent= `${login}`;
                                      userlocation.textContent=`Location: ${location}`;
                                      userprofile.textContent="Profile:";
                                          userprofileAtag.textContent=`${html_url}`
                                      follower.textContent=`Followers: ${followers}`;
                                      followingg.textContent=`Following: ${following}`;
                                      userBio.textContent=`Bio: ${bio}`;

                                  //setting href and src to userImg and userprofileAtag
                                  userImg.src=avatar_url ;
                                  userprofileAtag.href=html_url;           
                                  

  //don't forget to return since it is a function
  return card;
}








/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
