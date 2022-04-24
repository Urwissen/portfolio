export default function ThemeSwitcher(props) {
    return (
        <div className={`${props.darkMode} theme-switcher toggler`} onClick={props.toggleDarkMode}>
            <i className={`fas fa-sun ${props.darkMode === "" ? "isActive" : ""}`}></i>
            <i className={`fas fa-moon ${props.darkMode === "dark" ? "isActive" : ""}`}></i>
            <i className={`fas fa-star ${props.darkMode === "rainbow" ? "isActive" : ""}`}></i>
        </div>
    )
}
