import { 
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, EmailAuthProvider, updatePassword, reauthenticateWithCredential, signOut 
} from "./app.js"

export const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
    return signOut(auth);
};

export async function reauthUser() {
    const user = auth.currentUser;
    if (!user) throw new Error("No logged-in user");

    const password = prompt("Enter your current password: ");
    if(!password) throw new Error("Reauthentication cancelled");

    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);
    console.log("User reauthenticated!");
}

export async function changePassword(){
    const user = auth.currentUser;
    if (!user) throw new Error("No logged-in user");

    alert("This prodecure requires you to have a new login. You may be asked to reauthenticate.")

    const newPassword = prompt("Enter a new password");
    if (!newPassword) throw new Error("No password given");

    try{
        await updatePassword(user, newPassword);
        alert("Password succesfully changed!");        
    } catch (error) {
        if(error.code === "auth/requires-recent-login"){
            try{
                await reauthUser();
                await updatePassword(user, newPassword);
                alert("Password succesfully changed!");
            } catch (err) {
                throw new Error("Failed to authenticate. Please contact support @ stemtutors2025@outlook.com");
            }
        }
        else{
            console.error("Failed to authenticate.");
            alert("Failed to authenticate. Please contact support @ stemtutors2025@outlook.com");
        }
    }
}

//For account deletion see firestore.js