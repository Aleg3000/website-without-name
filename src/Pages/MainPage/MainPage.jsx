import React, { useState } from 'react'
import styles from './MainPage.module.css'

export const MainPage = () => {
    const [flex, setFlex] = useState({left: 3.2, right: 1})

    const onEnter = (position) => {
        if (position === 'right') {
            setFlex({left: 1, right: 3.2})
        }
    };

    const onLeave = (position) => {
        if (position === 'right') {
            setFlex({left: 3.2, right: 1})
        }
    };

    return (
        <div className="container">
            <h2 className={styles.mainTitle}>web<br></br>
                —design<br></br>
                 marketing
            </h2>
            <div className={styles.projectsNav}>
                <div>Все проекты</div>
                <div>брендинг</div>
                <div>аналитика</div>
                <div>веб</div>
                <div>дизайн</div>
                <div>маркетинг</div>
                <div>консалтинг</div>
            </div>
            {/* flex pics */}
            <div className={styles.projectsContainer}>
                <div className={styles.projectItem} onMouseEnter={() => onEnter('left')} onMouseLeave={() => onLeave('left')} style={ {flexGrow: flex.left} }>
                    <div className={styles.projectImage}></div>
                    <h3>Title</h3>
                </div>
                <div className={styles.projectItem} onMouseEnter={() => onEnter('right')} onMouseLeave={() => onLeave('right')} style={ {flexGrow: flex.right} }>
                    <div className={styles.projectImage}></div>
                    <h3>Title</h3>
                </div>
            </div>
            <div className={styles.projectsContainer}>
                <div className={styles.projectItem}>
                    <div className={styles.projectImage}></div>
                    <h3>Title</h3>
                </div>
                <div className={styles.projectItem}>
                    <div className={styles.projectImage}></div>
                    <h3>Title</h3>
                </div>
                <div className={styles.projectItem}>
                    <div className={styles.projectImage} style={ {flexGrow: 3} } ></div>
                    <h3>Title</h3>
                </div>
            </div>
        </div>
        
    )
}
