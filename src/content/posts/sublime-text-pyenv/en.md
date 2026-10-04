---
title: "Using pyenv with Sublime Text"
description: "How to make Sublime Text use the Python version set by pyenv."
date: 2021-07-26
---
This post shows how to make Sublime Text work with pyenv.

After I installed Sublime Text on my MacBook, it did not pick up the Python version I had set in pyenv. Even when I used pyenv global on the command line to make the version I wanted the global Python, Sublime Text kept using the Mac's default Python as its interpreter. I tried a number of things to fix this. In the end I solved it by editing Sublime Text's sublime-build file, and this is a brief walkthrough of that. The setup is on a Mac.

When you install Sublime Text, a sublime-build file for each programming language is created inside the package folder. To open that file you need a Sublime Text plugin called PackageResourceViewer. It is installed as follows.

First, go to Preferences -> Package Control in Sublime Text and run Install Package.

```
Preferences > Package Control > Install Package
```

A small console then appears at the top. Type PackageResourceViewer there and press Enter, and the package is installed.

After that, follow the path below to open the python.sublime-build file.

```
Tools > Command Pallete > type 'prv' > PackageResourceViewer: Open Resource > python > python.sublime-build
```

Opening the file shows JSON-style text like the following.

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

Change the python command in cmd to the pyenv Python path. You can find the pyenv Python path by running "which python" in a shell.

In my case, once I changed the python command to /Users/{my mac user name}/.pyenv/shims/python and saved, the Python virtualenv set by pyenv ran properly in Sublime Text.

```json
{
	"cmd": ["/Users/my mac user name/.pyenv/shims/python", "-u", "$file"],
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
			"cmd": ["/Users/my mac user name/.pyenv/shims/python", "-m", "py_compile", "$file"],

			"windows": {
				"cmd": ["py", "-m", "py_compile", "$file"],
			}
		}
	]
}

```

## Reference

[https://medium.com/swlh/setting-your-python-version-in-sublime-text-8e8a305e6701](https://medium.com/swlh/setting-your-python-version-in-sublime-text-8e8a305e6701)
