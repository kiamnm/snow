import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Adminpanel from "./pages/adminpanel/Adminpanel"
import Items from "./pages/adminpanel/Items"
import Privateroute from "./components/privateroute/Privateroute"
import Currency from "./pages/Currency/Currency";
import Crypto from "./pages/Crypto/Crypto";
import Gold from "./pages/gold/Gold";
import Converter from "./pages/converter/Converter"
import Test from "./pages/test/Test"
import Chat from "./pages/chat/Chat"
import Itemdetail from "./pages/itemdetail/Itemdetail"
import Banner from "./pages/adminpanel/Banner"
import Addbanner from "./pages/adminpanel/Addbanner"
import Filteritem from "./pages/adminpanel/Filteritem"
import Report from "./pages/adminpanel/Report"





const routes=[
    {path:"/", element:<Home/>},
    {path:"/Currency", element:<Currency/>},
    {path:"/Crypto", element:<Crypto/>},
    {path:"/Gold", element:<Gold/>},
    {path:"/Converter", element:<Converter/>},
    {path:"/login",element:<Login/>},
    {path:"/Test",element:<Test/>},
    {path:"/chat",element:<Chat/>},
    
    {path:"/currency/:id",element:<Itemdetail/>},
    {path:"/gold/:id",element:<Itemdetail/>},
    {path:"/crypto/:id",element:<Itemdetail/>},
    {path:"/adminpanel/*",element:<Privateroute><Adminpanel/></Privateroute>,children:[
        {path:"items" ,element:<Items/>},
        {path:"items/filter" ,element:<Filteritem/>},
        {path:"banner" ,element:<Banner/>},
        {path:"banner/add" ,element:<Addbanner/>},
        {path:"report",element:<Report/>},
    ]}
    // {path:"/contact", element:<Contact/>},
    // {path:"/blog", element:<Blog/>},
    // {path:"/blog/:objid",element:<Eachblog/>},
    // {path:"/blog/:id", element:<Eachblog/>},
    // {path:"/aboutus", element:<About/>},
    // {path:"/products", element:<Products/>},
    // {path:"/products/category/:title", element:<Eachcategory/>},
    // {path:"/Adminpanelspc/*", element:<Padminprivate><Adminpanel/> </Padminprivate>, children:[
    //     {path:"product" ,element:<Product/>},
    //     {path:"product/addproduct" ,element:<Addproduct/>},
    //     {path:"product/chooseimg/:objid" ,element:<Chooseimg/>},
    //     {path:"message" ,element:<Message/>},
    //     {path:"article" ,element:<Article/>},
    //     {path:"article/edit/:objid",element:<Editarticle/>},
    //     {path:"article/addarticle" ,element:<Addarticle/>},
    //     {path:"analytic" ,element:<Analytic/>},
    //     {path:"gallery" ,element:<Gallery/>},
    // ]},
    // {path:"/Adminlogin",element:<Adminlogin/>},
    // {path:"*", element:<Page404/>},
    
]
export default routes