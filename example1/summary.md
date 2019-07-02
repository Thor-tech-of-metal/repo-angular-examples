#### Summary 

/app.component.ts

@Component decorator, which provides configuration options for that particular component.

```
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
```



```
export class AppComponent {
  title = 'ng7-pre';
}
```

#### Generate componets nav, about, contact and home 

> ng generate component nav
// output

> ng g c about
// output

> ng g c contact
// output

> ng g c home
// output

### All Modules are defined in :

/src/app/app.module.ts

#### Notes 


* src/app/nav/nav.component.ts  it will match with te component called <app-nav></app-nav>

*  **routerLink** This is an Angular 7 specific attribute that allows you to direct the browser to different routed components. The standard href element will not work.


#### Routing

/src/app/app-routing.module.ts 

* These are the components that I will import and use them in the routes
```
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent } ]

```
* import { HomeComponent } from './home/home.component' refers to : src/app/home/home.component.html


**In the template we can refer it as:**

```
<li><a routerLink="/">Home</a></li> <!--all router kinks are defined in ng7-pre/src/app/app-routing.module.ts -->
```

#### Events

In the template we can define the events that match with the components

``` 
<button (click)="firstClick()">Click me</button>
```

**All Events:**

```
(focus)="myMethod()"
(blur)="myMethod()" 
(submit)="myMethod()"  
(scroll)="myMethod()"

(cut)="myMethod()"
(copy)="myMethod()"
(paste)="myMethod()"

(keydown)="myMethod()"
(keypress)="myMethod()"
(keyup)="myMethod()"

(mouseenter)="myMethod()"
(mousedown)="myMethod()"
(mouseup)="myMethod()"

(click)="myMethod()"
(dblclick)="myMethod()"

(drag)="myMethod()"
(dragover)="myMethod()"
(drop)="myMethod()"
```

#### Angular 7 Services

* run  the following in the command line to generate all services.
```
 ng generate service data
```

it will create src/app/data.service.ts. In this class we have the following: 

```
// import the core angular 
import { Injectable } from '@angular/core';

// we make it clear that this component can be used as dependency of injection.
@Injectable({
  providedIn: 'root'
})

// our service 
export class DataService {

```

Now we can use in this service in the component.

1) **Import a service.**
```import { DataService } from '../data.service';```

2) **Add in the constructor**
```constructor(private data: DataService) { }```

3) **Use it** 
```firstClick() { this.data.firstClick(); }```


#### Angular 7 HTTP Client

* add http client module in /src/app/app.module.ts


####  Forms 
1) add the in the module in /src/app/app.module.ts
```
import { ReactiveFormsModule } from '@angular/forms';

and

imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule <-- this line of code is added 
  ],
```
2) in the contact.component.ts add the following:
```
//import the forms 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//FormGroup; attribute 
messageForm: FormGroup;

//inject the FormBuilder
constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // assing the FormGroup from the FormBuilder in the attribute.
    
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
```

#### Change the style of a components 

For example set an style based on the boolean value in the components. h1Style is the boolean value defined in the components.

```
<h1 [ngClass]="{
  'gray': h1Style,
  'large': !h1Style
}">Home</h1>
```


#### Deploy
```
ng build 

ng build --prod
``` 

#### Run in production 

1) cd dist 
2) http-server -o

#### Sources 

https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example
