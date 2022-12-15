import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD7qxw5lA5WEDZ4wRAEp-NgleSpIo1yIW0",
  authDomain: "iotoad-2643b.firebaseapp.com",
  projectId: "iotoad-2643b",
  storageBucket: "iotoad-2643b.appspot.com",
  messagingSenderId: "846920427163",
  appId: "1:846920427163:web:dce322d35fe7854616883e",
  measurementId: "G-HSFZ97SCT2"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
