import end from './end.css';
export function End()
{
    const today=new Date().getFullYear;
    return(
        <div className="End-div" >
            <footer>CopyRight {today}</footer>
        </div>
    )
}