export default function NotFound() {
    return (
        <div className="h-screen text-center flex flex-col items-center justify-center gap-y-4">
            <h1 className="text-4xl font-bold max-w-xl px-2">The page you&apos;re looking for can&apos;t be found.</h1>
            <p className="text-lg mt-4">If you think this is a mistake, please contact us at <a href="mailto:info@modetocode.com" className="text-blue-600 underline">info@modetocode.com</a>.</p>
        </div>
    );
}