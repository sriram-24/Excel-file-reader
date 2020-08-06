# Excel-file-reader

#### **prerequisites**

**node js** -  https://nodejs.org/en/

#### **installation**

- clone the repository

- cd  to the directory

- In command prompt, run

  ```nodejs
  npm install
  ```

- After installing the packages, run

  ```nodejs
  npm run dev
  ```

  

##### Note:

This program can only be able to access the data in the **Book1.xlsx** file. To access your required files changes would be made in the views/index1.pug file 

In the pug file change the line and add your own value from

```
td.pt-3-half(contenteditable='true')= item.firstname
```

To

```
td.pt-3-half(contenteditable='true')= item.<your column header name>
```

make sure to add header  name in the pug file if you are adding more than 3 columns