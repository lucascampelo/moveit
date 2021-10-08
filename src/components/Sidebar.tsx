import { ThemeContext } from 'contexts/ThemeContext';
import { useContext, useEffect } from 'react';
import styles from '../styles/components/Sidebar.module.css';
import html2canvas from 'html2canvas';

export function Sidebar() {
    const { isDark, toggleDarkMode } = useContext(ThemeContext);

    const toggleDarkModeAnimation = async () => {
        if ('HTMLCanvasElement' in window) {
            const canvas = await html2canvas(document.body, {
                allowTaint: true
            })
            canvas.classList.add(styles.canvas)
            const wrapper = document.createElement('div')
            wrapper.classList.add(styles.canvasWrapper)
            wrapper.appendChild(canvas)
            document.body.appendChild(wrapper)
            setTimeout(() => {
                wrapper.remove()
            }, 510)
        }
        toggleDarkMode()
    }

    useEffect(() => {
        const html = document.body.parentNode as HTMLElement;
        if (isDark) {
            html.classList.add('dark-mode');
        } else {
            html.classList.remove('dark-mode');
        }
    }, [isDark]);

    return (
        <div className={styles.sidebarContainer}>
            <img src="/logo.svg" alt="Logo" className="logo" />

            <div className={styles.menuItems}>
                <ul>
                    <li className={isDark ? 'active' : ''}>
                        <button
                            type="button"
                            onClick={toggleDarkModeAnimation}
                        >
                            <span className="material-icons">{isDark ? 'toggle_on' : 'toggle_off'}</span> Dark
                        </button>
                    </li>
                    <li className="active">
                        <a href="javascript:void(0);">
                            <img src="/icons/home.svg" alt="Home" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}