# Redux

## MVC, MVP, MVVM patterns

## Dealing with MVC
- MVC controller pattern helps to seperate the concerns like data (Model), representation of the data (View) and the management of data between Model and View (Controller).
- There are variations of MVC pattern like - MVP, MVVM patterns. 
- Each of these allow two-way communication between Models-and-Views 
- Models represent data in an application 
- Data in a Model is used by Views (which are objects that present data as User Interface). Views are that we interact with on screen. 
- Models can feed data to multiple views
- When a user interact with View, the View via *a medium a Controller OR presenter* may update a data stored in a Model. Changing data in a Model can trigger data changes in other views. Which means that, changing the way one model work, could potentially cause unexpected consequences. 
- In addition to one model serving multiple views, we also have multiple teams working on models and views - which potentially means a great level on concentration on minute details
- Now to solve this problem of two-way data communication between Models-and-Views - comes, Flux

## Now comes, Flux
- Flux is a design pattern developed by Facebook.
- Flux is an alternative to MVC, MVP, or MVVM patterns. All of these MVP, MVVM patterns are basically variations to MVC design pattern. 
- In Flux, data flows in one direction.
- Changes are initiated with `Actions` - which are objects that describes what should change about the data.
- `Actions` are dispatched with a `Dispatcher` - which are objects which sends the data to the appropriate `Store`.
- The `Store` holds the data. *The might be like `Models`, but they are not the same*  
`Store` is responsible for updating OR changing its data. 
- Finally when `Store` updates the data, that change updates the `View`; The screen changes with the new representation. 
- Now when the user interacts with the `View`, a new `Action` is created and the process starts all over again. 
![Flux Flow](Docs/Images/FluxFlow.PNG?raw=true)
- As the application become more big, there would be more `Stores` and `Views` - but, the data flows in one direction.
![Flux Flow with multiple Views](Docs/Images/FluxFlowExt.PNG?raw=true)
- **Flux is not a tool or technology, it is a design pattern**
- The Flux library only include a *generic Dispatcher* that we can use in our applications and as a result the community started creating new libraries: 
1. Reflux
2. Flummox
3. Fluxxor
4. Alt
5. Redux
6. Marty.js
7. McFly
8. DeLorean
8. Lux
9. Fluxy
10. Material Flux

Each of these have different implementation of Flux.  
Redux also has different implementation of Flux: but due to its simplicity it emerged as the winner :) 

## Redux and How it works
- Redux is not Flux. *Redux is Flux like*
- In Flux, data flows in one direction from Action -> Dispatcher -> Store -> Views
- In Redux, data flows in one direction, but the difference is that, **there is only one store**
- With Redux, we cannot use multiple stores and **since there is only one store, there is no dispatcher; the store will dispatch the actions to view**
- Having one store means **all of you state is in one place, the single store** - we refer to this as **Single source of truth**
![Redux Structure](Docs/Images/ReduxStructure.PNG?raw=true)