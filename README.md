# Get Stuff Done - A Simple To-Do App

## Description

Get Stuff Done is a simple to-do app to help quickly organize a simple to-do list. The user can input their to-do items and they will be displayed as a list. The user can then check the items off that have been completed. This helps visually boost productivity as we see more items get marked off the list. The user can select the view of the to-do list from three different choices: Done, Not Done, or All. Once the tasks are completed and no longer needed, they can be deleted by the user. New items can be added at any time.
![screenshot of Get Stuff Done](https://github.com/JHaarla/ToDo-App/blob/master/GetStuffDoneScreenshot.jpg)

## Under the Hood

Get Stuff Done uses local storage to "remember" the to-do list items. If a user visits the app with the same browser as the previous time, all the to-do items will still be there as long as local storage has not been cleared out from the browser.
When the user adds a new to-do item, the current list is fetched from local storage and the new item appended to the end. The new list is written back into local storage.
As the user marks items done or deletes them, the local storage is updated for each of these actions.

## Tech USed

- HTML
- CSS
- Flexbox
- JavaScript
- Local Storage

## Live Deployment

[Get Stuff Done](https://jhaarla.github.io/ToDo-App/)

## Future Development

- Add drag and drop feature to rearrange to-do items
- Add user authentication and a database to store the to-do items so the user can login from any device and see their personal list
