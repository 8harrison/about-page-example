export default function Footer() {
    return (
        <footer className="footer footer-center bg-green-800 text-white p-4 text-xs font-display font-semibold">
            <aside className="flex flex-col sm:flex-row">
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved
                </p>
                <p>by Harrison Monteiro de Oliveira</p>
            </aside>
        </footer>
    );
}
