import React, { useState } from "react";
import { Div0, SearchDiv, ContentDiv, SearchTitle, DivLog, DivLogin, Selectall } from './sty';
import Header from '../../common/header/index';
import { useNavigate } from "react-router-dom";
import { setAuthSearchName } from "../../common/apiUtil";
const allUser = [];

const SearchPage = () => {
    // console.log(getAuthToken());
    const options3 = []
    const navigate = useNavigate();
    const [searchName, setSearchName] = useState("");
    const [options4, setoptions4] = useState([]);;
    if (options4.length < 2) {
        fetch('https://web-backend-111406.onrender.com/api/user', {
            method: "GET",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }).then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
                return myJson.data;
            })
            .then(function (user) {
                for (var i = 0; i < user.length; i++) {
                    allUser.push(user[i].user_id);
                    options3.push({
                        label: user[i].user_id,
                        value: user[i].user_id,
                        key: i + 1,
                    })
                }
                // setoptions4(options3);
                // console.log(options3);
                setoptions4(options3)
            }).catch((err) => navigate("/"));
    }
    function onChangeInputAge(value) {
        setSearchName(value);
    }
    const handleSearch = (e) => {
        setAuthSearchName(searchName);
        navigate('/personal/' + searchName);
    };
    return (
        <Div0>
            <Header></Header>
            <ContentDiv>
                <SearchDiv>
                    <SearchTitle>請輸入欲搜尋使用者：</SearchTitle>
                    <DivLog>
                        {/* {console.log("123"+options4)} */}
                        {/* <InPutL id="email" type="text" placeholder="USERNAME" size="30" value={searchName} onChange={handleSearchName} ></InPutL> */}
                        <Selectall onChange={(e) => onChangeInputAge(e.target.value)}>
                            <option key={0} value='undifine'>請選則欲查詢使用者</option>
                            {options4.map((a) => (
                                <option key={a.key} value={a.value}>{a.label}</option>
                            ))}
                        </Selectall>
                        {/* <AllUser></AllUser> */}
                    </DivLog>

                    <DivLogin type="button" className="btn btn-primary" value={'搜尋'} onClick={handleSearch} disabled={searchName.length === 0}>
                    </DivLogin>
                </SearchDiv>
            </ContentDiv>
        </Div0>
    );
}

export default SearchPage;