export default function Footer() {
    return (
        <footer className="border-t px-6 sm:px-12 py-6 bg-background">
            <div className="flex justify-end">
                <span className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Kevin Timachy. All rights reserved.
                </span>
            </div>
        </footer>
    );
}