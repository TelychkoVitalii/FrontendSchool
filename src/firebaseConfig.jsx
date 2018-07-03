import fireBase from 'firebase/app';

const config = {
    apiKey: "AIzaSyAVuScUNx3LGBTVQ-iOBOkhs0CpMiGSeW0",
    authDomain: "contactform-59ba8.firebaseapp.com",
    databaseURL: "https://contactform-59ba8.firebaseio.com",
    projectId: "contactform-59ba8",
    storageBucket: "contactform-59ba8.appspot.com",
    messagingSenderId: "156973190420"
};

fireBase.initializeApp(config);

export const onPostData = (data) => {
    const messageRef = fireBase.database().ref('users'),
        newMessageRef = messageRef.push();
    newMessageRef.set(data);
};