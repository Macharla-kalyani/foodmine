##
4. Add Header
    1. Generate Component
    2.Add Html
    3.Add Css
5. List Foods
    1.Create Food Model
    2.create dats.ts
        i. Add sample foods
    3. Add images to assets
    4. Create Food service
    5.Create Home Component
        i.   Add ts
        ii.  Add html
        iii. Add css
6.search
    1.Add method to Food search
    2.add search route
    3. show search result in Home component
    4.Generate search compenent
        i.  add to home component
        ii. add ts
        iii.add html
        iv  add css
7. Tags Bar
    1.Create Tag model
    2.add sample tags to data.ts
    3.Food service
        i. add get all tags method
        ii.add get all foods by tag method
    4.add tags route
    5.show tag result in Home Component
    6.Generate Tags Component
        i.  add to home component
        ii. add ts
        iii.add html
        iv. add css
8. food Page
    1.add method to foodservice
    2.generate food page component
        i.  add route
        ii. add ts
        iii.add html 
        iv. add css
9.cart page
    1.Create cartItem Model
    2.Create Cart Model
    3.Generate Cart service
    4.Add to Cart Button in food page
    5. Generate Cart page component
        i.  add route
        ii. add ts
        iii.add html
        iv. add css
10.Not Found!
    1.generate Component
        i. Add ts
        ii.Add html
        iii.Add css
    2.Add To Pages
        i. Home Page
        ii. Food Page
        iii.cart page
-----------------------------------------
------------------------------------------
11. Connect To Backend
    1. create backend folder
    2.npm init (npm init -y)(to intialize npm inside backend)
    3.npm install typescript(npm install typescript)
    4.Create tsconfig.json(in backend f)
    5.create .gitignore(in backend f)
    6.copy data.ts to backend/src
    7.npm install express cors
    8.create server.ts (in src)
        i. install @types
        ii. Add apis
    9.npm install nodemon ts-node --save-dev
    10.add urls.ts to frontend (shared constants)
    11.add HttpClient module (in app.module...used to connect with backend)
    12.update food service (connect to backend using inject)

