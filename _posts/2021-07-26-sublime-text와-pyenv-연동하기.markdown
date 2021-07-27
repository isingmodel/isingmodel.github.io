---
layout: post
title:  "sublime text와 pyenv 연동하기"
date:   2021-07-26 15:01:16
categories: Python Sublime_Text
---
sublime text와 pyenv을 연동하는 방법을 소개한다. 

Macbook에 Sublime Text를 설치했더니, pyenv에서 설정한대로 python version이 잡히지 않았다. command line에서 pyenv global을 사용해 내가 원하는 파이썬 버전을 global python 버전으로 설정해도, sublime text에서는 Mac의 기본 python 버전을 인터프리터로 사용했다. 이를 해결하기 위해 이런저런 시도를 해보았다. 결과적으로 Sublime Text의 sublime-build파일을 수정하는 형태로 이를 해결했는데, 그 과정을 간략히 소개한다. 세팅 환경은 Mac 기준이다. 

Sublime Text를 설치하면 각 프로그래밍 언어에 대응하는 sublime-build 파일이 패키지 폴더 안에 생성된다. 이 파일을 열기 위해서는 PackageResourceViewer이라는 Sublime Text의 플러그인이 필요하다. 이 플러그인의 설치 과정은 아래와 같다. 

먼저, Sublime Text의 Preference -> Package Control에 들어가 Install package를 킨다. 

```
Preferences > Package Control > Install Package
```

그러면 상단부에 작은 콘솔창이 생기는데, 여기에 PackageResourceViewer라고 타이핑하고 엔터를 치면 이 패키지가 설치된다. 

이후, 아래의 경로를 따라가면 python.sublime-build 파일을 열 수 있다. 

```
Tools > Command Pallete > type 'prv' > PackageResourceViewer: Open Resource > python > python.sublime-build
```

이 파일을 열면, 아래와 같은 json 형태의 텍스트가 보인다. 

```json
{
	"cmd": ["python", "-u", "$file"],
	"file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
	"selector": "source.python",

	"env": {"PYTHONIOENCODING": "utf-8"},

	"windows": {
		"cmd": ["py", "-u", "$file"],
	},

	"variants":
	[
		{
			"name": "Syntax Check",
			"cmd": ["python", "-m", "py_compile", "$file"],

			"windows": {
				"cmd": ["py", "-m", "py_compile", "$file"],
			}
		}
	]
}

```

cmd의 python 명령어를 pyenv python path로 변경해주면 된다. pyenv python path는 shell에서 "which python" 명령을 사용하면 알 수 있다. 

내 경우, python 명령어를 /Users/{나의 mac user name}/.pyenv/shims/python으로 변경+저장하니 pyenv에서 설정하는 python virtualenv가 Sublime text에서 잘 실행되었다. 

```json
{
	"cmd": ["/Users/나의 mac user name/.pyenv/shims/python", "-u", "$file"],
	"file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
	"selector": "source.python",

	"env": {"PYTHONIOENCODING": "utf-8"},

	"windows": {
		"cmd": ["py", "-u", "$file"],
	},

	"variants":
	[
		{
			"name": "Syntax Check",
			"cmd": ["/Users/나의 mac user name/.pyenv/shims/python", "-m", "py_compile", "$file"],

			"windows": {
				"cmd": ["py", "-m", "py_compile", "$file"],
			}
		}
	]
}

```


### reference

[https://medium.com/swlh/setting-your-python-version-in-sublime-text-8e8a305e6701](https://medium.com/swlh/setting-your-python-version-in-sublime-text-8e8a305e6701)

