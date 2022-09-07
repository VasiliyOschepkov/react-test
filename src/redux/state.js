import {render} from "../render";

let state = {
    dialogPage: {
         dialogs: [
            {id: 1, name: 'Vasiliy'},
            {id: 2, name: 'Roma'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Gala'}
        ],

         messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'What are you doing?'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi 1'},
            {id: 2, message: 'Hi 2'},
            {id: 3, message: 'Hi 3'}
        ],
        postValue: "It-camasutra"
    }
}

export let addPost = () => {
    let Post = {
      id : 5,
      message: state.profilePage.postValue,
    };
    state.profilePage.posts.push(Post);
    state.profilePage.postValue = "";
    render(state);
}

export let updateValuePost = (value) => {
    state.profilePage.postValue = value;
    render(state);
}

export default state