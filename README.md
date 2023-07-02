# livekit-stream-website

Stream your website to Twitch using LiveKit egress. 

## Setup

* Clone the repo
* Install dependencies: `npm i`

## Start Stream

```
npm start
```

This will print the egress id into the console, use that ID and add it into the .env `LIVEKIT_EGRESS_ID` so that you can then stop it again later. 

## Stop Stream

```
npm run stop
```
