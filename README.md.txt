


**[Light Bootstrap Dashboard Angular]
Este proyecto está compuesto por dos carpetas las cuales se denominan: (backend y frontend), y este proyecto maneja una base de datos la cual se realizó en el gestor de base de datos "WorkBreanch", a continiacion hago descripción de cada uno. La carpeta frontend está trabajada sobre Bootstrap 3 y usa una version de angular CLI 12.0.3 usando nodejs 14.17.1;
El archivo fronent viene con una gran colección de elementos que te ofrece múltiples accesos para el funcionamiento de la aplicación y es amigable con el entorno gráfico ya que la constitución de estos elementos vienen organizados para el mejor manejo de estos. 
El archivo backend está constituida por un conjunto de clases, repositorios y controladores los cuales brindan el correcto manejo de toda la aplicación, este se comunica con la archivo backend por medio da las urls de modo que conecta los metodos de este archivo.
La base de datos contiene toda la información de todos los usuarios y casas que se encuentran registrados actualmente, también tiene la información de las calificaciones que generan los usuarios y los propietarios al terminar la respectiva reserva de sus casas y servicios.

## Links de descargas por orden:

+ [Nodejs](https://nodejs.org/es/download/)
+ [Angular Cli](https://angular.io/cli)
+ [MySQL Server y MySQL Workbench](https://dev.mysql.com/downloads/mysql/) - Turorial:(https://codigosql.top/mysql/instalar-mysql-server-y-mysql-workbench-en-windows-10/) 

## Para iniciar:

-MySQL Workbench: 

+ Iniciamos nustro workbreanch
+ Ingresas a tu conexion
+ Crea un nuevo esquema
+ Vete al apartado de administración
+ Selecciona "Data Import/Restore"
+ Selecciona "Import from self-Contained File y busca el archivo .sql del proyecto
+ Selecciona el esquema que creaste para usar la db del proyecto
+ Start Import...

-------

Tenga en cuanta que usamos Visual Studio Code y este necesita las siguientes extenciones:

-Para el backend:

 //Para usar este proyecto de java se recomienda usar el jdk 14\\

+ Spring Boot Tools
+ Spring Boot Dashboard
+ Spring Boot Extension Pack
+ Spring Initializr Java Support
+ Language Support for Java(TM) by Red Hat
+ Java Extension Pack

-Para el frontend:
+ Angular Essentials (Version 12)
+ Angular Schematics
+ Angular 10 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout




## Comandos de la terminal:

 //para usar el npm verifique que tenga la vercion del nodejs 14.17.1 y la version del npm debe ser 6.14.13.\\

 -En el frontend:
1. npm install -g @angular/cli
2. npm install
3. ng serve
4. npm install --save-dev @angular-devkit/build-angular  (Usar si al subir servicio lo requiera y luego usar ng sevre)
5. Navegar en `http://localhost:4200/`

-En el backend:
1. Dirigirse al explorador de Visual Studio Code
2. Seleccionar SPRING BOOT DASHBOARD
3. Clic en Start...

### Que incluye el archivo frontend

Este incluye los siguientes componentes:
```
frontend
├── CHANGELOG.md
├── LICENSE.md
├── angular.json
├── e2e
├── karma.conf.js
├── package-lock.json
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │ 	├──can-active.guard.spec.ts
│   │   ├──can-active.guard.ts	
│   │   ├── home
│   │   │   ├── home.component.css
│   │   │   ├── home.component.html
│   │   │   ├── home.component.spec.ts
│   │   │   └── home.component.ts
│   │   ├── landpage
│   │   │   ├── landpage.component.css
│   │   │   ├── landpage.component.html
│   │   │   ├── landpage.component.spec.ts
│   │   │   └── landpage.component.ts
│   │   ├── layouts
│   │   │   └── admin-layout
│   │   │       ├── admin-layout.component.html
│   │   │       ├── admin-layout.component.scss
│   │   │       ├── admin-layout.component.spec.ts
│   │   │       ├── admin-layout.component.ts
│   │   │       ├── admin-layout.module.ts
│   │   │       └── admin-layout.routing.ts
│   │   ├── lbd
│   │   │   ├── lbd-chart
│   │   │   │   ├── lbd-chart.component.html
│   │   │   │   └── lbd-chart.component.ts
│   │   │   └── lbd.module.ts
│   │   ├── login
│   │   │   ├── login.component.css
│   │   │   ├── login.component.html
│   │   │   ├── login.component.spec.ts
│   │   │   ├── login.component.ts
│   │   │   └── usuaruo.ts
│   │   ├── profile
│   │   │   ├── profile.component.css
│   │   │   ├── profile.component.html
│   │   │   ├── profile.component.spec.ts
│   │   │   ├── profile.component.ts
│   │   │   └── User.ts
│   │   ├── register-house
│   │   │   ├── Casa.ts
│   │   │   ├── House.ts
│   │   │   ├── register-house.component.css
│   │   │   ├── register-house.component.html
│   │   │   ├── register-house.component.spec.ts
│   │   │   └── register-house.component.ts
│   │   ├── registro
│   │   │   ├── registro.component.css
│   │   │   ├── registro.component.html
│   │   │   ├── registro.component.spec.ts
│   │   │   └── registro.component.ts
│   │   ├── reserva-casa
│   │   │   ├── reserva-casa.component.css
│   │   │   ├── reserva-casa.component.html
│   │   │   ├── reserva-casa.component.spec.ts
│   │   │   ├── reserva-casa.component.ts
│   │   │   └── Reserva.ts
│   │   ├── shared
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.ts
│   │   │   │   └── footer.module.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.ts
│   │   │   │   └── navbar.module.ts
│   │   │   └── service
│   │   │       ├── auth.service.spec.ts
│   │   │       ├── auth.service.ts
│   │   │       ├── login.service.spec.ts
│   │   │       └──login.service.ts
│   │   ├── sidebar
│   │   │   ├── sidebar.component.html
│   │   │   ├── sidebar.component.ts
│   │   │   └── sidebar.module.ts
│   │   └── tables
│   │       ├── Calificacion.ts
│   │       ├── tables.component.css
│   │       ├── tables.component.html
│   │       ├── tables.component.spec.ts
│   │       └── tables.component.ts
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── sass
│   │       ├── lbd
│   │       └── light-bootstrap-dashboard.scss
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   └── tsconfig.json
├── tslint.json
└── typings.json

```

### Que incluye el archivo backend

Este incluye los siguientes componentes:
```
backend
├── .mvn\wrapper
│    ├── maven-wrapper.jar
│    ├── maven-wrapper.properties   
│    └── MavenWrapperDownloader.java 
├── .vscode
│    └── settings.json
├── src
│   ├── main	
│   │   ├── java\com\ias\backend
│   │   │   ├── domain
│   │   │   │   ├── Califica.java
│   │   │   │   ├── House.java
│   │   │   │   ├── Reserva.java
│   │   │   │   └── User.java
│   │   │   ├── imfrstucture\controllers
│   │   │   │   ├── CalificaController.java
│   │   │   │   ├── HouseController.java
│   │   │   │   ├── ReservaController.java
│   │   │   │   └── UserController.java
│   │   │   ├── repository
│   │   │   │   ├── CalificaRepository.java
│   │   │   │   ├── HouseRepository.java
│   │   │   │   ├── ReservaRepository.java
│   │   │   │   └── UserRepository.java
│   │   │   └── BackendApplication.java
│   │   └── sources
│   │       └── application.properties
│   └── test\java\com\ias\backend
│       └── BackendApplicationTests.java
│
├── target 
│   ├── classes
│   ├── annotations
│   └── test-annotations
├── mvnw
├── mvnw.cmd
└──pom.xml

```

## Mis datos

Nombre: Juan Sebastian Llano Taborda

Correo: Llanotaborda@gmail.com

Contacto: 3007166045

 //Redes Sociales\\

Facebook: <https://www.facebook.com/juansebastian.llanotabordascout.5>

Instagram: <https://www.instagram.com/j_u_a_n__s_e_b_a_s_t_i_a_n/?hl=es-la>


