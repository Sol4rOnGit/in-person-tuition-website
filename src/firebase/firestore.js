import { firestore, doc, setDoc, getDocFromServer, deleteDoc, serverTimestamp, EmailAuthProvider } from './app.js'

export async function getUserData(uid){
    const userDocRef = doc(firestore, "UserData", uid);
    const userDocSnap = await getDocFromServer(userDocRef);
    if(!userDocSnap.exists()){
        throw new Error("User Data is missing!");
    }

    return userDocSnap.data();
}

//For account deletion
import { auth } from './app.js'; 
import { reauthUser, logOut } from './auth.js';

export async function deleteAccount(uid, navigate){
    const confirmed = window.confirm(
        "You are about to delete this account. This includes your login and ALL personal information. Are you SURE?"
    );

    if(!confirmed) return;

    try{
        //Auth
        try{
            await auth.currentUser.delete();

            //Firestore
            const userDocRef = doc(firestore, "UserData", uid);
            await deleteDoc(userDocRef);

            console.log(`Firestore document for ${userDocRef} deleted.`)
        }
        catch(error){
            if(error.code === "auth/requires-recent-login"){
                try{
                    await reauthUser();
                    await auth.currentUser.delete();
                } catch(err) {
                    alert(`Reauthentiation cancelled. Account not deleted. Contact support @ stemtutors2025@outlook.com.`)
                }
            } else {
                console.error(error);
                alert(`Failed to delete user. Account not deleted. Contact support @ stemtutors2025@outlook.com.`)
            }
        }
    }
    catch(error){
        alert(`Failed to delete account. ${error.code} - ${error.message}. Please contact support if the error code isn't self explanatory..`)
    }
}