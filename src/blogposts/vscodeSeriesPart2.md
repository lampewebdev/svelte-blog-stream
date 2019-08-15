---
title: 💻The guide to Visual Studio Code shortcuts, higher productivity and 30 of my favourite shortcuts you need to learn
slug: The-guide-to-Visual-Studio-Code-shortcuts
published: true
createdAt: 04.08.2019
description: Learn how to use Visual Studio Code keyboard shortcuts for higher productivity
tags: webdev, vscode, productivity, tools
series: Visual Studio Code
---

![Cover Image](https://thepracticaldev.s3.amazonaws.com/i/0i8woivrnho11aae5brp.png)

# Introduction
Visual Studio Code lets you access almost every feature it provides by a command that is accessible via the command palette or via a shortcut on your keyboard.

You are probably working 8 hours every workday and hopefully for you the most time of these working hours you can code. So you are spending much time staring at your code editor of choice.

Knowing some shortcuts can help you to get your work done faster. Knowing how to find the file you need faster. Running your NPM command, you need right now, instead of opening an external Terminal.

![hands typing quickly on a keyboard](https://media.giphy.com/media/eMxZ6lPl8dW9O/giphy.gif)

# Shortcut cheat sheets
The makers of Visual Studio Code
* [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
* [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)
* [MacOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

You can download these cheat sheets, print them, and put them on your desk for a quick reference or try to learn them while your commuting to work. Don't try to learn them all at once. This takes time. So be patient, and you master them all.

# Keymaps
Are you a Vim user? Maybe the Emacs shortcuts are tattoed into your brain? Alternatively, for whatever reason, you used notepad++ and appreciated the keyboard shortcuts from notepad++😵?

Visual Studio has an extension for all of you! Let's install the ⚛`Atom Keymap`. We will do this without the help of our beloved mouse (almost). 

1) Open Visual Studio Code.

2) Once Visual Studio Code is open press: `CTRL+SHIFT+X`. That shortcut opens the Extension list, and your cursor focuses the search bar. Type the following `@category:keymaps`. (If you want to know more about how extensions work in how this section works leave a comment down below!)

3) You see now a list of keymaps. Press `Tab` and then the `Down Arrow ⬇`.

4) Press `⬇` until you have selected the `Atom  Keymap`. Now press `Enter`. 

5) Sadly I can not find a method for selecting the Install button. You now need to click🖱! 

You can find a Keymap for almost every editor you can imagine. Install the one you like the most, and you have your shortcuts! Cool right?

# Keyboard Shortcuts settings (JSON)
There are to ways to view the Keyboard Shortcut Settings. One of them is through a graphical interface or can also choose to use to edit the shortcuts through a JSON file.

## Graphical interface
We can open the Graphical interface by pressing `CTRL+k` and then by still holding `CTRL` you should press `CTRL+s`.

![Keyboard Shortcut Settings GUI](https://thepracticaldev.s3.amazonaws.com/i/3etyosi4ljtp1d9lvk5i.png)

On the top, you have a search bar where you can search for either the command or the keyboard shortcut you want to check out. These dialouges tend to look the same in Visual Studio Code and you will start to see them alot.

You can see four columns. Let's go through them.

*Command: The action Visual Studio Code performs.

* Keybinding: The combination of keys you have to press the execute the action.

* When: This is a filter for Visual Studio Code It tells Visual Studio Code if the shortcut should be actionable in that context or not. Some filters could be the integrated terminal, an error in your source code, and many more.

* Source: There are multiple ways of how Visual Studio code can know about shortcuts. The most common one is `Default` these are the commands that come with Visual Studio Code out of the box. `User` is as the name suggest commands that are created by the user. The third way is by `Extension`. An extension author can also decide to add a shortcut. If your favourite shortcut does not work, this can be a source of why it stopped working.

To change the keybinding, you double click the row and a modal pops up. Then you press the key combination you want and hit `Enter`. 

## key bindings JSON file
Now that we know how it key bindings work in general let's have a look at at the `keybindings.json` file. 

There are two of these the default `keybindings.json` and the user-specific `keybindings.json` file. Press `CTRL+SHIFT+P` or `F1` to open the command pallet and type `keyboard shortcuts` you now should see at least two entries in your command pallet. 

* Preferences: Open Default Keyboard Shortcuts (JSON).
This is the file where Visual Studio Code Stores all the default Shortcuts and a list of available shortcuts at the bottom that are not used. I would avoid changing them here.

* Preferences: Open Keyboard Shortcuts (JSON)
This is a user-specific key bindings file, and you should edit this file. In the beginning, it will be just an empty array nothing more!

To add a shortcut in the JSON file you simply just need to add an object like the following one:
```js
[
    {
        "key": "CTRL+ALT+P",
        "command": "git.pull",
        "when": ""
    }
]
```

You need to specify the key and the command. The `when` tells Visual Studio Code where it should run this command. If you leave it empty, it will listen everywhere for it. We talked about this in the last part.

# Useful shortcuts
## Open the Command Palette
You know this one already, but maybe you skipped to this part 😉
* `CRTL+SHIFT+P` or `F1`
This will open the most powerful feature in Visual Studio Code. The Command Palette. Just type what you think you want and it still finds it!

## Opening and closing the sidebar
Sometimes you want to have more horizontal space, and the sidebar is in your way! Just press
* `CTRL+B`

You can toggle the sidebar on and off

## Enter Zen Mod
You are like what Zen Mod in Visual Studio code? Yes, its build-in!
For that, you need to press:
* `CTRL+k`, let go of both keys and press `z`.

This will toggle Zen Mod on and off.

## Focus the integrated Terminal
One of my favourite features is the integrated terminal in Visual Studio Code. I'm using it 99% of the time! So to quickly open or close it, you need to press:
* `CTRL+j`

This will open the integrated terminal and focus the cursor in it. If you press it again, it will close, and your cursor goes back to where it was. 

## Search for a file in your project
Visual Studio Code has a great file search build-in. It is also super fast when you use the remote Extension. To open it you simply press:
* `CTRL+p`

This opens a dialogue where you can see your recent open files that alone is very nice. It also supports fuzzy search. This means you can type any word, and it looks in the hole path of the file. So you don't have to be exact! That dialogue also supports a lot more things. Like `go-to line` or debugging and a lot more features! If you would like to know more comment down below.

## Switch to a recent open workspace
You work in a microservice architecture and need to switch folders all the time? Because you don't use a mono repo? I have the shortcut for you! Press:
* `CTRL+r`

This opens a dialogue with a list of recent open workspaces/folders.
Bonus tip: If you hit `CTRL+ENTER` in that dialogue Visual Studio Code opens it in a new window.

## Split your editor window
People love vim because it is easy to split views among the editor. Visual Studio Code has that also build in. Just press
* `CTRL+\`

To create 2 columns or
* `CTRL+k`, let go of `k` and hold `CTRL` and press `\`

To create a new row. The second one sounds harder then it is, but once it is in your brain it takes you ms, and you know how to change or create new shortcuts now 😉

## Focus an editor window
Now that you know how to split the editor window, you also need to learn how to jump around these views quickly. This is pretty easy and also has a default key binding. You need to press
* `CTRL+[1-9]`

This means that you need to press `CTRL` plus the number of the window you want to focus on. For the first one press `CTRL+1` and the second window `CTRL+2`, you get the idea  Easy right?

## Close your current editor window
Now you opened too many editor windows, and you want to close them. This is quickly done by pressing
* `CTRL+w`

This closes the currently opened window.

## Close only the saved editor windows
Sometimes you have so many editors open that you don't know anymore what is saved whatnot. Yeah, I know you can see this with that dot in the tab bar, but still, it is too much for you to focus and find the right files. Visual Studio Code has your back! Just press
* `CTRL+k` then let go of `CTRL` and `k` and press `u`

This saves all windows so you can check the unsaved windows and save them.

## Open a new file
You need a new file to sketch some code? Alternatively, you need to create a new file for your pet project? Press
* `CTRL+n`

This opens a new editor.

## Change the language of your current file
You want to switch the selected language in your current file because you want `Javascript (react)` and not `Javascript`? Press
* `CTRL+k`
Then let go of `CTRL` and `k` and press 'm`.

This opens a new dialogue where you can search for the language you desire.

## Go to Line
Let's now focus a little bit how to make editing easier. You have an error in line 1042(If your file is that long that alone is the problem). You don't want to scroll! Press
* `CTRL+g`

This opens a dialogue, and you need to input the line number you want to jump to. This, combined with `CTRL+p` can be very powerful.

## Go to Symbol
Your first question is, what is a Symbol? In programming languages, symbols are usually variables. In CSS, they are selectors. To see the dialogue press
* `CTRL+SHIFT+O`

This opens a dialogue with a list of available symbols in the current file.
* `CTRL+t`

You see a dialogue with just a `#` in it, and you need to type the symbol you want, and Visual Studio Code searches in the hole workspace for that symbol if this is supported by the language you are using. So you need to check that on your own.

## Moving a line up or down.
Sometimes you need to move out that line that you had inside your `if` or just move a line because it's called to early. You can do that by pressing
* `Alt+Down`

To move the current selected line one line down
* `Alt+Up`

To move the currently selected line one line up

## Copy the current line
You want to fill that array with some variables, but you are too lazy to write a loop. So how do you get `array[0]` `array[1]` and `array[2]` populated? By copying the first line twice and just changing what you need. For that press
* `ALT+SHIFT+Up`

This copies the currently selected line and pastes it in one line above
* `ALT+SHIFT+Down`

This copies the currently selected line and pastes it in one line beneath
(This shortcut would have been handy here)

## Show a suggestion
Visual Studio Code has build-in suggestions. Most of the time it pop-ups automatically for you but sometimes it won't, and you really need it. Easy, press
* `CTRL+Spacebar`

This opens the suggestion dialogue

## Comment out the current selection
Sometimes you need to isolate code and comment out everything around it. Press
* `CTRL+/`

If you multiple lines selected it comments them out. If you don't have anything selected, it comments out that one line only.

## Select multiple lines of code
To comment out that code block, you need to select more than one line. This is done by pressing
* `CTRL+Shift+Up`

To start selecting from the current line and moving the cursor up.
* `CTRL+Shift+down`

To start selecting from the current line and moving the cursor down.

## Fold and unfold your code
You have this big function, but you really can not see it anymore because it is too big and need refactoring, but you don't have the time, so you want to forget about it? You can fold and unfold code so that out of 100 lines you can make 1 line. To do that press
* `CTRL+SHIFT+[`

To fold(hide) the code
* `CTRL+SHIFT+]`

To unfold(show) the code

## Cut a hole line
For this one, you can not have any code selected. Press
* `CTRL+x`

This cuts the entire line when nothing is selected.

## Indent / Outdent Line
People usually know how to Indent code. You do it by selecting the code you want to indent and press
* `Tab`

Press Tab as many times as you wish so that it looks good to you.
Did you know that you can Outdent? Moving your code from right to left? You do that by pressing
* `SHIFT+tab`

# Conclusion
There are way more shortcuts. These shortcuts are the one I use the most often. I hope this helps you to understand more how shortcuts in Visual Studio Code and that you can now create your own one.

Have I overlooked a useful command that everybody needs to know?
Did you miss something? Was something not clear?
Please write a comment. I answer all of your questions as best as I can!

**👋Say Hallo!** [Instagram](https://www.instagram.com/lampewebdev/) | [Twitter](https://twitter.com/lampewebdev) | [LinkedIn](https://www.linkedin.com/in/michael-lazarski-25725a87) | [Medium](https://medium.com/@lampewebdevelopment) | [Twitch](https://dev.to/twitch_live_streams/lampewebdev) | [YouTube](https://www.youtube.com/channel/UCYCe4Cnracnq91J0CgoyKAQ)