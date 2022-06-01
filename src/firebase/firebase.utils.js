import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBVM2GnZ5caSugLihVUfmoqZ-ewBn-v9VU',
	authDomain: 'fling-clothing.firebaseapp.com',
	projectId: 'fling-clothing',
	storageBucket: 'fling-clothing.appspot.com',
	messagingSenderId: '335024647268',
	appId: '1:335024647268:web:b677d3a39f38edaaf60371'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const createUserProfileDocument = async (user, additionalData) => {
	const userRef = doc(db, `users/${user.uid}`);
	const userSnap = await getDoc(userRef);
	console.log(userSnap.exists() === false);
	if (userSnap.exists()) {
	} else {
		const { displayName, email } = user;
		const createdAt = new Date();

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (e) {
			console.error('Error creating user: ', e);
		}
	}

	return userRef;
};

const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const signInWithGoogle = () =>
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			// ...
		})
		.catch((error) => {
			// ...
		});
