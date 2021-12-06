import TopNews from "../../pages/TopNews";
import PostsIdPages from "../../pages/PostsIdPages";
import Home from "../../pages/home/Home";
import Enter from "../../pages/Enter/Enter";
import Statistics from "../../pages/stats/Statistics";
import About from "../../pages/about/About";
import Contacts from "../../pages/Contacts/Contacts";
import Authorisation from "../../pages/Authorisation/Authorisation";
import MyButtons from "../../UI/buttons/MyButtons";
import MyProfile from "../../pages/MyProfile/MyProfile";

import Themes from "../../pages/Themes/Themes";
import Settings from "../../pages/Settings/Settings";
import FavoriteThemes from "../../pages/FavoriteThemes/FavoriteThemes";
import ModalHelp from "../../pages/Authorisation/ModalHelp";
import EditPhoto from "../../pages/Settings/EditPhoto";
import Registration from "../../pages/Registration/Registration";

export const privateRoutes=[
    {path:'/home',component:Home,exact:true },
    {path:'/topNews',component:TopNews,exact:true},
    {path:'/statistics',component:Statistics,exact:true},
    {path:'/home/posts/:id',component:PostsIdPages,exact:true},
    {path:'/about',component:About,exact:true},
    {path:'/contacts',component:Contacts,exact:true},
    {path:'/profile',component:MyProfile,exact:true},
    {path:'/themes',component:Themes,exact:true},
    {path:'/settings',component:Settings,exact:true},
    {path:'/favoriteThemes',component:FavoriteThemes,exact:true},
    {path:'/editPhoto',component:EditPhoto,exact:true},


]
export const publicRoutes=[
    {path:'/enter',component:Enter,exact:true},
    {path:'/login',component:Authorisation,exact:true},
    {path:'/registration',component:Registration,exact:true},
    {path:'/about',component:About,exact:true},
    {path:'/contacts',component:Contacts,exact:true},
    {path:'/help',component:ModalHelp,exact:true}


]
export const privateComponents=[

     {path:'/home', exact:true,text:"Home",class:"fas fa-home barLink"},
    {path:'/topNews', exact:true,text:"TopNews",class:"fas fa-newspaper barLink"},
    {path:'/statistics', exact:true,text:"Statistics",class:"fas fa-clipboard-list barLink"},
    {path:'/about', exact:true,text:"About",class:"fas fa-question-circle barLink"},
    {path:'/contacts',exact:true,text:"Contacts",class:"fas fa-users barLink"},

    //{path:'/login',exact:true,text:"Log out"}

]
export const publicComponents=[

    {path:'/about', exact:true,text:"About",class:"fas fa-question-circle barLink"},
    {path:'/contacts',exact:true,text:"Contacts",class:"fas fa-users barLink"},


]
 export const themes=[
     {class:"theme",id:"t1",text:"Sport",onClick:function setMark(){}},
     {class:"theme",id:"t2",text:"Business"},
     {class:"theme",id:"t3",text:"Fashion"},
     {class:"theme",id:"t4",text:"Medicine"},
     {class:"theme",id:"t5",text:"Cinema"},
     {class:"theme",id:"t6",text:"Arts"},
     {class:"theme",id:"t7",text:"Music"},
     {class:"theme",id:"t8",text:"IT"},
     {class:"theme",id:"t9",text:"Games"},
 ]