# Metabase Ionic + React example

Test for https://github.com/metabase/metabase/pull/64719

## Requirements

* Node.js
* Cocoapods
* Ruby

## Run (iOS)

```
npm install

npx @ionic/cli cap copy && npx cap run ios
```

## Verify

Open Safari, go to Develop > (your iOS device) > localhost

From the Web Inspector, run `window.location.reload()` in the console. Observe no requests are failing

Without this change, cross-origin requests are rejected due to their origin being `capacitor://localhost`
