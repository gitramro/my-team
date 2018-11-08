import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyDSzsJ-yx9ju8XgUyPIXWTugpa01hcZYMs',
  authDomain: 'the-team-21d47.firebaseapp.com',
  databaseURL: 'https://the-team-21d47.firebaseio.com',
  projectId: 'the-team-21d47',
  storageBucket: 'the-team-21d47.appspot.com',
  messagingSenderId: '327584816244'
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export { firebase, firebaseMatches, firebasePromotions, firebaseTeams, firebaseDB, firebasePlayers };
