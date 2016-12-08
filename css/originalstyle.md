html{
    font-family: 'Abel', sans-serif;
}

#app-title{
    font-family: 'Abel', sans-serif;
    color:#2d5be3;
    text-align:center;
}

#search-forms{
    background-color:white;
    height:100%;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
}

form{
  margin-left:auto;
  margin-right:auto;
}

#map_and_schedule{
height:60em;
width:90em;
border:none;
}

.container-element{
    display:block;
    display:inline-block;
    height:100%;
    width:33%;
}

#foursquare-output{
    float:left;
    border: 1px solid black;
    background-color:#2d5be3;
    color:#fff;
}


#directions{
    background-color:#fff;
    color:#2d5be3;
    float:left;
    overflow:scroll;
}
#map{
   background-color:#ccc;
}

#search-query{
    color:black;
}

ul{
    list-style:none;
}

li{
    margin:0 0 10px 0;
}

button{
    border:none;
    background-color:#2d5be3;
    padding:8px;
    color:#fff;
    border-radius:10px;
}

#search-query{
 border:none;
 width: 85%;
 background-color:white;
 line-height:10px;
}


.tt-query, /* UPDATE: newer versions use tt-input instead of tt-query */
.tt-hint {
    width: 85%;
    height: 10px;
    padding: 8px 12px;
    font-size: 0.85em;
    line-height: 0px;
    border: 2px solid #ccc;
    border-radius: 8px;
    outline: none;
}

.tt-input { /* UPDATE: newer versions use tt-input instead of tt-query */
    box-shadow:none; /*inset 0 1px 1px rgba(0, 0, 0, 0.075);*/
}

.tt-hint {
    border-style:solid;
    color: transparent;
}

.tt-menu { /* UPDATE: newer versions use tt-menu instead of tt-dropdown-menu */
    width: 100%;
    margin-top: 0px;
    padding: 8px 0;
    background-color: #fff;
    border: 3px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    cursor:pointer;
}

.tt-suggestion {
    padding: 3px 20px;
    font-size: 18px;
    line-height: 24px;
}


@media screen and (max-width: 608px) {
  .container-element{
      float:left;
      display:block;
      height:33%;
      width:100%;
  }
}