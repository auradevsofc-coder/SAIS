import logoSais from '../assets/imagem_sais.png';
export function NavBar() {
    return (
        <>
        <nav>
    <div className="logo-container">
        <img src={logoSais} alt="Logo SAIS" className="main-logo" />
    </div>
        </nav>
        </>
    );
}
