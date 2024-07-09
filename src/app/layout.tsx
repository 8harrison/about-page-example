import "./globals.css";
export const metadata = {
    title: "Genésio Silva",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body style={{ margin: 0 }}>{children}</body>
        </html>
    );
}
