const functions = require('firebase-functions');
const admin = require('firebase-admin');

//added to use the admin SDKs to interact with services like auth service and firestore service
admin.initializeApp(functions.config().firebase)

//trigger here is onRequest so this runs when there is a browser request to its URL
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications').add(notification).then( doc => {
        console.log('notification added', doc);//this logs to the firebase functions log tab.
    })
})


//trigger here is onCreate
exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {
    const newProject = doc.data();
    const notification = {
        notif_type: 'Added a new Project',
        user: `${newProject.authorFirstName} ${newProject.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
})

exports.userJoined = functions.auth.user().onCreate( user => {
    return admin.firestore().collection('users').doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
            notif_type: 'New User Joined',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })
})