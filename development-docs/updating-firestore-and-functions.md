# Before you start

If you do not have access to the Firebase console for the project, you will not be able to deploy changes to the Firestore configuration and Functions. If you believe you should have access, discuss it with the moderators in the [Commander Spellbook Discord server](https://discord.gg/KDnvP5f).

# Auth

## Email Link

We use the [Email Link strategy](https://firebase.google.com/docs/auth/web/email-link-auth?authuser=1) for logging in. Basically, instead of having our users remember a password to log in, they simply enter their email and then click the link that gets mailed to them. That opens them back on the app and they are logged in!

## Discord Login

In the future, we intend to support Discord login as well.

## user-permissions


Upon user creation, we have a server side function that sets the default permissions for the user, only granting them the ability to propose new combos. An administrator with the `manage_permissions` claim can modify what a user is allowed to do.

We need to limit what users are allowed to do, so set certain custom claims on the user to set what they are allowed to do. Here are the options:

* `propose_combo` - can submit new combos for review on the site
* `edit_combo` - can edit a combo proposed for the site and mark it as ready for final review
* `reject_combo` - can mark a proposed combo as rejected
* `finalize_combo` - can mark a proposed combo as ready to be seen on the production site
* `manage_permissions` - can change the user permissions of another user

# Firestore

This is where the app's data is stored. Current collections are:

```
proposed-combos
combos
```

## Indexes

TODO

## Rules

The [`firestore.rules`](../firestore.rules) file dictates the changes that can be made to documents in the Firestore database on the client. Warning: these rules do not apply when using functions along with the `firebase-admin` module.

# Functions

The API calls are dictated by the functions in `functions/src/`.

The `functions/src/api` directory dictates the public API and is written as an [express application](https://expressjs.com/).

The `functions/src/db-hooks` directory contains files that manage data events (such as the creation of a user or a combo).

# Emulators

To run the functions and auth locally, first create or modify an `.env` file in the root of the repository with `USE_FIREBASE_EMULATORS` set to true and `NODE_ENVIRONMENT` set to development:

```bash
USE_FIREBASE_EMULATORS=true
NODE_ENVIRONMENT=development
```

You will also need [Java](https://www.java.com/) installed on your machine to run the emulators.

Once those tasks are complete, run:

```bash
npm run firebase:emulate
```

# Deploys

First, log in to Firebase.

```bash
npm run firebase:login
```

TODO - document how to switch projects, local, staging, production??

Then, deploy the changes to the Firestore configuration and Functions.

```bash
npm run firebase:deploy
```