---
title: 💻My Web Development VS Code Settings, theme, Extensions, tips and tricks
slug: My-Web-Development-VS-Code-Settings-theme-Extensions-tips-and-tricks
published: true
createdAt: 21.07.2019
description: Learn what settings, theme, font, extensions and other things I use in vscode
tags: #webdev #vscode #plugins #tools
series: Visual Studio Code
---

I have been using a lot of editors and IDE's since I began programming.
Eclipse, Netbeans, Notepade++, Brackets Editor, Sublime Text 2, Sublime Text 3, Webstorm, Atom Editor and probably some more I forgot.

Currently, I'm using Visual Studio Code. According to google trends, it is also the most searched editor. There are some excellent reasons for that.

* vs code feels fast. It is tough to get vs code to slow down. Usually, it is not the fault of vs code but a poorly implemented extension.

* File search is super fast. It feels instant. Like there is no wait time.

* It is lightweight but also has most of the things you need pre-installed. Search files, debugging, basic git GUI.

* Nice theme support and customization support. You can pretty much change everything in vs code.

* Excellent extensions! Think of an extension you need? Yeah vs code has that!

Okay, enough of praising. An editor is as good as the user that knows that editor! I assume you have installed vs code.

### Theme, File icons, and Font-family

You will look at vs code for several hours every day.

#### Theme
* [SynthWave '84](https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode)  

I don't have the `glow` enabled and I did not add the custom CSS.

#### File icons
* [Simple icons](https://marketplace.visualstudio.com/items?itemName=LaurentTreguier.vscode-simple-icons)  

Simple icons is a minimalistic clean icon theme that has strong colors and clear icons so you can find the file you need even faster.

#### Font
* [Hasklig](https://github.com/i-tu/Hasklig)

It looks clean to me and has ligatures support.
My config (we will learn later how to set this config):
```
    "editor.fontFamily": "Hasklig, Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.fontSize": 15,
```

### Extensions
* [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

This should be built-in into every editor! Have you ever had code where you didn't know where your `{` started and it then `}` ended?
Then this extension is what you need! It will give every `{` or `(` a different color, so it is easier to look at the code.

* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

This adds diffrent colors to every indent tab or space you do.
This also helps you to navigate your code faster.

* [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

`.env` Files are common these days and are used in a lot of projects. vs code out of the box does not have syntax highlighting support for these file type. This extension adds support for that.

* [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

Also, a must-have for every developer that has performance and speed in mind. It shows you how much in `kb` it would cost you to import this npm module or anything you can import.

* [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

This, for me, is a killer feature! Do you connect to your development environment over SSH? Do you use a docker container? Or do you use WSL? This extension makes it extremely easy to use all of them. The best part, even over SSH the search and opening of a file are not slower! This is like magic! I love this extension! 

* [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

This replaces Intellisense. It is like Intellisense with AI-backed in. The tab-completion shows you the most used functions or parameters that other people use, so you have the most used on the right on top. This makes you more efficient!

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

This adds direct eslint support into vs code, and it helps you to fix your eslint problems. Also a must-have.


### Settings

I'm not using the UI version of the settings interface. I rather like to use the JSON version. To open that press `CTRL+SHIFT+P` and then type `open settings JSON`. This will open the `settings.json` file, and you can edit it like any other JSON file.

#### Making the cursor stylish
```JSON
    "editor.cursorBlinking": "smooth",
    "editor.cursorSmoothCaretAnimation": true,
    "editor.cursorStyle": "block",
```
The first line will make the cursor blink a little bit mor smooth with a fade-in-out animation.
The second line will animate the movement of the course, so it feels a little bit more natural.
The thrid line will change the appearance of the cursor to a block so you can find it more comfortable.
Now your cursor looks way better!

#### Making the font more readable
```
    "editor.fontFamily": "Hasklig, Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.fontSize": 15,
```
As described before I'm using the Hasklig font. Also, I like to have Ligatures; it makes the code more readable. I don't have perfect eyesight. So I like the font to be a little bit bigger. 

#### Copy and Paste code
```
    "editor.formatOnPaste": true,
```
We all copy and paste some code from the internet. So this setting will also format it on paste.

#### Make the vertical guidelines visible
```
    "editor.renderIndentGuides": true,
```
If you have a long function with a lot of indentation, this will help you to navigate your code easier.


#### Disable telemetery
```
    "telemetry.enableTelemetry": false,
```
Even when I use vscode-insiders, I don't need to send my data to Microsoft. So I disable that

#### See tabs that have been modified
```
    "workbench.editor.highlightModifiedTabs": true,
```
Unsaved files have that big dot where the `x` if you did not save. This will also add a line on the top of the tab.

### Tipps and Tricks

#### Using WSL
WSL or windows subsystem for Linux is a fantastic way to run Linux on Windows and have access to the Linux development experience that for me is way better than the one on windows.
I don't want to install git under windows and also not things like nodejs. There is a pretty nice way to integrate the git version of your wsl Linux into vs code. You need to download [WSLGIT](https://github.com/andy-5/wslgit) and then put the exe file in a nice place and add the following line to your vs code settings:
```
    "git.path": "D:\\dev\\wslgit.exe",
```
Also vs code has an integrated terminal. You can open that terminal with ``ctrl+\` ``. We also want to have a bash in vs code so we can add the following line:
```
    "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\wsl.exe",
```
This tells vs code to use the default wsl linux shell. In my case, it is Ubuntu, which comes with bash.

#### Use the command pallet 
I often see people clicking around to find settings or other features in vs code. Usually, it is easier just to type what you want. For this vs code has the command pallet. Just press `CTRL+SHIFT+P`. This will open the command pallet, and you can just type what you want!
If you don't want to press `SHIFT`, then you can just press `CTRL+P` and type a `>`, if this is faster for you. `CTRL+P` is also useful to find a file you need.

#### Reopen your latest closed file
Just press `CTL+SHIFT+T`. This will reopen the latest closed window. You can press this is multiple times to open multiple windows. This also works in your browser if you closed a tab that you don't want to ;)

#### Delete a complete word
This is not vs code specific, but sometimes I can hear people pressing the backspace key as fast as they can to delete a word. Please just press `CTRL+BACKSPACE`. This will delete the whole word.

#### Delete a complete line
Sometimes you want to delete the complete line. Just press `CTRL+X`. This will delete the currently selected line completely. 

#### The end

Do you use vs code? What is your must-have extension?
Did I miss some crucial settings? Is some shortcut missing? Please comment down below!

**Thanks for reading!**

**Say Hallo!** [Instagram](https://www.instagram.com/lampewebdev/) | [Twitter](https://twitter.com/lampewebdev) | [LinkedIn](https://www.linkedin.com/in/michael-lazarski-25725a87) | [Medium](https://medium.com/@lampewebdevelopment) | [Twitch](https://dev.to/twitch_live_streams/lampewebdev) | [YouTube](https://www.youtube.com/channel/UCYCe4Cnracnq91J0CgoyKAQ)