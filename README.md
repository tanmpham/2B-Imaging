# 2B Imaging Gallery Application

## Setup instructions:

Download NodeJs Windows Installer (LTS Version) <a href='https://nodejs.org/en/download'>https://nodejs.org/en/download</a>

### Install dependencies and run the front-end app locally

```powershell
cd frontend
npm i -g yarn
yarn install
yarn dev
```

`PWA version:` Run `yarn build` before `yarn start`. The put http://localhost:3000/ in the browser, wait for the website to load, and you'll see the download option on the far right the search bar. After installed the PWA, you can run `yarn dev` (no `yarn start` or `yarn build`).

### Install dependencies, set up and run the back-end app locally

`Note:` Please download the sample images sent from the sponsor, and copy them to the server/patientimages folder (create the patientimages folder if not exist).

Run the script `server/eyecameradb.sql` inside MySQL Workbench.

#### Server back-end

`Requirement:` MySQL (2.1M). <a href='https://dev.mysql.com/downloads/installer/'>https://dev.mysql.com/downloads/installer/</a>

Create a NEW app_conf.yml files (content is based on app_conf.example.yml).

```powershell
cd server
pip install -r requirements.txt
py populate-db.py
py app.py
```

#### Images Hosting Service

Make sure the images in images_hosting_svc\patientimages is the same as those in server\patientimages.

```powershell
cd images_hosting_svc
py app.py
```

#### Client back-end (OPTIONAL - for offline-purpose)

Create a NEW app_conf.yml files (content is based on app_conf.example.yml).

```powershell
cd client
pip install -r requirements.txt
py create_tables.py
py populate-db.py
py app.py
```

### Docker

`Requirement:` Docker Desktop. <a href='https://www.docker.com/products/docker-desktop/'>https://www.docker.com/products/docker-desktop/</a>

```powershell
cd client/deployment
docker-compose build
docker-compose up # start the app
docker-compose down # stop the app
```

### Technologies used:

<a
		href="https://redux.js.org"
		target="_blank"
		rel="noreferrer">
<img align="left" alt="Redux" width="24px" src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" />
</a>
<a
		href="https://www.typescriptlang.org/"
		target="_blank"
		rel="noreferrer">
<img align="left" alt="TypeScript" width="24px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" />
</a>
<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
<img align="left" alt="VSCode" width="24px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/640px-Visual_Studio_Code_1.35_icon.svg.png"/>
</a>
<a
		href="https://tailwindcss.com/"
		target="_blank"
		rel="noreferrer">
<img align="left" alt="TailwindCSS" width="24px" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" />
</a>
<a
		href="https://www.mysql.com/"
		target="_blank"
		rel="noreferrer">
<img align="left" alt="MySQL" width="24px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" />
</a>
<a
		href="https://www.python.org"
		target="_blank"
		rel="noreferrer">
<img align="left" alt="Python" width="24px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
</a>
<a
		href="https://nextjs.org/"
		target="_blank"
		rel="noreferrer">
<img align="left" alt="NextJs" width="24px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
</a>
<br/>
