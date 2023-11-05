# QRScanner
This is a basic implementation of a QR code reader in React Native, 

## Installation:
 * Install node.js
 > sudo apt install nodejs
* Install Yarn
> sudo npm install --global yarn
* Install Expo
> yarn create expo

## Getting Started:
To run the app server use the following command 
> npx expo start --tunnel

This will start the app and provide a QR code to scan. To scan the code provided by expo go to your phonne app store and install the "expo go" app.

Scan the QR code for the app provided by expo and that is it. You should have the app up and running in your mobile phone.

## App features
Currently the app is a simple implementation of a QR code reader with 2 views. Upon openning the app you will be asked for permission to use the camera if you haven´t allowed already. In case you allowed access to the camera you will be now scanning. When the app detects a QR code it will scan it and navigate to another page where the content of such code will be displayed. 

There are a few changes to be made to the [scan file](./QRreader/components/Scan.js). This currently obtains just data that it retrieves from the QR code, while this would work fine for offline data, there are changes needed to be made to perform requests to other services upon scanning. For this reason changes have to be performed in the [output page](./QRreader/components/outputScreen.js) to display the offline data and the request data.
