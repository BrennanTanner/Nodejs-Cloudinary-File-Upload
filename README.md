<h1 align = 'center'> Nodejs-Cloudinary-File-Upload </h1>

<div align="center">

[![](https://img.shields.io/badge/Made_with-Nodejs-green?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)

</div>

### About

This repo provides minimum setup required for setting up single/multiple file upload in nodejs using cloudinary. <br><br>
You can read blog version of it here
<br>
<a href="https://medium.com/@rugved-bongale/how-to-upload-single-multiple-image-to-cloudinary-in-node-js-ae9db9f4a0b9">
  https://medium.com/@rugved-bongale/how-to-upload-single-multiple-image-to-cloudinary-in-node-js-ae9db9f4a0b9
</a>.

------------------------------------------
### Installation

Clone the repository and install node modules
```
git clone https://github.com/RugvedB/Nodejs-Cloudinary-File-Upload
cd Nodejs-Cloudinary-File-Upload
npm i
mkdir uploads
```
Add <a href="https://cloudinary.com/">cloudinary</a> configuration in index.js
```
// cloudinary configuration
cloudinary.config({
  cloud_name: "YOUR_CLOUD_NAME",
  api_key: "YOUR_API_NAME",
  api_secret: "YOUR_API_SECRET"
});
```

Run 
```
node index.js
```

Checkout the site on <a href="http://localhost:3000">http://localhost:3000/</a>


------------------------------------------
<h3 align="center"><b>Developed with :heart: by <a href="https://github.com/rugvedb">Rugved</a></h1>
