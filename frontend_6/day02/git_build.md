# git : 리눅스 명령 환경 
git-scm.com 다운로드 
폴더이동 > 마우스 오른쪽 버튼 > git-bash here

# git upload
```
echo "# afterClass" >> README.md
// 문서를 만든다.
$ git init
// git 폴더 초기화 
$ git add .
// git 업로드할 파일 선택 
$ git commit -m "first commit"
// 버전관리에 들어갈 설명 쓰기 
$ git branch -M main
// master => main
git config  --global  user.email "여러분이메일주소"
git config  --global  user.name "여러분이름"

git remote add origin https://github.com/ahsor/afterClass.git
// 업로드할 폴더와 로컬폴더를 연결
// staging : 업로드할 준비 

git push -u origin main
// 진짜 업로드
```


# 두번째 접속 후 업로드 
```
git remote add origin https://github.com/ahsor/afterClass.git
git branch -M main
git push -u origin main
```


# git config 설정하는 방법
만약 위에서 user.name 그리고 user.email을 바꾸려면 어떻게 하는지 알아봅니다. 각각 아래와 같습니다. --global를 사용하여 전역으로 설정
git config --global user.name "홍길동"
git config --global user.email "email"


# git config 삭제하기
git config --unset user.name
git config --unset user.email

만약 삭제해도 계속 남아있다면? global로 설정한 경우 반드시 global 옵션을 추가해야 해당 값이 삭제
git config --global --unset  user.name
git config --global --unset  user.email

이제 삭제가 되었는지 리스트에서 확인
git config --list


# 마지막 커밋 메시지 수정  
PS C:\web\day98_0628> git commit --amend -m "바꿀 메시지"
PS C:\web\day98_0628> git commit --amend ;
리눅스 편집창으로 진입 " 바꿀 메시지를 쓰기" 
리눅스 평집창에서 나오기 ESC > :wq

# commit log 확인
git log

# 깃 강제 갱신 
PS C:\web\day98_0628> git push -f

[깃 커밋 제거]
PS C:\web\day98_0628> git reset HEAD^~n
n 대신 지울 개수 지정
[이전 커밋 수정 ] 
PS C:\web\day98_0628> git rebase -i HEAD~3 

# git history 지우기
history  -c
rm .bash_history
vim .bash_history
 
# git cache  삭제
git rm -r --cached .
git add .
git commit -m "cache clear"


# 사용자가 여러명인 컴에서 git 사용하기
# git 자격증명 관리 
- 제어판 > 사용자 계정 > 자격 증명 관리자 이동하기
- 자격 증명 관리에서 Windows 자격 증명 선택
- 일반 자격 증명에서 git에 해당하는 증명 정보를 수정하거나 삭제하기

# git remote origin 삭제
git remote remove origin

# git 토큰 관리 
Signed in as 아이디
> Settings 
> Developer settings 
> Personal access tokens 
> repo 제목 클릭  > Regenerate token


# 넷플릭스 : Javascript + pages 배포
https://jemicom.github.io/myflix/

# 용우동 : https://gentle-valkyrie-f6b034.netlify.app/
          git + netlify  :   https://magical-naiad-a2b4ff.netlify.app/

# crud-test : javascript => herokeugit 배포 

# 리엑트 폴더 netlify 직접 배포 
1. npm run build : build 폴더 생성 확인 
2. team > Sites > 하단에 Drag and drop your site output folder here 에 build 폴더만 배포

# 리엑트 git -> netlify 연동 배포 
1. git 업로드 
2. Add new site > Import an existing project > 연동 배포할 곳 선택 
3. 빌드시 발생하는 오류를 깃으로 해결하면 자동 연동되며 배포됨 
* 필요 없는 패키지를 제거한 후 빌드 : 배포후 지워도 상관 없음 
npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals
index.js의 web-vitals 설정도 모두 지운다. 


# 리엑트 자동배포 페이지 github-pages로 배포 
1. npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals
index.js
2. npm i gh-pages -D 
3. package.json 수정 
{
  "name": "context-blog",
  "homepage": "https://jemicom.github.io/context-blog",  /// 추가 
  "version": "0.1.0",
  "private": true,
  
  "scripts": {
    "predeploy":"npm run build",   /// 추가
    "deploy":"gh-pages -d build",   /// 추가
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

4. git 리포지토리 만들기 : context-blog
5. git push 
6. npm run deploy
7. https://jemicom.github.io/context-blog 로 접속

# 자동으로 빌드 후 배포 하기
/* 
클라이언트 빌드 -> build 폴더 -> server/build -> 서버 실행
client 폴더로 이동 
npm ci : 패키지 설치 
npm run build
client/build -> server/build 폴더로 이동

server 폴더로 이동 
npm ci : 패키지 설치 
tsc : 컴파일 : 우린 상관 없음 
node app.js
*/

## 해로크 npm run start 해주는 도구
 https://viewingsunset.tistory.com/7

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm install && node server.js",
    "heroku-prebuild": "npm ci" && "npm install"
  },
```  

jemicom@DESKTOP-FST8R6K MINGW64 /d/2021_frontEnd/nodejs/node-server-const
$ heroku --version
 »   Warning: heroku update available from 7.53.0 to 7.60.2.
heroku/7.53.0 win32-x64 node-v12.21.0

jemicom@DESKTOP-FST8R6K MINGW64 /d/2021_frontEnd/nodejs/node-server-const
$ heroku login
 »   Warning: heroku update available from 7.53.0 to 7.60.2.
heroku: Press any key to open up the browser to login or q to exit: q
 »   Error: quit

jemicom@DESKTOP-FST8R6K MINGW64 /d/2021_frontEnd/nodejs/node-server-const
$ git init
Initialized empty Git repository in D:/2021_frontEnd/nodejs/node-server-const/.git/

jemicom@DESKTOP-FST8R6K MINGW64 /d/2021_frontEnd/nodejs/node-server-const (master)
$ heroku git:remote -a crud-hero
 »   Warning: heroku update available from 7.53.0 to 7.60.2.
set git remote heroku to https://git.heroku.com/crud-hero.git

jemicom@DESKTOP-FST8R6K MINGW64 /d/2021_frontEnd/nodejs/node-server-const (master)
$ git add .
warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory

jemicom@DESKTOP-FST8R6K MINGW64 /d/2021_frontEnd/nodejs/node-server-const (master)
$ git commit -am "make it better"
[master (root-commit) cc94cd4] make it better
 14 files changed, 2727 insertions(+)
 create mode 100644 .env
 create mode 100644 Procfile
 create mode 100644 controls/request.js
 create mode 100644 controls/users.js
 create mode 100644 data/data.json
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 routes/users.js
 create mode 100644 server.js
 create mode 100644 views/ceateUser.html
 create mode 100644 views/getUser.html
 create mode 100644 views/getUser02.html
 create mode 100644 views/getUsers.html
 create mode 100644 views/index.html

jemicom@DESKTOP-FST8R6K MINGW64 /d/2021_frontEnd/nodejs/node-server-const (master)
$ git push heroku master
Enumerating objects: 20, done.
Counting objects: 100% (20/20), done.
Delta compression using up to 8 threads
Compressing objects: 100% (16/16), done.
Writing objects: 100% (20/20), 24.21 KiB | 1.86 MiB/s, done.
Total 20 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Building on the Heroku-20 stack
remote: -----> Determining which buildpack to use for this app
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_VERBOSE=false
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:
remote:        Resolving node version 16.x...
remote:        Downloading and installing node 16.16.0...
remote:        Using default npm version: 8.11.0
remote:
remote: -----> Installing dependencies
remote:        Installing node modules
remote:
remote:        added 98 packages, and audited 99 packages in 7s
remote:
remote:        11 packages are looking for funding
remote:          run `npm fund` for details
remote:
remote:        found 0 vulnerabilities
remote:
remote: -----> Build
remote:
remote: -----> Caching build
remote:        - npm cache
remote:
remote: -----> Pruning devDependencies
remote:
remote:        up to date, audited 68 packages in 385ms
remote:
remote:        8 packages are looking for funding
remote:          run `npm fund` for details
remote:
remote:        found 0 vulnerabilities
remote:
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 33.1M
remote: -----> Launching...
remote:        Released v3
remote:        https://crud-hero.herokuapp.com/ deployed to Heroku
remote:
remote: This app is using the Heroku-20 stack, however a newer stack is available.
remote: To upgrade to Heroku-22, see:
remote: https://devcenter.heroku.com/articles/upgrading-to-the-latest-stack
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/crud-hero.git
 * [new branch]      master -> master

jemicom@DESKTOP-FST8R6K MINGW64 /d/2021_frontEnd/nodejs/node-server-const (master)
$

d:\2021_frontEnd\nodejs\node-server-const>heroku apps : 현재 만든 앱 보여준다 
d:\2021_frontEnd\nodejs\node-server-const>heroku apps:destroy --app [앱이름] 

```



