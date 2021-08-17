# Poop Tracker 🐶💩

A smartphone app to keep track of the important parts.

## Demo

_Screenshots coming soon._

## Devloping

Clone the project

```bash
  gh repo clone rix1/poop-tracker
```

Go to the project directory

```bash
  cd poop-tracker
```

Install dependencies. You might also need to install expo globally? I'm not entirely sure.

```bash
  yarn install
```

Start the server and run on simulator

```bash
  yarn ios
  yarn android # to run on Android emulator
```

## Running an a physical device

To run on a physical device, you need to download the Expo app ([iOS](https://apps.apple.com/app/apple-store/id982107779)/[Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)). Then run

```bash
yarn start
```

This will start up the development server and print out a QR code. Simply scan this code using the Expo app, and the app will be installed.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. Reach out to @rix1 for access.

`SUPABASE_API_URL`

`SUPABASE_API_KEY`

## Tech Stack

**Client:** Expo / React Native

**Server:** Supabase

## Authors

- [@rix1](https://www.github.com/rix1) ([Twitter](https://twitter.com/rix1))
