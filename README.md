# FOLDERS STRUCTURE
Under the *packages* folder we can find 3 different folders:
* app
* common
* web

The idea is to have into the *app* folder the mobile app in react-native and in the *web* folder the web application.
Both projects will use the *common* folder that will retrieve the values that we have to show in the screen.

## COMMON FOLDER
Right now we have just 1 js file (*dashboardRepository.js*) that is sending mocked data. In a real case here we will have the connection with the backend.

## WEB FOLDER
I have created the project with *create-react-app* and I have created a structure with *pages* and *component* folders.
Every page/component that is created, has a new folder and inside has an index.js and index.css
For now, inside the *pages* folder we can find only one folder that is the page that I had to create.
This page is calling all the component that I have created.
The Dashboard component is using the information of the *common* folder with npm link: 
I had to use this because the common folder is outside the src and has to be outside to be used by the app project.
I have used the charts installing **react-chartjs-2**. This charting library doesn't have the area graph, for this reason I have used the Line graph.

## APP FOLDER
I have just created a new project with *npx react-native init* but I had problem to run the project and I was not able to solve it.
For this reason I have created the web project responsive