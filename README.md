<p align="center">
  <img src="https://github.com/danielsss/bread/blob/main/docs/images/logo.png">
</p>
<h1 align="center">bread.js</h1>

<p align="center">
[![TypeScript](https://img.shields.io/badge/--3178C6?logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
</p>


The bread.js is a library that provides a simple way to access the `M-Team` API.
You can use it to get the information of the user, the torrent, the forum, and so on.


We've also provided the `cli` command to help you get what you want in an advanced way.


# Usage of bread.js



### Prerequisites

- Node.js 19.x or later

### Installation

```bash
pnpm install bread.js
```

### Import

You can import the module in your project like this(Node.js or Typescript):

```javascript
import Bread from 'bread.js';

const bread = new Bread({ key: 'YOUR KEY', url: 'test enviroment will be used in default' });
const info = await bread.member.base('your user id');
```



# Not allowed to access for third-party

> [!IMPORTANT]
> The APIs below are not allowed to access for third-party which means we wouldn't implement them at all.

- /admin/**
- /login
- /apikey/**
- /member/updateLastBrowse
- /member/getSessionList
- /member/revokeSession
- /member/queryUserLoginHistory
- /msg/**
