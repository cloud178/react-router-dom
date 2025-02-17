import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";
import {Model} from "./components/pages/Model";

export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE_ERROR_404: '/page/error404',
    PAGE_SNEAKERS_MODEL_ID: '/:model/:id',
} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    {/*way 1*/}
                    {/*<div>*/}
                    {/*    <NavLink*/}
                    {/*        to={PATH.PAGE1}*/}
                    {/*        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}*/}
                    {/*    >Page 1</NavLink>*/}
                    {/*</div>*/}

                    {/*way 2, using style components*/}
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>

                        <Route path={PATH.PAGE_SNEAKERS_MODEL_ID} element={<Model/>}/>

                        {/*Пример чтобы показать что можно несколько параметров передавать*/}
                        {/*<Route path={'/adidas/:id/:id2'} element={<Model/>}/>*/}

                        {/*два варианта обработки неправильных запросов, это либо всегда в адресной строке менять на error404 либо оставлять ту белиберду что ввёл пользователь*/}
                        {/*1 вариант*/}
                        <Route path="/*" element={<Navigate to={PATH.PAGE_ERROR_404}/>}/>
                        <Route path={PATH.PAGE_ERROR_404} element={<Error404/>}/>
                        {/*2 вариант*/}
                        {/*<Route path={'/*'} element={<Error404/>}/>*/}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
