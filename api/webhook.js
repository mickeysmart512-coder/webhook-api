// const express = require('express');
// const admin = require('firebase-admin');
// require('dotenv').config();
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//     privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//   }),
// });

// const db = admin.firestore();
// const app = express();
// app.use(express.json());

// // Webhook endpoint
// app.post('/webhook', async (req, res) => {
//   try {
//     const { userId, transactionAmount, transactionType } = req.body;

//     if (!userId || !transactionAmount || !transactionType) {
//       return res.status(400).send('Invalid payload. Required fields are missing.');
//     }

//     const userRef = db.collection('users').doc(userId);
//     const userDoc = await userRef.get();
//     if (!userDoc.exists) {
//       return res.status(404).send('User not found.');
//     }

//     const currentBalance = userDoc.data().balance || 0;
//     let newBalance;

//     if (transactionType === 'deposit') {
//       newBalance = currentBalance + transactionAmount;
//     } else if (transactionType === 'withdraw' || transactionType === 'withdrawal') {
//       if (currentBalance < transactionAmount) {
//         return res.status(400).send('Insufficient funds.');
//       }
//       newBalance = currentBalance - transactionAmount;
//     } else {
//       return res.status(400).send('Invalid transaction type.');
//     }

//     await userRef.update({ balance: newBalance });
//     res.status(200).send('User balance updated successfully.');
//   } catch (error) {
//     console.error('Error handling webhook:', error);
//     res.status(500).send('Error processing webhook.');
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });










const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
    // Handle webhook logic
    res.status(200).send('User wallet updated successfully.');
});

module.exports = app;
