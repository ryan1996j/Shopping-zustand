export const Container = ({ children, className }) => {
    return (
        <div className={`w-full md:w-[720px]  lg:w-[1000px] mx-auto ${className} bg-slate-100`}>
            {children}
        </div>
    );
};
