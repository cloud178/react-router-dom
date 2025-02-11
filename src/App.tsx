import React from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";

const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
    PAGE_ERROR_404: '/page/error404',
} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div>
                        <NavLink
                            to={PATH.PAGE1}
                            className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                        >Page 1</NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={PATH.PAGE2}
                            className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                        >Page 2</NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={PATH.PAGE3}
                            className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                        >Page 3</NavLink>
                    </div>
                    <S.NavWrapper>
                        <NavLink
                            to={'/page3'}
                        >Page 3 (using styled components)</NavLink>
                    </S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/page1"/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>

                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        {/*два варианта обработки неправильных запросов, это либо всегда в адресной строке менять на error404 либо оставлять ту белиберду что ввёл пользователь*/}
                        {/*1 вариант*/}
                        <Route path="/*" element={<Navigate to="/page/error404"/>}/>
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
