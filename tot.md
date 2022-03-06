オプショナルチェーン ?.
nullish(null or undefined) --> return undefined rather than error

Warning: Each child in a list should have a unique “key” prop.」の回避はコンポーネントの呼び出され側ではなく呼び出し側で行う

&nbsp;


You can easily customize the appearance of a MUI component.
https://mui.com/customization/how-to-customize/
.css-ae2u5c-MuiSlider-thumb
[hash]-Mui[Component name]-[name of the slot]

Global CSS override
Components expose global class names to enable customization with CSS.


grid breakpoint
https://next--material-ui.netlify.app/ja/components/grid/
flexgrow
https://dekiru.net/article/13237/
grid container tate
https://teech-lab.com/react-typescript-material-ui-grid-layout/1835/

https://qiita.com/tag1216/items/2935c9979b857bb7701f

item cardの大きさは 
        <Grid container justify="center" spacing={5} >
        {[1,2,3,4,5,6,7,8].map((product,idx) => (
            <Grid item key={idx} lg={3} >
            <Product />
            </Grid>
          ))}
        </Grid>
このgrid breakpointで決めた方がいい

改行pre
https://code-kitchen.dev/html/pre/
https://stackoverflow.com/questions/52463765/typography-in-react-material-ui

email
password
wishlist[product]
cartId