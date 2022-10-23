import React,{Component,useState} from "react";
import {Div0,SearchDiv,ContentDiv,SearchTitle,DivLog,InPutL,DivLogin} from'./sty';
import { Token } from "../../common/token";
import Header from '../../common/header/index';
import { useNavigate } from "react-router-dom";
// const [loading, setLoading] = React.useState(false);
// const [username, setUsername] = useState("");
// const [errorMessage, setErrorMessage] = useState("");
const allUser=[];

      
const SearchPage = () => {
        const navigate = useNavigate();
        const [searchName, setSearchName] = useState("");
        const handleSearchName = (e) => {
            setSearchName(e.target.value);
          };
          
fetch('https://backend-111406.onrender.com/api/user', {
  method: "GET",
  headers: new Headers({
      'Content-Type': 'application/json',
      'token': Token, /* 把token放在這 */
  })
}
)
.then(function(response) {
return response.json();
})
.then(function(myJson) {
return myJson.data;
})
.then(function(user) {
for (var i = 0; i < user.length; i++) {
allUser.push(user[i].user_id);

}

// console.log(allUser);
})
        const handleSearch = (e) => {
            for (var i = 0; i < allUser.length; i++) {
                if(allUser[i]==searchName){
                    // console.log(searchName);
                    navigate('/personal/'+searchName);
                }
              }
          };
        return (
                <Div0>
                    <Header></Header>
                    <ContentDiv>
                        <SearchDiv>
                            <SearchTitle>請輸入欲搜尋使用者：</SearchTitle>
                            <DivLog>
                            <InPutL id="email" type="text" placeholder="USERNAME" size="30" value={searchName} onChange={handleSearchName} ></InPutL>
                            </DivLog>
                            <DivLogin type="button" className="btn btn-primary" value={'搜尋'} onClick={handleSearch}>
                            </DivLogin>
                        </SearchDiv>
                    </ContentDiv>
                </Div0>
        );}

export default SearchPage;