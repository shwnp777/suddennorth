import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCXF2qmOGU2mpMWIZ90_oZIjwE75Ov3gQI',
	authDomain: 'suddennorth.firebaseapp.com',
	projectId: 'suddennorth',
	storageBucket: 'suddennorth.firebasestorage.app',
	messagingSenderId: '797530177086',
	appId: '1:797530177086:web:3adf3c913ebf89d519db6f',
	measurementId: 'G-G1K4L6FB2G',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

if (typeof window !== 'undefined') {
	isSupported().then((supported) => {
		if (supported) getAnalytics(app);
	}).catch(() => {});
}

export async function submitContactForm({ name, email, organization, market, message }) {
	return addDoc(collection(db, 'contact_submissions'), {
		name,
		email,
		organization,
		market,
		message,
		source: 'suddennorth.com',
		createdAt: serverTimestamp(),
	});
}
