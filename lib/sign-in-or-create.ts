import { signInWithGoogle } from "./firebase";
import { getUserData } from "./get-user-data";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function signInFunc(
	router: AppRouterInstance,
) {
	await signInWithGoogle().then(async (result) => {
		if (result.user.uid) {
			// should always be true
			const user = await getUserData(result.user.uid);
			if (user) {
				if (user.doneForm) {
					router.push("/dashboard");
				} else {
					router.push("/form");
				}
			} else {
				setDoc(doc(db, "users", result.user.uid), {
					uid: result.user.uid,
					doneForm: false,
					photoURL: result.user.photoURL,
					email: result.user.email,
                    name: result.user.displayName,
				});

				router.push("/form");
			}
		} else {
			throw new Error("User not signed in");
		}
	});
}