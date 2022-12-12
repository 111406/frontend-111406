import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Div0, SearchDiv, ContentDiv, SearchTitle, DivLog, DivLogin, Selectall } from './sty';
import Header from '../../common/header/index';
import { useNavigate } from "react-router-dom";
import { setAuthSearchName } from "../../common/apiUtil";
import { BACKEND_HOST } from "../../../global";

const SearchPage = () => {
    const navigate = useNavigate();
    const [searchName, setSearchName] = useState("undefined");
    const [userOptions, setUserOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            var result = await axios.get(
                `${BACKEND_HOST}/user`,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                },
            ).catch((e) => navigate(`/${e.response.status}`));

            if (result) {
                setUserOptions(result.data['data']);
            }
        };

        fetchData();
    }, []);

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
                        <Selectall onChange={(e) => onChangeInputAge(e.target.value)}>
                            <option key={0} value='undefined'>請選則欲查詢使用者</option>
                            {userOptions.map((option) => (
                                <option key={option._id.$oid} value={option.user_id}>{option.user_id}</option>
                            ))}
                        </Selectall>
                    </DivLog>

                    <DivLogin type="button" className="btn btn-primary" value={'搜尋'} onClick={handleSearch} disabled={searchName === 'undefined'}>
                    </DivLogin>
                </SearchDiv>
            </ContentDiv>
        </Div0>
    );
}

export default SearchPage;