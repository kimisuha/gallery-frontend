import './App.css';
import { Img } from './Component/Img.js';
import $ from 'jquery';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from './Redux/Reducer/gallery';
import { useNavigate } from 'react-router-dom';

function Search() {
    const dispatch = useDispatch();
    const navigation = useNavigate();
   // const lsImg = useSelector((state) => state.gallery.listImages);
    const sr = useSelector((state) => state.gallery.searchResult);


    const hoverToShow = () => {
        $(".search-bar").hover(function () {
            $(".search-bar #search").show();
            $(".search-bar").css('width', '25rem');
            $(".search-bar #search").css('width', '90%');
        }, function () {
            $(".search-bar #search").hide();
            $(".search-bar").css('width', '2rem');
        });
    };

    const renderLsImage = (list) => {
        console.log(list);
        return list.map((item, i) => {
            return (
                <Img img={item.urls.full} id={item.id} key={i}></Img>
            );
        })
    }

    const getSearch = async () => {
        let words = $('.search-bar input').val();
        await dispatch(search(words));
    }

    useEffect(() => {
        hoverToShow();
    });

    useEffect(() => {
        $(".search-bar #search").hide();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1 onClick={() => navigation('/')}>free wallpaper</h1>
                <p>the free website to dowload wallpaper for your device!</p>
            </header>

            <div className='container'>
                <div className='search-bar'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" onClick={() => getSearch()}>
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input type='text' id='search'></input>

                </div>

                <div className='ima'>
                    {renderLsImage(sr.result.results)}
                </div>
            </div>

            <footer className='ft'>
                <h3>copyright: kimisuha</h3>
                <p>contact me from: kimisuha1912@gmail.com</p>
            </footer>
        </div>
    )
}

export default Search;