let store = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    render() {
        console.log("Render function")
    },
    addPost() {
        let Post = {
            id : 5,
            message: this._state.profilePage.postValue,
        };
        this._state.profilePage.posts.push(Post);
        this._state.profilePage.postValue = "";
        this.render();
    },
    updateValuePost(value) {
        this._state.profilePage.postValue = value;
        this.render();
    },
    subscribe(observer) {
        this.render = observer;
    }
}

export default store
window.store = store