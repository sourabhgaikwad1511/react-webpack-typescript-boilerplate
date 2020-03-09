-   create folder
    - use below cmd to create package.json
        - cd <folder_name>
        - npm init
        - npm i react react-dom
        - npm i webpack webpack-dev-server webpack-cli -D
        - npm i typescript awesome-typescript-loader -D
        - npm i @types/react @types/react-dom -D
        - npm i html-webpack-plugin -D

        // To debug in devtool by adding breakpoint(in sources tab).
        - npm i source-map-loader -D    
        - npm i mini-css-extract-plugin css-loader sass-loader node-sass -D
        // If you got peer dependancy warining and got error because of that then use
        - npm install --save-dev sass fibers
        
        // ExtractTextPlugin is deprecated use mini-css-extract-plugin as above
        -  npm i extract-text-webpack-plugin css-loader -D
        - npm i sass-loader node-sass -D

-   follow the project file structure